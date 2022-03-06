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
        'code': 'pytest',
        'start': 0,
        'workstyle': 0,
        'communication': 0,
        'commitment': 0,
        'expertise': 0,
        'availibility': [1 for i in range(56)]
    },
        {
        'name': "B",
        'year': 'Freshman',
        'dorm': 'Wilbur',
        'code': 'pytest',
        'start': 0,
        'workstyle': 0,
        'communication': 0,
        'commitment': 0,
        'expertise': 0,
        'availibility': [1 for i in range(56)]
    }]
    assert get_similarity(Form(**data[0]), Form(**data[1])) == 1


def test_sim2():
    data = [{
        'name': "A",
        'year': 'Freshman',
        'dorm': 'Wilbur',
        'code': 'pytest',
        'start': 0,
        'workstyle': 0,
        'communication': 0,
        'commitment': 0,
        'expertise': 0,
        'availibility': [0 for i in range(56)]
    },
        {
        'name': "B",
        'year': 'Freshman',
        'dorm': 'Wilbur',
        'code': 'pytest',
        'start': 0,
        'workstyle': 0,
        'communication': 0,
        'commitment': 0,
        'expertise': 0,
        'availibility': [1 for i in range(56)]
    }]
    assert get_similarity(Form(**data[0]), Form(**data[1])) == 0


def test_hc():
    data = [{
        'name': "A",
        'year': 'Freshman',
        'dorm': 'Wilbur',
        'code': 'pytest',
        'start': 0,
        'workstyle': 0,
        'communication': 0,
        'commitment': 0,
        'expertise': 0,
        'availibility': [1 for i in range(56)]
    },
        {
        'name': "B",
        'year': 'Freshman',
        'dorm': 'Wilbur',
        'code': 'pytest',
        'start': 0,
        'workstyle': 0,
        'communication': 0,
        'commitment': 0,
        'expertise': 0,
        'availibility': [1 for i in range(56)]
    },
        {
        'name': "C",
        'year': 'Senior',
        'dorm': 'The Row',
        'code': 'pytest',
        'start': 2,
        'workstyle': 2,
        'communication': 2,
        'commitment': 2,
        'expertise': 0,
        'availibility': [1 for i in range(56)]
    },
        {
        'name': "D",
        'year': 'Senior',
        'dorm': 'The Row',
        'code': 'pytest',
        'start': 2,
        'workstyle': 2,
        'communication': 2,
        'commitment': 2,
        'expertise': 2,
        'availibility': [1 for i in range(56)]
    },
        {
        'name': "E",
        'year': 'Junior',
        'dorm': 'EVGR A',
        'code': 'pytest',
        'start': 2,
        'workstyle': 1,
        'communication': 0,
        'commitment': 1,
        'expertise': 1,
        'availibility': [1 for i in range(56)]
    },
        {
        'name': "F",
        'year': 'Junior',
        'dorm': 'Wilbur',
        'code': 'pytest',
        'start': 1,
        'workstyle': 2,
        'communication': 2,
        'commitment': 1,
        'expertise': 1,
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
