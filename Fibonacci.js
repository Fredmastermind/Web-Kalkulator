export function Fibonacci(n) {;
    if (n === 1 || n === 2 ) {
        return 1;
    } 
    return Fibonacci(n-2) + Fibonacci(n-1);
    }