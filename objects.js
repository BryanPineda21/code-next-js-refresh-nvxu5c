import { render } from './util';

// TODO: What is the value of foo.bar and foo.baz?
render('objects1', () => {
  const foo = {
    bar: 42,
  };
  return `foo.bar: ${foo.bar}, foo.baz: ${foo.baz}`;
});

// value for foo.bar is 42 and foo.baz is undefined 


// TODO: Create an object of objects and return it.
render('objects2', () => {
const objects3 ={
  apple:'green',

}; 
return `objects2: ${objects3.apple}`;
});



// TODO: Create an array of objects and return the element at index 0.
render('objects3', () => {
const muffins = ["blueberry muffin","chocolate chip Muffin", "Cinnamon"]
return muffins[0];
});
