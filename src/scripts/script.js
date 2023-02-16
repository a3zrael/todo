const input = document.querySelector('.form__input')
const button = document.querySelector('.form__btn')
const ul = document.querySelector('.todos__list')
const tasks = JSON.parse(window.localStorage.getItem('task')) || []
button.addEventListener('click', pushObj)




const delBtn = document.createElement('button')
delBtn.type = 'button';
delBtn.innerHTML = 'Press me';
delBtn.className = 'test__btn';

var container = document.getElementById('container');
container.appendChild(delBtn);


function setData() {
    window.localStorage.setItem('task', JSON.stringify(tasks))
}

function createTask(task) {
    const li = document.createElement('li')
    li.className = ('todos__item')
    li.innerHTML = `${task.title}`;
    return li;
}

function pushObj() {
    let valueInput = input.value
    const task = {
        title: valueInput,
    }
    if (!valueInput) {
        return
    } else tasks.push(task);
    setData()
    let taskElem = createTask(task)
    ul.prepend(taskElem);
    console.log(tasks);
}

function renderTasks() {
    for (let i = 0; i < tasks.length; i++) {
        let taskElem = createTask(tasks[i])
        ul.prepend(taskElem);
    }
}
renderTasks()