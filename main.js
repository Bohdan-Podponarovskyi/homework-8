let ladder = {
    step: 0,
    up: function () {
        console.log(this);
        this.step++;
        return this;
    },
    down: function () {
        console.log(this);
        this.step--;
        return this;
    },
    showStep: function () {
        console.log(this); // показывает текущую ступеньку
        alert(this.step);
        return this;
    }
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

ladder.up().up().down().showStep();