window.addEventListener("load", () => {
  const form = document.querySelector("#todo_form");
  const input = document.querySelector("#new_task_input");
  const submit = document.querySelector("#new_task_submit");
  const todoList = document.querySelector(".todoList");
  input.focus();
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputValue = input.value;
    if (!inputValue) {
      alert("add a list !");
      return;
    }
    input.focus();
    let list = document.createElement("div");
    list.classList.add("list");

    let content = document.createElement("div");
    content.classList.add("content");
    list.appendChild(content);
    let listInput = document.createElement("input");
    listInput.classList.add("text");

    // -------------------------Todo Input------------------------------
    listInput.value = inputValue;
    listInput.setAttribute("readonly", "readonly");
    content.appendChild(listInput);

    // -------------------------Actions------------------------------
    let actions = document.createElement("div");
    actions.classList.add("actions");
    list.appendChild(actions);

    // -------------------------Edit btn------------------------------
    let editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.innerHTML = "edit";
    actions.appendChild(editBtn);

    // -------------------------Delete btn------------------------------
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = "delete";
    actions.appendChild(deleteBtn);

    input.value = "";
    todoList.appendChild(list);

    // -------------------------Edit Todo------------------------------
    editBtn.addEventListener("click", () => {
      if (editBtn.innerText.toLocaleLowerCase() === "edit") {
        listInput.removeAttribute("readonly");
        editBtn.innerText = "save";
        listInput.focus();
      } else {
        listInput.setAttribute("readonly", "readonly");
        editBtn.innerText = "edit";
      }
    });

    // -------------------------Delete Todo------------------------------
    deleteBtn.addEventListener("click", () => {
      todoList.removeChild(list);
    });
  });
});
