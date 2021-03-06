import assert from 'assert'

/**
  #Task:
  Calculate what budget Santa must have to buy gifts for children.

  #Goal:
  Getting to know the "Ramda" library, which can work on the principle of "pipeline".
*/

const santaList = {
  children: [
    {
      name: 'Cris',
      wishList: [
        {name: '', price: 123},
        {name: '', price: 27},
      ]
    },
    {
      name: 'Bianca',
      wishList: [
        {name: '', price: 123},
        {name: '', price: 27},
      ]
    },
    {
      name: 'Arnold',
      wishList: [
        {name: '', price: 123},
        {name: '', price: 27},
      ]
    },
    {
      name: 'Stephanie',
      wishList: [
        {name: '', price: 123},
        {name: '', price: 77},
      ]
    },
    {
      name: 'Ana',
      wishList: [
        {name: '', price: 123},
        {name: '', price: 27},
      ]
    },
  ]
};

// Your solution:
const cashAmount = 0;



// Check the correctness:
console.log('Hello Santa, you have to prepare: ', cashAmount, 'zł, to buy all the gifts');
assert(typeof cashAmount === 'number');
assert(cashAmount === 800);

