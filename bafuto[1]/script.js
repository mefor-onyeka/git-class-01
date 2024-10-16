// console.log("hello world");
// let message1 = "hello";
// let messsage2 = "world";

// console.log(message1);
// console.log("${message1} ${message2}");
// let value = 0;
// for(let i = 0; i <=10; i++) {
//     value = i;
//     console.log(value);
// }

// let array = [['hello', 'world'], ["hi", "how are you"]];

// console.log(array[0][0]);
//  let  main = document.getElementById('main');
// assignment is memorize the node properties

// function greet(user) {
//     return "Welcome back, ${user};
// }

// greet("Daniel");
// console.(greet("Daniel"))

// let pTag = document.createElement("p")
// pTag.className = "tag"
// pTag.id = "tag";

// console.log(pTag)

// anchorTag = document.createElement("a")

// anchorTag.setAttribute("href", "X.com")
// anchorTag.textContent = "hi world";
// anchorTag.innerText = "va";

// console.log(anchorTag)

// ul = document.createElement("ul")
// li = document.createElement("li")
// li.textContent = "Hello"
// console.log(li)
// ul.appendChild(li)
// console.log(ul)

// let form =  document.createElement("form")
// form.setAttribute("action", "")

// let label1 = document.createElement("label")
// label1.for = "username"
// label1.textContent = " username "

// let input1 = document.createElement("input")
// input1.type = "text"
// input1.id = "username"

// let label2 = document.createElement("label")
// label2.for = "email"
// label2.textContent = "email"

// let input2 = document.createElement("input")
// input2.type = "email"
// input2.id = "email"

// let label3 = document.createElement("label")
// label3.for = "password"
// label3.textContent = "password"

// let input3 = document.createElement("input")
// input3.type = "password"
// input3.id = "password"

// let label4 = document.createElement("label")
// label4.for = "confirm-password"
// label4.textContent = "confirm-password"

// let input4 = document.createElement("input")
// input4.type = "password"
// input4.id = "confirm-password"

// let button = document.createElement("button")
// button.textContent = "submit"

// form.appendChild(label1)
// form.appendChild(input1)
// form.appendChild(label2)
// form.appendChild(input2)
// form.appendChild(label3)
// form.appendChild(input3)
// form.appendChild(label4)
// form.appendChild(input4)
// form.appendChild(button)

// console.log(form)

// dom node

// Family tree

// parents- nodes - previous - next

// let classroom = document.querySelector("ul");

// chains

// console.log(list.parentNode.parentNode);
// console.log(list.parentElement.parentElement);
// console.log(list.nextElementSibling.previousElementSibling);

// childrens - first and lasts
// let divine = classroom.lastElementChild;
// console.log(list.firstElementChild);

// remove elements
// divine = document.querySelector("ul li:nth-child(3)");

// classroom.removeChild(divine);

// Events

// document.querySelector("button").addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(e.shiftKey);
//   if (e.shiftKey === true) {
//     console.log("hello there");
//   }
//   console.log(e);
// });

// console.log(content.nextElementSibling);

// document.querySelector("a").addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(e);
// });

// let searchInput = document.querySelector("#search").textContent;
// console.log(searchInput);

// let data = document.querySelectorAll("li");
// data = Array.from(data);
// console.log(data);

// let searchButton = document.querySelector(".search-btn");
// searchButton.addEventListener("click", function (e) {
//   console.log(searchInput);
//   for (let index = 0; index < data.length; index++) {
//   let element = data[index];
//   if (searchInput == element.innerText) {
//     element.scrollIntoView({behavior : "smooth"})
//     }
//   else {
//     alert("not found");
//   }
//   }
// });

// let work = document.getElementsByClassName('nav-btn')[0];

// work.addEventListener('click', function(e) {
//   document.getElementsByClassName('task')[0].scrollIntoView({ behavior: 'smooth' });

// });

// let school = document.getElementsByClassName('nav-btn')[1];

// school.addEventListener('click', function(e) {
//   document.getElementsByClassName('task')[1].scrollIntoView({ behavior: 'smooth' });

// });

// let grocery = document.getElementsByClassName('nav-btn')[2];

// grocery.addEventListener('click', function(e) {
//   document.getElementsByClassName('task')[2].scrollIntoView({ behavior: 'smooth' });

