import $ from "jquery";

const formWrapper = document.querySelector('.form-wrapper');

class physikTask {
    constructor(v, t) {
        this.speed = v;
        this.time = t;
    }

    solvePhysicTask() {
        console.log('The path is ' + this.speed + ' and the time is ' + this.time);
    }
}

class waySearchTask extends physikTask {
    constructor(v, t) {
        super(v, t);
    }

    solveWaySearchTask() {
        const ress = this.speed / this.time;
        return ress;
    }
}

class waySearchTask2 extends physikTask {
    constructor(v, t, a) {
        super(v, t);
        this.acceleration = a;
    }

    solveWaySearchTask() {
        const ress = this.speed * this.time + (0.5 * this.acceleration * (this.time * this.time));
        return ress;
    }
}

class densitySearch extends physikTask {
    constructor(m, v) {
        super(m, v);
        this.mass = m;
        this.volume = v;
    }

    solveDensitySearch() {
        const ress = this.mass / this.volume;
        return ress;
    }
}

const task1Solve = () => {
    console.log("Task1 solve");

    const speed = document.getElementById('speed').value;
    const time = document.getElementById('time').value;
    
    const task1 = new waySearchTask(speed, time);
    const ress = task1.solveWaySearchTask();
    console.log("task1 result is: " + ress);
}

const task1Markup = () => {
    formWrapper.innerHTML = `
        <form>
            <label for="speed">Enter speed:</label>
            <input type="number" id="speed" required>
            <label for="time">Enter time:</label>
            <input type="number" id="time" required>
            <button type="button" class="task1Btn">Calculate</button>
        </form>
    `;

    const acceptBtn = document.querySelector('.task1Btn');
    acceptBtn.addEventListener('click', task1Solve);
}

const task2Solve = () => {
    console.log("Task2 solve");

    const speed = document.getElementById('speed').value;
    const time = document.getElementById('time').value;
    const acceleration = document.getElementById('acceleration').value;
    
    const task2 = new waySearchTask2(speed, time, acceleration);
    const ress = task2.solveWaySearchTask();
    console.log("task2 result is: " + ress);
}

const task2Markup = () => {
    formWrapper.innerHTML = `
        <form>
            <label for="speed">Enter speed:</label>
            <input type="number" id="speed" required>
            <label for="time">Enter time:</label>
            <input type="number" id="time" required>
            <label for="acceleration">Enter acceleration:</label>
            <input type="number" id="acceleration" required>
            <button class="task2Btn" type="button">Calculate</button>
        </form>
    `;

    const acceptBtn = document.querySelector('.task2Btn');
    acceptBtn.addEventListener('click', task2Solve);
}

const task3Markup = () => {
    formWrapper.innerHTML = `
        <form>
            <label for="mass">Enter mass:</label>
            <input type="number" id="mass" required>
            <label for="volume">Enter volume:</label>
            <input type="number" id="volume" required>
            <button type="submit">Calculate</button>
        </form>
    `;
}

/*Dropdown Menu*/
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    const selectedText = $(this).text();
    const selectedId = $(this).attr('id');
    $(this).parents('.dropdown').find('span').text(selectedText);
    $(this).parents('.dropdown').find('input').attr('value', selectedId);
    const result = selectedId;
    switch (result) {
        case "Task1":
            console.log("Task1");
            formWrapper.innerHTML= '';
            task1Markup();
            break;
        case "Task2":
            console.log("Task2");
            formWrapper.innerHTML= '';
            task2Markup();
            break;
        case "Task3":
            console.log("Task3");
            formWrapper.innerHTML= '';
            task3Markup();
            break;
        default:
            console.log("No task selected");
    }
});