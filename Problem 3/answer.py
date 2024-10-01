import timeit

def brute_force_solution(target):
    remainder = target
    
    while remainder % 2 == 0:
        remainder //= 2

    factor = 3
    while factor * factor <= remainder:
        while remainder % factor == 0:
            remainder //= factor
        factor += 2

    if remainder > 2:
        return remainder
    else:
        return factor

elapsed_time = timeit.timeit(lambda: brute_force_solution(600851475143), number=1)
print("Brute Force SOlution", brute_force_solution(600851475143), elapsed_time)