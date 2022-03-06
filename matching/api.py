import requests
from typing import List
from form import Form


def get_forms(api_url: str, code: str) -> List[Form]:
    # TODO: add error handling
    r = requests.get(api_url + code)
    data = r.json()['data']
    return [Form(**f) for f in data]
