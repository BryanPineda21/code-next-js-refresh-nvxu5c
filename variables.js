import { render } from './util';

// TODO: What is the value of foo?
render('variables1', () => {
  let foo = 'foo1';
  foo = 'foo2';
  foo = 'foo3';
  return foo;
});

// "foo3"


// TODO: Fix this code.
render('variables2', () => {
  const bar = 'bar';
  // bar = 'bar';
  return bar;
});

// "we cant reassign a new value to bar since its a constant"

// TODO: Fix this code.
render('variables3', () => {
  let baz = 'baz';
  return baz;
});

// "we need to idetify if the variable baz is a let or a const"

// we use let if we want to change the value of a variable later down the line or we use a const for a variable that 
