import "./styles/main.scss";

/***
 * ENTRY POINT
 */
const state = {};
function main() {
  iniitState();
  renderTodosLeftCount();
  initActions();
  renderTodos();
}
main();

/***
 * MODEL
 */
function iniitState() {
  state.todos = [
    { text: "this is the first to do", done: false },
    { text: "this is the second to do", done: false },
    { text: "this is the third to do", done: true },
  ];
  state.hide = false;
  state.snackbarTime = 2;
}

function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(state.todos));
}

function recoverTodosFromLocalStorage() {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) state.todos = JSON.parse(savedTodos);
}

/**
 * CONTROLLERS
 */
function initActions() {
  document.querySelector(".toggle-done").addEventListener("change", (e) => {
    state.hide = e.target.checked;
    renderTodos();
  });
  document.querySelector(".add-todo-btn").addEventListener("click", () => {
    const todo = document.querySelector(".todo-input").value;
    if (todo.length < 3) {
      showSnackBar("error");
      return;
    }
    document.querySelector(".todo-input").value = "";
    showSnackBar("success", "Your todo has been added!");
    addToDo(todo);
  });
}
function todoTemplate() {
  return `
  <p class="content"></p>
  <span class="controls">
    <button class="edit material-icons">
      edit
    </button>
    <button class="delete material-icons">
      delete
    </button>
  </span>
  `;
}

function addToDo(todo) {
  const li = {
    text: todo,
    done: false,
  };
  state.todos.push(li);
  console.log(state.todos);
  renderTodosLeftCount();
  renderTodos();
}

function updateTodo(todo, index) {
  document.querySelector(".todo-input").value = todo.text;
  const btn = document.querySelector(".add-todo-btn");
  btn.innerText = "Update";
}

function renderTodos() {
  document.querySelector(".todo-list").innerHTML = "";
  let { todos, hide } = state;

  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = todoTemplate();
    li.classList.add("todo-item");
    li.querySelector(".content").innerText = todos[i].text;
    if (hide && todos[i].done) {
      li.classList.add("hidden");
    }
    if (todos[i].done) {
      li.classList.add("done");
    }
    document.querySelector(".todo-list").appendChild(li);
    li.addEventListener("click", (e) => {
      e.stopPropagation();
      state.todos[i].done = !state.todos[i].done;
      renderTodosLeftCount();
      renderTodos();
    });
    // li.querySelector(".edit").addEventListener("click", () =>
    //   updateTodo(todos[i], i)
    // );
    li.querySelector(".delete").addEventListener("click", () => {
      state.todos.splice(i, 1);
      renderTodosLeftCount();
      renderTodos();
    });
  }
}

/***
 * VIEW
 */

function renderTodosLeftCount() {
  const count = state.todos.filter((todo) => todo.done == false);
  document.querySelector(".todos-left > strong").innerText = count.length;
}

function showSnackBar(type, content) {
  const snackbar = document.querySelector(".snackBar");
  snackbar.classList.add("show");
  let message = "";
  let time = state.snackbarTime;
  switch (type) {
    case "error":
      time += 2;
      snackbar.classList.add("error");
      message = `<span class="material-icons">error</span><span> Should be at least 3 letters!</span>`;
      break;
    case "success":
      snackbar.classList.add("success");
      message = `<span class="material-icons">check_circle</span><span>${content}</span>`;
      break;
    case "info":
      snackbar.classList.add("info");
      message = `<span class="material-icons">info</span><span>${content}</span>`;
      break;
    default:
      message = `<span class="material-icons">error</span><span> Something went wrong!</span>`;
      break;
  }
  snackbar.innerHTML = message;

  setTimeout(() => {
    snackbar.classList.remove("show");
    snackbar.classList.remove("info");
    snackbar.classList.remove("error");
    snackbar.classList.remove("success");
  }, time * 1000);
}
