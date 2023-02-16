const input = document.querySelector('.form__input')
const button = document.querySelector('.form__btn')
const ul = document.querySelector('.todos__list')
const tasks = JSON.parse(window.localStorage.getItem('task')) || []
button.addEventListener('click', pushObj)

const delBtn = document.createElement('button')

function setData() {
    window.localStorage.setItem('task', JSON.stringify(tasks))
}

function setDate() {
    let date = new Date()
    let day = document.querySelector('.today');

    function getWeekDay(date) {
        let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return days[date.getDay()]
    }
    function getMon(date) {
        let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Майя', 'Июня', 'Июля', 'Августа',
            'Сентября', 'Октября', 'Ноября', 'Декабря']
        return month[date.getMonth()]
    }
    day.innerHTML = `${getWeekDay(date)}, ${date.getDate()} ${getMon(date)}`
}

function removeValue() {
    input.value = ''
}

function removeTask() {

}

function createTask(task) {
    const li = document.createElement('li')
    const text = document.createElement('span')
    const btn = document.createElement('button')

    li.className = ('todos__item')

    text.innerHTML = `${task.title}`;

    btn.innerHTML = 'Удалить'
    btn.className = 'del__btn'
    btn.addEventListener('click', () => {
        removeTask()
    })

    li.append(text, btn)

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

    setData();

    let taskElem = createTask(task);

    ul.prepend(taskElem);

    removeValue()
}

function renderTasks() {
    for (let i = 0; i < tasks.length; i++) {

        let taskElem = createTask(tasks[i])

        ul.prepend(taskElem);
    }
}
renderTasks()

setDate()