export function Fizzbuzz(tall) {
    if (tall % 15 === 0) return "fizzbuzz";
    if (tall % 3 === 0) return "fizz";
    if (tall % 5 === 0) return "buzz";
    return tall.toString();
}