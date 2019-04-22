/* kw-fizzbuzz */
function fizzBuzz(min = 1, max = 100, fizz = 3, buzz = 5) {
  let listItemst = document.createElement('ul');
  listItemst.setAttribute('id', 'fizzBuzz');
  for (let i = min; i < max + 1; i++) {
    let result = '';
    if (i % fizz == 0) {
      result += 'Fizz';
    }
    if (i % buzz == 0) {
      result += 'Buzz';
    }
    if ('' == result) {
      result = i;
    }
    let listItem = document.createElement('li');
    listItem.innerHTML = result;
    listItemst.appendChild(listItem);
  }
  document.body.appendChild(listItemst);
}