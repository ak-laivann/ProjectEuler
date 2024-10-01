import timeit

def checkIfTheNumberIsAPalindrome (number): 

    numberAsString = str(number)

    return numberAsString[::-1] == numberAsString


def optimizedSolution():

    storedPalindrome = 0

    for i in range(999,99,-1):
        for j in range(i,99,-1):
            multipliedValue = i*j

            if(multipliedValue <= storedPalindrome):
                break

            if (checkIfTheNumberIsAPalindrome(multipliedValue)) :
                storedPalindrome = multipliedValue


    return storedPalindrome

result = optimizedSolution()
elapsed_time = timeit.timeit(lambda: optimizedSolution(), number=1)
print("Optimized Solution:", result, "Execution Time:", elapsed_time)