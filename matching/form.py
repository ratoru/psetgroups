import numpy as np
from typing import List
from pydantic import BaseModel


class Form(BaseModel):
    """
    Represents a single submitted form
    """
    name: str
    # sunet: str
    year: str
    dorm: str
    dormW: int
    code: str
    start: int
    startW: int
    workstyle: int
    workstyleW: int
    communication: int
    communicationW: int
    commitment: int
    commitmentW: int
    expertise: int
    expertiseW: int
    personality: int
    personalityW: int
    sleep: int
    sleepW: int
    office: int
    officeW: int
    availibility: List[int]
