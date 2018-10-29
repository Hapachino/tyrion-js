// expect
const expect = exp => matchers(exp);

const matchers = exp => ({
  toBe: assertion => {
    if (assertion === exp) {
      console.log('%cpass', 'color: green');
      return true;
    } else {
      console.log('%cfail', 'color: red');
      return false;
    }
  }
});

// it (msg, fn)
const it = (msg, fn) => describe('\t' + msg, fn);

// describe (msg, fn)
const describe = (desc, fn) => {
  console.log(desc);
  fn();
}

// for node js
// module.exports = {
//   describe,
//   expect,
//   it,
//   matchers,
// }

// for chrome 
export {
  describe,
  expect,
  it,
  matchers,
};
