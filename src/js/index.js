import * as $ from 'jquery';
const main = import('./main');
const filter = import('./filter');

console.log(filter);

console.log('ENV', process.env.NODE_ENV);

$(() => {
  console.log('jQuery document ready');
});




