class Gas {
    constructor(){
        this.x = Math.round(Math.random() * (window.innerWidth - 40));
        this.y = 0;
        this.width = 20;
        this.height = 90;
        this.$gas = null;
        this.animate();

    }

    animate() {
        let gas = this;
        setInterval(()=> {
            gas.y += 50
        }, 300)
    }


    render(){
        let gas = document.createElement("div");
        gas.className = "gas"; // static styling in .Gas
        this.$gas = gas;
        gas.style.left = `${this.x}px`;
        gas.style.top = `${this.y}px`;

        document.getElementById('game').appendChild(gas)
    }

}