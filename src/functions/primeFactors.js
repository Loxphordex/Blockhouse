export default function primeFactors(n) {
    let factors = ''
    let divisor = 2

    while(n > 2) {
        if (n % divisor === 0) {
            factors += `${divisor}, `
            n = n / divisor
        }
        else {
            divisor++
        }
    }

    return factors.slice(0, factors.length - 2)
}