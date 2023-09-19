function todoApp(){
    this.container = "";
    this.init = function() {
        this.container = document.querySelector("#app");
        this.getAllTodos();
    };
    this.printTodo = function (todo) 
    {
        let html = `
            <div class = "row" id = "todo-element-${todo.id}">
                <div class="col">
                    <div class = "d-flex justify-content-between border border-info border-top-0 border-end-0 border-bottom-1 border-start-0 p-1>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="todo-${todo.id}" ${todo.completed == 1 ? "checked" : ""}>
                            <label class="form-check-label" for="todo-${todo.id}">
                                ${todo.name}
                            </label>
                        
                            <div class="d-flex gap-2">
                                <i class="bi bi-pencil-square" title="bearbeiten"></i>
                                <i class="bi bi-x-square-fill"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        `;
        this.container.insertAdjacentHTML ("beforeend", html);
    };

    this.getAllTodos= function() 
    {
        fetch('http://localhost:8000/api/todos')
        .then ((response) => {
            return response.json();
        })

        .then ((json)=>
        {
            for(let i = 0; i<json.data.length; i++)
            {
                this.printTodo(json.data[i]);
            }
        })
        .catch((error)=> {
            console.error(error)
        });


    }
}
document.addEventListener('DOMContentLoaded',() =>{
let app = new todoApp();
app.init();


})