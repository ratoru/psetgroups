import numpy as np
from form import Form


def get_similarity(f1: Form, f2: Form) -> float:
    """Given two forms returns their similarity score. 
    Converts forms to vectors and computes weighted euclidian distance.
    If the time overlap is less than 3, the similarity is 0.

    Args:
        f1 (Form): the first form representing a person
        f2 (Form): the second form

    Returns:
        float: the similarity score between [0, 1]
    """
    time_overlap = np.dot(np.array(f1.availibility), np.array(f2.availibility))
    ec_dst = weighted_ed(to_vec(f1), to_vec(f2))
    # return 1 / (1 + ec_dst) if time_overlap >= 3 else 0
    # availibility is broken. doesn't get put to mongodb
    return 1 / (1 + ec_dst) if time_overlap >= 3 else 0


def weighted_ed(x: np.array, y: np.array) -> float:
    return np.linalg.norm(x-y)


# def weightedL2(a,b,w):
#     q = a-b
#     return np.sqrt((w*q*q).sum())


def to_vec(f: Form) -> np.array:
    return np.array([convert_year(f.year), convert_dorm(f.dorm), f.start, f.workstyle, f.communication, f.commitment, f.expertise])


def convert_year(year: str) -> int:
    if year == 'Freshman':
        return 1
    if year == 'Sophomore':
        return 2
    if year == 'Junior':
        return 3
    if year == 'Senior':
        return 4
    return 5


def convert_dorm(dorm: str) -> int:
    return 0
