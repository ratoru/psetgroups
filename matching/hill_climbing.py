# Inspired by https://towardsdatascience.com/how-to-implement-the-hill-climbing-algorithm-in-python-1c65c29469de
import random
from typing import List, Set
import numpy as np
from form import Form
from similarity import get_similarity


class HillClimbing:
    """Class to model steepest ascent hill climbing. 
    hillClimbing can be called multiple times in a row and will use a new starting solution each time.
    """

    def __init__(self, forms: List[Form]):
        self.num_people = len(forms)
        self.forms = forms
        self.sim_matrix = [[get_similarity(x, y)
                            for x in forms] for y in forms]

    def __randomSolution(self) -> List[int]:
        """Returns a random matching. Pairs are to be made from left to right.
        If length is odd, last person is considered unmatched.

        Returns:
            List[int]: a list of indices representing entries in self.forms
        """
        solution = list(range(self.num_people))
        random.shuffle(solution)
        return solution

    def __matchingScore(self, solution) -> float:
        # Sum of similarity scores
        score = 0
        for i in range(1, len(solution), 2):
            # Read solution as [(i_1, i_2), (i_3, i_4), ... ]
            score += self.sim_matrix[solution[i - 1]][solution[i]]
        return score

    def __getNeighbours(self, solution: List):
        # Currently very inefficient
        neighbours = []
        for i in range(len(solution)):
            for j in range(i + 1, len(solution)):
                neighbour = solution.copy()
                neighbour[i] = solution[j]
                neighbour[j] = solution[i]
                neighbours.append(neighbour)
        return neighbours

    # def __getNeighbours(self, solution: List):
    #     neighbours = []
    #     for i in range(1, len(solution), 2):
    #         for j in range(i + 1, len(solution)):
    #             neighbour = solution.copy()
    #             neighbour[i] = solution[j]
    #             neighbour[j] = solution[i]
    #             neighbours.append(neighbour)
    #     if (len(solution) % 2 == 1):
    #         for i in range(0, len(solution) - 1, 2):
    #             neighbour = solution.copy()
    #             neighbour[i] = solution[len(solution) - 1]
    #             neighbour[len(solution) - 1] = solution[i]
    #             neighbours.append(neighbour)
    #     return neighbours

    def __getBestNeighbour(self, neighbours):
        bestScore = self.__matchingScore(neighbours[0])
        bestNeighbour = neighbours[0]
        for neighbour in neighbours:
            currentScore = self.__matchingScore(neighbour)
            if currentScore > bestScore:
                bestScore = currentScore
                bestNeighbour = neighbour
        return bestNeighbour, bestScore

    def hillClimbing(self):
        currentSolution = self.__randomSolution()
        print(currentSolution)
        currentScore = self.__matchingScore(currentSolution)
        neighbours = self.__getNeighbours(currentSolution)
        bestNeighbour, bestNeighbourScore = self.__getBestNeighbour(
            neighbours)

        while bestNeighbourScore > currentScore:
            currentSolution = bestNeighbour
            currentScore = bestNeighbourScore
            neighbours = self.__getNeighbours(currentSolution)
            bestNeighbour, bestNeighbourScore = self.__getBestNeighbour(
                neighbours)

        return currentSolution, currentScore

    def printSolution(self, solution):
        matching = []
        for i in range(1, len(solution), 2):
            p1 = solution[i - 1]
            p2 = solution[i]
            matching.append(
                (self.forms[p1].name, self.forms[p2].name, self.sim_matrix[p1][p2]))
        matching.sort(key=lambda x: x[2], reverse=True)

        dash = '-' * 50
        print(dash)
        print('{:<20s}{:<20s}{:>10s}'.format(
            'Partner 1', 'Partner 2', 'Score'))
        print(dash)
        for m in matching:
            print('{:<20s}{:<20s}{:>10.4f}'.format(
                m[0], m[1], m[2]))
