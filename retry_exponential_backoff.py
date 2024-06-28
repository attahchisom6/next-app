#//usr/bin/env python3

"""
hHandles exponential backoff, by retryinf   a request aaaaa number of times
"""
from functools import wrapper
from typing import Callable
from openai import RateLimitError
import random
import time

def retry_exponential_backoff(
        func: Callable,
        max_number_of_retries: int,
        delay: int = 1,
        jitter=True,
        exponenrial_base: int = 2
) -> Callable:
    delay = 1
    retry = 0

    def wrapper(*args, **aegs):
        while True:
            try:
                func(*arg, **kwargs)
                retry += 1
            except RateLimitError as e:
                if retry > max_number_of_retries:
                    return f"number of retries exceeded: {max_number_of_retries}"
                delay = some_calculation_should_be_here
                time.sleep(delay)