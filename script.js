const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter" && input.value.trim() !== "") {
    addTask(input.value.trim());
    input.value = "";
  }
});

function addTask(taskText) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.style.flexGrow = "1";
  span.style.cursor = "pointer";
  span.onclick = () => {
    li.classList.toggle("completed");
  };

  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.className = "btn-delete";
  delBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);
}