function appendOperation(value) {
  switch (value) {
    case "'^'":
      value = value + 3;
      break;
    default:
      document.getElementById("display").innerHTML += value;
  }
}

function calculateResult() {
  let container = document.getElementById("display");
  let content = container.innerHTML;

  let lastCharacter = content.charAt(content.length - 1);

  switch (lastCharacter) {
    case "\u00B2":
      let result = Math.pow(parseFloat(content), 2);
      container.innerHTML = result;
      break;
    case "\u03A0":
      let result2 = content * Math.PI;
      container.innerHTML = result2;
      break;
    default:
      let result1 = eval(container.innerHTML);
      container.innerHTML = result1;
  }
}

function deleteLast() {
  let container = document.getElementById("display");
  container.innerHTML = container.innerHTML.slice(0, -1);
}