// });

// let general = document.getElementsByClassName('nav-btn')[3];

// general.addEventListener('click', function(e) {
//   document.getElementsByClassName('task')[3].scrollIntoView({ behavior: 'smooth' });

// });

// Event Bubbling Events

// alert ("do you want to undo ")

const deletes = document.querySelectorAll(".delete");
console.log(deletes);

deletes.forEach((deletebtn) => {
  deletebtn.addEventListener("click", (e) => {
    let list = document.querySelector(".task-list");
    console.log(list);
    list.removeChild(deletebtn.parentElement);
  });
});

const deletes2 = document.querySelectorAll(".delete2");
console.log(deletes2);

deletes2.forEach((deletebtn) => {
  deletebtn.addEventListener("click", (e) => {
    let list = document.querySelector(".task-list2");
    console.log(list);
    list.removeChild(deletebtn.parentElement);
  });
});

const deletes3 = document.querySelectorAll(".delete3");
console.log(deletes3);

deletes3.forEach((deletebtn) => {
  deletebtn.addEventListener("click", (e) => {
    let list = document.querySelector(".task-list3");
    console.log(list);
    list.removeChild(deletebtn.parentElement);
  });
});
const deletes4 = document.querySelectorAll(".delete4");
console.log(deletes4);

deletes4.forEach((deletebtn) => {
  deletebtn.addEventListener("click", (e) => {
    let list = document.querySelector(".task-list4");
    console.log(list);
    list.removeChild(deletebtn.parentElement);
  });
});

document.querySelector(".delete-All").addEventListener("click", (e) => {
  let container = document.querySelector(".task-list4");
  container.innerHTML =
    "you have sucessfully deleted all the item in general list";
});

document.querySelector(".delete-All2").addEventListener("click", (e) => {
  let container = document.querySelector(".task-list3");
  container.innerHTML =
    "you have sucessfully deleted all the item in grocery list";
});

document.querySelector(".delete-All3").addEventListener("click", (e) => {
  let container = document.querySelector(".task-list2");
  container.innerHTML =
    "you have sucessfully deleted all the item in school list";
});

document.querySelector(".delete-All4").addEventListener("click", (e) => {
  let container = document.querySelector(".task-list");
  container.innerHTML =
    "you have sucessfully deleted all the item in work list";
});

const work = document.querySelector(".Work");
const school = document.querySelector(".School");
const grocery = document.querySelector(".Grocery-list");
const general = document.querySelector(".General");
const task = document.querySelector(".task");
const category = document.querySelector(".Categories");

category.addEventListener("change", (e) => {
  const value = e.target.value;
  console.log(value);
  switch (value) {
    case "Work":
      task.appendChild(school);
      task.appendChild(grocery);
      task.appendChild(general);
      break;
    case "School":
      task.appendChild(work);
      task.appendChild(grocery);
      task.appendChild(general);
      break;
    case "Grocery":
      task.appendChild(school);
      task.appendChild(work);
      task.appendChild(general);
      break;
    case "General":
      task.appendChild(school);
      task.appendChild(grocery);
      task.appendChild(work);
      break;
  }
});

const taskContainerAll = document.querySelectorAll(".task-category");
const taskParentAll = document.querySelectorAll("ul");
const forms = document.forms;

const createTaskBtn = document.createElement("button");
createTaskBtn.className = "delete";
createTaskBtn.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';

forms["add-task-form"].addEventListener("submit", (e) => {
  e.preventDefault();
  const createTask = document.createElement("li");
  createTask.appendChild(createTaskBtn);
  console.log(createTask);
  createTask.innerHTML =
    forms["add-task-form"].querySelector("input").value + createTask.innerHTML;
  if (forms["add-task-form"].querySelector(".Categories").value === "Work") {
    taskParentAll[0].appendChild(createTask);
  } else if (
    forms["add-task-form"].querySelector(".Categories").value === "School"
  ) {
    taskParentAll[1].appendChild(createTask);
  } else if (
    forms["add-task-form"].querySelector(".Categories").value === "Grocery"
  ) {
    taskParentAll[2].appendChild(createTask);
  } else if (
    forms["add-task-form"].querySelector(".Categories").value === "General"
  ) {
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
