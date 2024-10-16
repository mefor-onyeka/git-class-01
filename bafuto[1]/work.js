const deletes = document.querySelectorAll(".delete");
console.log(deletes);

deletes.forEach((deletebtn) => {
  deletebtn.addEventListener("click", (e) => {
    let list = document.querySelector(".task-list");
    console.log(list);
    list.removeChild(deletebtn.parentElement);
  });
});

document.querySelector(".delete-All4").addEventListener("click", (e) => {
  let container = document.querySelector(".task-list");
  container.innerHTML =
    "you have sucessfully deleted all the item in work list";
});

forms["add-task-form"].addEventListener("submit", (e) => {
  e.preventDefault();
  const createTask = document.createElement("li");
  createTask.appendChild(createTaskBtn);
  console.log(createTask);
  createTask.innerHTML =
    forms["add-task-form"].querySelector("input").value + createTask.innerHTML;
  if (forms["add-task-form"].querySelector(".Categories").value === "Work") {
    taskParentAll[3].appendChild(createTask);
  }
});

taskContainerAll.forEach((taskContainer) => {
  taskContainer.addEventListener("click", (e) => {
    console.log(e.target.parentElement.className);
    console.log(e.target.className);
    console.log(e.target);

    if (
      e.target.parentElement.className === "delete-btn" ||
      e.target.className === "delete-btn"
    ) {
      e.target.closest(".task").remove();
    }
    if (e.target.className === "delete-all-btn") {
      e.target.previousElementSibling.children.remove();
    }

    taskParentAll.forEach((taskParent) => {
      if (!taskParent.innerHTML.includes("li")) {
        taskParent.innerHTML = "<li>No tasks yet.</li>";
      }
    });
  });
});

forms[0].querySelector("#search").addEventListener("keydown", searchers);

forms[0].querySelector("#search").addEventListener("keyup", searchers);

function searchers(e) {
  let value = e.target.value;

  taskParentAll.forEach((taskParent) => {
    let alltask = taskParentAll.querySelectorAll(".task");
    alltask.forEach((task) => {
      if (task) {
        if (!task.textContent.tolowercase().includes(value)) {
          task.style.display = "none";
        } else {
          task.style.display = "flex";
        }
        psi;
      }
    });
  });
}
