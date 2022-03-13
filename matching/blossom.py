from form import Form
from typing import List
from similarity import get_similarity
from max_matching import maxWeightMatching

Pairing = tuple[str, str, float]


class Blossom:
    """Class to model the blossom algorithm
    """

    def __init__(self, forms: List[Form]):
        self.num_people = len(forms)
        self.forms = forms
        self.sim_matrix = [[get_similarity(x, y)
                            for x in forms] for y in forms]
        self.edges = [(i, j, self.sim_matrix[i][j]) for i in range(
            self.num_people) for j in range(i + 1, self.num_people)]

    def print_blossom(self):
        mate = maxWeightMatching(self.edges)
        matched, unmatched = self.__transform_matching(mate)
        self.__print_solution(matched, unmatched)

    def __transform_matching(self, mate: List[int]) -> tuple[List[Pairing], List[str]]:
        """Given a mate list, transforms it into a sorted matching list

        Args:
            mate (List[int]): A list such that mate[i] == j if vertex i is matched to vertex j, and mate[i] == -1 if vertex i is not matched.
        """
        matchings_set = set()
        unmatched = []
        for i in range(len(mate)):
            if mate[i] != -1:
                p = (i, mate[i]) if i < mate[i] else (mate[i], i)
                matchings_set.add(p)
            else:
                unmatched.append(self.forms[i].name)
        matches = [(self.forms[p1].name, self.forms[p2].name,
                    self.sim_matrix[p1][p2]) for p1, p2 in matchings_set]
        matches.sort(key=lambda x: x[2], reverse=True)
        return matches, unmatched

    def __print_solution(self, matching: List[Pairing], unmatched: List[str]):
        """Given a sorted matching prints it out nicely.

        Args:
            matching (List): Each match should be a tuple of form (name1, name2, score)
        """
        dash = '-' * 50
        print(dash)
        print('{:<20s}{:<20s}{:>10s}'.format(
            'Partner 1', 'Partner 2', 'Score'))
        print(dash)
        for m in matching:
            print('{:<20s}{:<20s}{:>10.4f}'.format(
                m[0], m[1], m[2]))
        average_score = sum([m[2] for m in matching]) / len(matching)
        print(dash)
        print('{:<20s}{:<20s}{:>10.4f}'.format(
            'Average Score', '', average_score))
        print('\n' + dash)
        print('Unmatched')
        print(dash)
        if unmatched:
            for u in unmatched[:-1]:
                print(u, end=', ')
            print(unmatched[-1])
        else:
            print('None!')
