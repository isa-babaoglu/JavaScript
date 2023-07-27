let addBut = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputText = document.getElementById("inputText");
let clearToDo = document.getElementById("clearToDo");
addBut.addEventListener("click", function () {
  if (inputText.value === "") {
    alert(" please write plan");
  } else {
    let plan = document.createElement("p");
    plan.classList.add("planStil");
    toDoContainer.appendChild(plan);
    plan.innerHTML = inputText.value;
    inputText.value = "";

    plan.addEventListener("click", function () {
      plan.style.textDecoration = "line-through";
    });
    plan.addEventListener("dblclick", function () {
      toDoContainer.removeChild(plan);
    });
    clearToDo.addEventListener("click", function () {
      plan.remove();
    });
  }
});
