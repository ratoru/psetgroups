import numpy as np
from form import Form

OVERLAP: int = 2


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
    ec_dst = weighted_ed(to_vec(f1), to_vec(f2), get_weights(f1, f2))
    return 1 / (1 + ec_dst) if time_overlap >= OVERLAP else 0


def weighted_ed(x: np.array, y: np.array, w: np.array) -> float:
    # return np.linalg.norm(x-y)
    q = x - y
    return np.sqrt((w*q*q).sum())


def to_vec(f: Form) -> np.array:
    """Converts a form into a normalized vector where each entry between [0, 1].

    Args:
        f (Form): the form to be converted

    Returns:
        np.array: the normalized vector
    """
    return np.array([convert_year(f.year), convert_dorm(f.dorm), f.start / 2, f.workstyle / 2, f.communication / 2, f.commitment / 2, f.expertise / 2, f.personality / 2, f.sleep / 2, f.office / 2])


def get_weights(f1: Form, f2: Form) -> np.array:
    """Returns the weights needed for the weighted euclidian distance.
    Defines weights as w = max(w_1, w_2).

    Args:
        f1 (Form): first form
        f2 (Form): second form

    Returns:
        np.array: weights array with the same dimensions as to_vec
    """
    weights = np.array([2, max(f1.dormW, f2.dormW) * 2, max(f1.startW, f2.startW), max(f1.workstyleW, f2.workstyleW), max(f1.communicationW, f2.communicationW), max(
        f1.commitmentW, f2.commitmentW), max(f1.expertiseW, f2.expertiseW), max(f1.personalityW, f2.personalityW), max(f1.sleepW, f2.sleepW), max(f1.officeW, f2.officeW)])
    return np.true_divide(weights, 2)


def convert_year(year: str) -> float:
    if year == 'Freshman':
        return 0
    if year == 'Sophomore':
        return 0.25
    if year == 'Junior':
        return 0.5
    if year == 'Senior':
        return 0.75
    return 1


def convert_dorm(dorm: str) -> float:
    if dorm == 'EVGR A':
        return 0
    if dorm == 'Wilbur':
        return 0.2
    if dorm == 'Stern':
        return 0.4
    if dorm == 'The Row':
        return 0.6
    if dorm == 'Flomo':
        return 0.8
    return 1
