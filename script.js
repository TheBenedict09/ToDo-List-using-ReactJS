const input = document.getElementById("todo-input");

const addBtn = document.getElementById("add-button")

function removeTodo(element){
    element.parentElement.remove();
}
addBtn.addEventListener("click", ()=>{
    const text = input.value.trim();
    if(text !=""){
        const li = document.createElement("li");
        li.innerHTML = `${text} <span onclick="removeTodo(this)">×</span>`
        const todoList = document.getElementById("todo-list")
        todoList.append(li);
        input.value = ""
    }
})