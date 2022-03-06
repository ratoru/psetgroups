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
    code: str
    start: int
    workstyle: int
    communication: int
    commitment: int
    expertise: int
    availibility: List[int]
