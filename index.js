let count = 0;

let countEl = document.getElementById("count-el");

function increment() {
  count += 1;
  countEl.textContent = count;
  console.log(count);
}

let saveEl = document.getElementById("save-el");

function save() {
  let num = count + " - ";
  saveEl.textContent += num;
  console.log(count);
}

let resetEl = document.getElementById("count-el");

function reset() {
  resetEl.textContent = 0;
  count = 0;
  console.log(count);
}
