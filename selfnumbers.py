#self numbers
def sum_digits(n):
    s = 0
    while n: # while n > 0
        s += n % 10 # setiap n bernilai 10 akan mengembalikan nilai 0
        n //= 10 # setiap nilai decimal akan mengembalikan nilai 0
    return s

selfNumbers = []
generatorNumbers = []

for i in range(1,5001):
    g = i + sum_digits(i)
    generatorNumbers.append(g)

#print(selfNumbers)
#print(generatorNumbers)

#list (1-5000) - generatorNumbers
selfNumbers = list(set(range(1,5001)) - set(generatorNumbers))

print(sum(selfNumbers))