let basket = [];
const msg = document.getElementById('messageArea');

function addFruit() {
  const fruit = prompt('Enter a fruit name:');

  if (!fruit || fruit.trim() === '') {
    alert('Please enter a fruit!');
  } else {
    basket.push(fruit.trim());
    msg.textContent = `${fruit.trim()} added to basket!`;
  }
}

function viewBasket() {
  if (basket.length === 0) {
    msg.textContent = 'Your basket is empty';
  } else {
    msg.textContent = 'Your basket:\n' + basket.join('\n');
  }
}

function checkBasket() {
  const fruitToCheck = prompt('Enter the fruit name to check: ');

  if (!fruitToCheck) {
    alert('Please enter a fruit name to search.');
    return;
  }
  const lowerCaseInput = fruitToCheck.toLowerCase();
  if (basket.includes(lowerCaseInput)) {
    alert(`Yes! That fruit (${lowerCaseInput}) is in the basket.`);
  } else {
    alert(`Nope, that fruit (${lowerCaseInput}) is not in the basket.`);
  }
}
