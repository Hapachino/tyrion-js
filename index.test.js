// for node js
// const {
//   describe,
//   it,
//   expect,
//   matchers,
// } = require('./index');

// for chrome
import {
  describe,
  it,
  expect,
  matchers,
} from './index.js';

let executes = 0;
const noop = () => { executes += 1 };

describe('describe', () => {
  it('executes a callback function', () => {
    noop();
    
    expect(executes).toBe(1);
  })
});

describe('expect', () => {
  it('returns an object', () => {
    const actual = expect(true);

    expect(typeof actual).toBe('object');
    expect(typeof actual.toBe).toBe('function');
  })
})

describe('matchers', () => {
  describe('toBe', () => {
    it('works', () => {
      const actual = matchers('1').toBe('1');

      expect(actual).toBe(true);
    });
  });
});

console.log('hey');
