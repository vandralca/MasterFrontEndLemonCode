class SlotMachine {
    monedas = 0;

    play() {
        this.monedas++;

        var slot1 = Math.floor(Math.random() * 2);
        var slot2 = Math.floor(Math.random() * 2);
        var slot3 = Math.floor(Math.random() * 2);

        if (slot1 && slot2 && slot3) {
            console.log("Congratulations!!!. You won " + this.monedas + " coins!!");
            this.monedas = 0;
        }
        else {
            console.log("Good luck next time!!");
        }
    }
}

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
