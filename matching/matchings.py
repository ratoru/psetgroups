import os
import sys
import numpy as np
import argparse
from dotenv import load_dotenv
import api
from hill_climbing import HillClimbing

if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='Generate pset groups. Currently only supports size 2.')
    parser.add_argument('class_code', type=str,
                        help='the class code to generate matchings for')
    args = parser.parse_args()

    load_dotenv()
    API_URL = os.environ.get('API_URL')
    N_RUNS = os.environ.get('N_RUNS')

    # Get all forms for the class
    forms = api.get_forms(API_URL, args.class_code.lower())
    if not forms:
        sys.exit("Coudln't find anything for this class.")

    # Run steepest ascend hill climbing N_RUNS times
    best_solution = []
    best_score = 0
    hc = HillClimbing(forms)
    for i in range(int(N_RUNS)):
        cur_solution, score = hc.hillClimbing()
        if score > best_score:
            best_solution = cur_solution
    hc.printSolution(best_solution)
