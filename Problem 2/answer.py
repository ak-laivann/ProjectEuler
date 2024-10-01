import timeit

def create_fibonacci(limit):
    fibonacci_array = [1,2]

    while(True):
        nextNumber = fibonacci_array[-1] + fibonacci_array[-2]

        if (nextNumber > limit):
            break

        fibonacci_array.append(nextNumber)
    
    return fibonacci_array

def brute_force_solution(limit):
    sum = 0

    fibonacci_array = create_fibonacci(limit)

    for x in fibonacci_array:
        if (x % 2 == 0):
            sum += x

    return sum

elapsed_time = timeit.timeit(lambda: brute_force_solution(4000000))
print("Brute Force Solution", brute_force_solution(4000000), elapsed_time)

def optimizedSolutionUsingSwitch(limit):
    sum = 0
    secondLastNumber = 1
    lastNumber = 2

    while (lastNumber <= limit):
        if (lastNumber % 2 ==0):
            sum += lastNumber

        nextNumber = secondLastNumber + lastNumber

        secondLastNumber = lastNumber
        lastNumber = nextNumber
    
    return sum

elapsed_time2= timeit.timeit(lambda: optimizedSolutionUsingSwitch(4000000), number=1)
print("Optimized Solution", optimizedSolutionUsingSwitch(4000000), elapsed_time2)