export default function isPrime(n) {
    
    if (n < 0) {
        return 'Value must be positive'
    }

    if (n === 1) {
        return 'True'
    }
    let i = 2

    while(i < n) {
        if (n % i === 0) return 'False'
        if (i > 2) i += 2
        else i++
    }

    return 'True'
}