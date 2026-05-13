function Rabbit(name) {
    this.name = name;

    prototype = {
        constructor: Rabbit,
        jump() {console.log("jump")}
    }
}

const rabbit = new Rabbit("cico");

rabbit.jump();