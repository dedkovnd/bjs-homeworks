class Weapon {
    constructor(props) {
        this.name = props.name;
        this.attack = props.attack;
        this.durability = props.durability;
        this.range = props.range;
    }
    takeDamage(damage) {

        this.durability = this.durability - damage;
    }
    toString() {
        console.log(this.name)
    }

    getDamage() {
        if (this.durability >= this.durability*0.3) {
            return this.attack;
        } else if (this.durability < this.durability*0.3) {
            return this.attack/2;
        } else if (this.durability === 0){
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
        super({name: 'Hand', attack: 111, durability: 123, range: 123});
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

