const input = document.getElementById("input");
const list = document.getElementById("list");

class ToDoList {
  constructor() {
    this.list = [];
    this.inputElement = input;
    this.listElement = list;

    this.inputElement.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.addToDo();
        console.log(this.list);
      }
    });
  }

  addToDo() {
   let toDoText = this.inputElement.value;
   if(toDoText.trim() === ""){
    return;
   }

   let newToDo = {
    text: toDoText,
    checked: false
   }

   this.list.push(newToDo);
   this.inputElement.value = "";
   this.renderToDoList();
  }

  deleteToDo(i) {
    this.list.splice(i, 1);
    this.renderToDoList();
  }

  checkboxToggle(i) {
    this.list[i].checked = !this.list[i].checked;
    this.renderToDoList();
  }

  renderToDoList() {
    this.listElement.innerHTML = "";

    for (let i = 0; i < this.list.length; i++) {
      let newLiElement = document.createElement("li");
      this.listElement.appendChild(newLiElement);
      newLiElement.textContent = this.list[i].text;

      let deleteButtn = document.createElement("button");
      deleteButtn.textContent = "Delete"; 
      deleteButtn.addEventListener("click", () => {
        this.deleteToDo();
      })

      let liCheckbox = document.createElement("input");
      liCheckbox.setAttribute("type", "checkbox");
      
      if (this.list[i].checked) {
        liCheckbox.setAttribute("checked", true);
      }
      liCheckbox.addEventListener("click", () => {
        this.checkboxToggle(i);
      })
      
      newLiElement.appendChild(deleteButtn);
      newLiElement.appendChild(liCheckbox);
    }
  }
}

const ToDoList1 = new ToDoList();