// expect
const expect = exp => matchers(exp);

const matchers = exp => ({
  toBe: assertion => {
    if (assertion === exp) {
      console.log('pass');
      return true;
    } else {
      console.log('fail');
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

module.exports = {
  describe,
  expect,
  it,
  matchers,
}