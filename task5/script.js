const primeNumbers = (n) => {
    const primes = [];

    for (let num = 2; num <= n; ++num) {
        const isPrime = primes.every((prime) => num % prime !== 0);
        if (isPrime) primes.push(num);
    }

    return primes;
}

console.log(primeNumbers(100));