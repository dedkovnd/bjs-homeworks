class Weapon {
    constructor(props) {
        this.name = props.name;
        this.attack = props.attack;
        this.durability = props.durability;
        this.range = props.range;
    }
    takeDamage(damage) {
        this.durability = this.durability - damage;
        if (this.durability < 0) {
            return this.durability = 0;
        }
    }
    toString() {
        console.log(this.name)
    }

    getDamage() {
        if (Weapon.durability >= this.durability) {
            return this.attack;
        }
        else if (Weapon.durability < this.durability*0.3) {
            return this.attack/2;
        } else if (Weapon.durability === 0){
            return 0;
        }
    }
    isBroken(){
        if (this.durability > 0) {
            return false;
        }
    }
}
//вторая задача. Подскажите, правильно ли  понял условия решения?

class Hand extends Weapon {
    constructor() {
        super({name: 'Hand', attack: 1, durability: Infinity, range: 1});
    }
}

class Bow extends Weapon {
    constructor() {
        super({name: 'Bow', attack: 10, durability: 200, range: 3});
    }
}

class Sword extends Weapon {
    constructor() {
        super({name: 'Sword', attack: 25, durability: 500, range: 1});
    }
}

class Knife extends Weapon {
    constructor() {
        super({name: 'Knife', attack: 5, durability: 300, range: 1});
    }
}

class Staff extends Weapon {
    constructor() {
        super({name: 'Staff', attack: 8, durability: 300, range: 2});
    }
}

class LongBow extends Bow {
    constructor() {
        super({name: 'Long Bow', attack: 15, durability: Bow.durability, range: 4});
    }
}

class Axe extends Sword {
    constructor() {
        super({name: 'Axe', attack: 27, durability: 800, range: Sword.range});
    }
}

class StaffStorm extends Staff {
    constructor() {
        super({name: 'Staff of the storm', attack: 10, durability: Staff.durability, range: 3});
    }
}

//третья задача


class StudentLog {
    constructor(name) {
        this.name = name;
        this.grades = {};
    }
    getName() {
        return this.name;
    }
    addGrade(grade, subject) {
        if (this.grades[subject] === undefined) {
            this.grades[subject] = [];
        }
        if (!Number.isNaN(+grade) && (grade >= 1 && grade <= 5)) {
            this.grades[subject].push(grade);
        } else {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}`);
        }
        return this.grades[subject].length;
    }
    getAverageBySubject(subject) {
        let result;
        if (this.grades[subject] !== undefined) {
            let sum = this.grades[subject].reduce((a,b) => {return a+b}, 0)

            result = sum/this.grades[subject].length;
        } else {
            result = 0;
        }
        return result;
    }
    getTotalAverage() {
        let count = 0;
        let sum = 0;
        for (let subject in this.grades) {
            sum += this.getAverageBySubject(subject);
            count ++;
        }
        return Number.isNaN(sum/count) ? 'Нет оценок' : sum/count;

    }

}

