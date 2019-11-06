import * as library from '../functions/functions'

export default [
    {
        title: 'Fibonacci',
        algorithm: library.fibonacci,
        inputType: 'number',
    },
    {
        title: 'FibRecursive',
        algorithm: library.fibonacciRecursve,
        inputType: 'number',
    },
    {
        title: 'IsPrime',
        algorithm: library.isPrime,
        inputType: 'number',
    },
    {
        title: 'PrimeFactors',
        algorithm: library.primeFactors,
        inputType: 'number',
    },
    {
        title: 'Permutations',
        algorithm: library.permutations,
        inputType: 'text',
    },
]