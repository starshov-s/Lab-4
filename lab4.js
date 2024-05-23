function addOrder() {
  let name = document.querySelector("input[name='name']").value;
  let topping = document.querySelector("input[name='topping']:checked")?.value;
  let sauce = document.querySelector("select").value;
  let instructions = document.querySelector("textarea").value;

  if (!name || !topping || !sauce || !instructions) {
    alert("Помилка: Не заповнена одна або декілька комірок!");
    return;
  }

  let extras = [];
  if (document.getElementById("extra_cheese").checked) {
    extras.push("Extra Cheese");
  }

  if (document.getElementById("gluten_free_base").checked) {
    extras.push("Gluten Free Base");
  }

  let orderSummary = `Name: ${name}\nTopping: ${topping}\nSauce: ${sauce}\nExtras: ${extras.join(", ")}\nInstructions: ${instructions}`;
  orderSummary = orderSummary.trim();
  let table = document.querySelector("table.table1");
  let existingRow = table.rows[7];
  if (existingRow) {
    existingRow.cells[0].innerText = orderSummary;
  } else {
    let newRow = table.insertRow(7);
    let newCell = newRow.insertCell(0);
    newCell.colSpan = 3;
    newCell.innerText = orderSummary;
  }

  document.querySelector("input[name='name']").value = "";
  document.querySelectorAll("input[name='topping']").forEach((radio) => (radio.checked = false));
  document.querySelector("select").value = "Tomato";
  document.getElementById("extra_cheese").checked = false;
  document.getElementById("gluten_free_base").checked = false;
  document.querySelector("textarea").value = "";
}


const dictionary = {
  "html": "Мова розмітки для створення веб-сторінок",
  "css": "Мова стилів для оформлення веб-сторінок",
};
function searchWord() {
  const input = document.getElementById('wordInput').value.trim().toLowerCase();
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  if (dictionary[input]) {
    resultDiv.innerHTML = `Значення слова "${input}": ${dictionary[input]}`;
  } else {
    resultDiv.innerHTML = `Слово "${input}" не знайдено.`;
  }

  document.getElementById('wordInput').value = '';
}
