import { Fibonacci } from './Fibonacci.js';
import test from 'node:test';
import * as assert from "node:assert";

test('Fibonacci av 1 er 1', () => {
    assert.strictEqual(Fibonacci(1), 1);
})

test('Fibonacci av 2 er 1', () => {
    assert.strictEqual(Fibonacci(1), 1);
})

test('Fibonacci av 3 er 2', () => {
    assert.strictEqual(Fibonacci(3), 2);
})

test('Fibonacci av 5 er 5', () => {
    assert.strictEqual(Fibonacci(5), 5);
})

test('Fibonacci av 10 er 55', () => {
    assert.strictEqual(Fibonacci(10), 55);
})