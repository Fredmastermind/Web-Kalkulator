import { Fizzbuzz } from './FizzBuzz.js';
import test from 'node:test';
import * as assert from "node:assert";

test('fizzbuzz av 1 er 1', () => {
    assert.strictEqual(Fizzbuzz(1), "1");
})

test('fizzbuzz av 3 er fizz', () => {
    assert.strictEqual(Fizzbuzz(3), "fizz");
})

test('fizzbuzz av 5 er buzz', () => {
    assert.strictEqual(Fizzbuzz(5), "buzz");
})

test('fizzbuzz av 15 er fizzbuzz', () => {
    assert.strictEqual(Fizzbuzz(15), "fizzbuzz");
})