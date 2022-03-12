import pytest
from typing import List
from hill_climbing import HillClimbing
from form import Form
from similarity import get_similarity


def test_sim():
    data = [{
        'name': "A",
        'year': 'Freshman',
        'dorm': 'Wilbur',
        'dormW': 1,
        'code': 'pytest',
        'start': 0,
        'startW': 2,
        'workstyle': 0,
        'workstyleW': 2,
        'communication': 0,
        'communicationW': 2,
        'commitment': 0,
        'commitmentW': 0,
        'expertise': 0,
        'expertiseW': 2,
        'personality': 1,
        'personalityW': 0,
        'sleep': 1,
        'sleepW': 0,
        'office': 1,
        'officeW': 0,
        'availibility': [1 for i in range(56)]
    },
        {
        'name': "B",
        'year': 'Freshman',
        'dorm': 'Wilbur',
        'dormW': 1,
        'code': 'pytest',
        'start': 0,
        'startW': 2,
        'workstyle': 0,
        'workstyleW': 2,
        'communication': 0,
        'communicationW': 2,
        'commitment': 0,
        'commitmentW': 0,
        'expertise': 0,
        'expertiseW': 2,
        'personality': 1,
        'personalityW': 0,
        'sleep': 1,
        'sleepW': 0,
        'office': 1,
        'officeW': 0,
        'availibility': [1 for i in range(56)]
    }]
    assert get_similarity(Form(**data[0]), Form(**data[1])) == 1


def test_sim2():
    data = [{
        'name': "A",
        'year': 'Freshman',
        'dorm': 'Wilbur',
        'dormW': 1,
        'code': 'pytest',
        'start': 0,
        'startW': 2,
        'workstyle': 0,
        'workstyleW': 2,
        'communication': 0,
        'communicationW': 2,
        'commitment': 0,
        'commitmentW': 0,
        'expertise': 0,
        'expertiseW': 2,
        'personality': 1,
        'personalityW': 0,
        'sleep': 1,
        'sleepW': 0,
        'office': 1,
        'officeW': 0,
        'availibility': [0 for i in range(56)]
    },
        {
        'name': "B",
        'year': 'Freshman',
        'dorm': 'Wilbur',
        'dormW': 1,
        'code': 'pytest',
        'start': 0,
        'startW': 2,
        'workstyle': 0,
        'workstyleW': 2,
        'communication': 0,
        'communicationW': 2,
        'commitment': 0,
        'commitmentW': 0,
        'expertise': 0,
        'expertiseW': 2,
        'personality': 1,
        'personalityW': 0,
        'sleep': 1,
        'sleepW': 0,
        'office': 1,
        'officeW': 0,
        'availibility': [1 for i in range(56)]
    }]
    assert get_similarity(Form(**data[0]), Form(**data[1])) == 0


def test_hc():
    data = [{
        'name': "A",
        'year': 'Freshman',
        'dorm': 'Wilbur',
        'dormW': 1,
        'code': 'pytest',
        'start': 0,
        'startW': 2,
        'workstyle': 0,
        'workstyleW': 2,
        'communication': 0,
        'communicationW': 2,
        'commitment': 0,
        'commitmentW': 0,
        'expertise': 0,
        'expertiseW': 2,
        'personality': 1,
        'personalityW': 0,
        'sleep': 1,
        'sleepW': 0,
        'office': 1,
        'officeW': 0,
        'availibility': [1 for i in range(56)]
    },
        {
        'name': "B",
        'year': 'Freshman',
        'dorm': 'Wilbur',
        'dormW': 1,
        'code': 'pytest',
        'start': 0,
        'startW': 2,
        'workstyle': 0,
        'workstyleW': 2,
        'communication': 0,
        'communicationW': 2,
        'commitment': 0,
        'commitmentW': 0,
        'expertise': 0,
        'expertiseW': 2,
        'personality': 1,
        'personalityW': 0,
        'sleep': 1,
        'sleepW': 0,
        'office': 1,
        'officeW': 0,
        'availibility': [1 for i in range(56)]
    },
        {
        'name': "C",
        'year': 'Senior',
        'dorm': 'The Row',
        'dormW': 1,
        'code': 'pytest',
        'start': 2,
        'startW': 2,
        'workstyle': 2,
        'workstyleW': 2,
        'communication': 2,
        'communicationW': 2,
        'commitment': 2,
        'commitmentW': 2,
        'expertise': 0,
        'expertiseW': 0,
        'personality': 1,
        'personalityW': 0,
        'sleep': 1,
        'sleepW': 0,
        'office': 1,
        'officeW': 0,
        'availibility': [1 for i in range(56)]
    },
        {
        'name': "D",
        'year': 'Senior',
        'dorm': 'The Row',
        'dormW': 1,
        'code': 'pytest',
        'start': 2,
        'startW': 1,
        'workstyle': 2,
        'workstyleW': 2,
        'communication': 2,
        'communicationW': 2,
        'commitment': 2,
        'commitmentW': 2,
        'expertise': 2,
        'expertiseW': 2,
        'personality': 1,
        'personalityW': 0,
        'sleep': 1,
        'sleepW': 0,
        'office': 1,
        'officeW': 0,
        'availibility': [1 for i in range(56)]
    },
        {
        'name': "E",
        'year': 'Junior',
        'dorm': 'EVGR A',
        'dormW': 1,
        'code': 'pytest',
        'start': 2,
        'startW': 2,
        'workstyle': 1,
        'workstyleW': 1,
        'communication': 0,
        'communicationW': 0,
        'commitment': 1,
        'commitmentW': 1,
        'expertise': 1,
        'expertiseW': 1,
        'personality': 1,
        'personalityW': 0,
        'sleep': 0,
        'sleepW': 0,
        'office': 1,
        'officeW': 0,
        'availibility': [1 for i in range(56)]
    },
        {
        'name': "F",
        'year': 'Junior',
        'dorm': 'Wilbur',
        'dormW': 1,
        'code': 'pytest',
        'start': 1,
        'startW': 1,
        'workstyle': 2,
        'workstyleW': 2,
        'communication': 2,
        'communicationW': 2,
        'commitment': 1,
        'commitmentW': 1,
        'expertise': 1,
        'expertiseW': 1,
        'personality': 1,
        'personalityW': 0,
        'sleep': 2,
        'sleepW': 0,
        'office': 1,
        'officeW': 0,
        'availibility': [1 for i in range(56)]
    },
    ]
    forms: List[Form] = [Form(**d) for d in data]
    hc = HillClimbing(forms)
    solution, score = hc.hillClimbing()
    assert format_solution(solution, forms) == [(0, 1), (2, 3), (4, 5)]


def format_solution(solution: List[int], forms: List[Form]):
    formatted = []
    len_sol = len(solution)
    for i in range(1, len_sol, 2):
        p = sorted([solution[i - 1], solution[i]])
        formatted.append((p[0], p[1]))
    if len_sol % 2 == 1:
        formatted.append((solution[len_sol - 1], solution[len_sol - 1]))
    return sorted(formatted, key=lambda p: get_similarity(forms[p[0]], forms[p[1]]), reverse=True)
