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

const task1 = new waySearchTask(5, 15);
const result = task1.solveWaySearchTask();
console.log("task1 result is: " + result);

const task2 = new waySearchTask2(5, 15, 2);
const result2 = task2.solveWaySearchTask();
console.log("task2 result is: " + result2);

const task3 = new densitySearch(15, 5);
const result3 = task3.solveDensitySearch();
console.log("task3 result is: " + result3);