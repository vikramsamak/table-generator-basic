var tableContainer = document.getElementById("tableContainer");

tableContainer.classList.add("flex", "items-center", "justify-center");
const intialText = document.createElement("p");
intialText.innerHTML = "Table will appear here...";
intialText.className = "text-sm text-white uppercase tracking-wider";
tableContainer.appendChild(intialText);

function handleReset() {
  document.getElementById("inputNum").value = "";
  tableContainer.innerHTML = "";
  tableContainer.classList.remove("grid", "grid-cols-2", "grid-rows-5");
  tableContainer.classList.add("flex", "items-center", "justify-center");
  const intialText = document.createElement("p");
  intialText.innerHTML = "Table will appear here...";
  intialText.className = "text-sm text-white uppercase tracking-wider";
  tableContainer.appendChild(intialText);
  return false;
}

function generateTable() {
  let inputNum = parseFloat(document.getElementById("inputNum").value);
  const multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let table = multipliers.map((m) => inputNum * m);

  let tableData = table.map((m, i) => {
    const tableCell = document.createElement("div");
    tableCell.className =
      "flex items-center w-full h-full p-2 text-white hover:bg-gray-500 rounded-md";
    tableCell.innerHTML = `${i + 1}) ${m}`;
    return tableCell;
  });

  tableContainer.classList.remove("flex", "items-center", "justify-center");
  tableContainer.classList.add("grid", "grid-cols-2", "grid-rows-5");
  tableContainer.innerHTML = "";

  tableData.forEach((c) => tableContainer.appendChild(c));

  return false;
}
