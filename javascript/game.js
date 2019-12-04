class Game {
    constructor(width, height) {
        this.car = new Car(35);
        this.gamewidth = width;
        this.gameheight = height;
        this.interval = 0;
        this.bolts = [new Bolt(), new Bolt(), new Bolt(), new Bolt(), new Bolt(), new Bolt(), new Bolt(), new Bolt()]
        this.gass = [new Gas()]
        this.start();

    }


    start() {
        let game = this;
        setInterval(() => {
            game.render();
        }, 100)

        setInterval(() => {
            game.addBolt(new Bolt());
        }, 2000)

        setInterval(() => {
            game.addGas(new Gas());
        }, 20000)

    }



    addCar(car) {
        this.car = car;
    }

    addBolt(bolt) {
        this.bolts.push(bolt);
    }

    addGas(gas) {
        this.gass.push(gas);
    }

    renderBolt() {
        for (let i = 0; i < this.bolts.length; i++) {
            this.bolts[i].render();
        }
    }

    renderGas() {
        for (let j = 0; j < this.gass.length; j++) {
            this.gass[j].render();
        }
    }

    render() {
        this.checkCollissionBolt();
        this.checkCollissionGas();
        document.getElementById("game").innerHTML = "";
        this.car.render();
        this.renderBolt();
        this.renderGas();
        
    }

    
    checkCollissionBolt() {
        var bolts = this.bolts
        var car = this.car
        for (let i = 0; i < bolts.length; i++) {
            if (collission(car, bolts[i])) {
                bolts = bolts.splice(i, 1);
                console.log("You were struck by lightning", window.innerHeight)
                console.log("car height", this.car.height)
                console.log("BOLT height", this.bolts[0].y)
                return true;
            }
        }
        return false
    }
    
    checkCollissionGas() {
        var gass = this.gass
        var car = this.car
        for (let j = 0; j < gass.length; j++) {
            if (collission(car, gass[j])) {
                gass = gass.splice(j, 1);
                console.log("YES!")
                return true;
            }
        }
        return false
    }

    
}

function collission(element1, element2) {
    //let height = window.innerHeight
    return !(
        ((element1.y + element1.height) < (element2.y)) ||
        (element1.y > (element2.y + element2.height)) ||
        ((element1.x + element1.width) < element2.x) ||
        (element1.x > (element2.x + element2.width))
        //((height - element1.height) < (element2.y)) &&
        //(element1.y > (element2.y + element2.height)) ||
        // ((element1.x + element1.width) < element2.x) ||
        // (element1.x < (element2.x + element2.width))
    )
}


let game = new Game()