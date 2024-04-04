const limit = 12;

let numberOfOpss = 0;

const listOfFibs = [0, 1];

const fibThis = function (num) {
  if (num == 1 || num == 2) return num;

  if (listOfFibs[num + 1]) return listOfFibs[num + 1];

  numberOfOpss++;
  return fibThis(num - 1) + fibThis(num - 2);
};

for (i = 1; i < limit; i++) {
  listOfFibs.push(fibThis(i));
}

console.log(listOfFibs);

console.log(numberOfOpss);
