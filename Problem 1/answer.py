import timeit
import math

def bruteForceSolution (limit):
    sum = 0

    for x in range(limit):
        if x % 3 == 0 or x % 5 == 0:
            sum += x
    
    return sum

elapsed_time = timeit.timeit(lambda: bruteForceSolution(1000), number=1)
print("brute force solution", bruteForceSolution(1000), elapsed_time)

def sumOfArithmeticProgression(firstNumber, difference, limit):
    numberOfTerms = math.floor((limit -1)/difference)
    lastNumber = firstNumber + (numberOfTerms - 1)*difference
    sumOfSeries = (numberOfTerms * (firstNumber+lastNumber))/2
    return sumOfSeries

def optimizedSolutionUsingArithmeticProgression(limit):

    sumOfMultiplesOf3 = sumOfArithmeticProgression(3,3,limit)
    sumOfMultiplesOf5 = sumOfArithmeticProgression(5,5,limit)
    sumOfMultiplesOf15 = sumOfArithmeticProgression(15,15,limit)

    result = sumOfMultiplesOf3 + sumOfMultiplesOf5 - sumOfMultiplesOf15

    return result

elapsed_time2 = timeit.timeit(lambda: optimizedSolutionUsingArithmeticProgression(1000), number=1)
print("Optimized Solution", optimizedSolutionUsingArithmeticProgression(1000))