class Missile {
    constructor(type) {
        this.type = type;
        this.power = this.calculatePower();
    }

    calculatePower() {
        switch (this.type) {
            case 'nuclear':
                return 100; // Power level for nuclear bombs
            case 'hydrogen':
                return 250; // Power level for hydrogen bombs
            default:
                return 0; // Unknown type
        }
    }

    launch() {
        console.log(`Launching a ${this.type} missile with power: ${this.power}`);
    }
}

module.exports = Missile;
