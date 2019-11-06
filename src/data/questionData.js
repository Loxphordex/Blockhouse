import * as library from '../functions/functions'

export default [
    {
        title: 'Fibonacci',
        algorithm: library.fibonacci,
        inputType: 'number',
        color: 'tan',
    },
    {
        title: 'FibRecursive',
        algorithm: library.fibonacciRecursve,
        inputType: 'number',
        color: 'light-red',
    },
    {
        title: 'IsPrime',
        algorithm: library.isPrime,
        inputType: 'number',
        color: 'light-orange',
    },
    {
        title: 'PrimeFactors',
        algorithm: library.primeFactors,
        inputType: 'number',
        color: 'blu',
    },
    {
        title: 'Permutations',
        algorithm: library.permutations,
        inputType: 'text',
        color: 'off-white',
    },
]