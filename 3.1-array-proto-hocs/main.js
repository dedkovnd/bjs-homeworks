function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(500);
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arrOne,arrTwo){
    function compare(element,i) {
        return element === arrTwo[i];
    }
    if (arrOne.length === arrTwo.length && arrOne.every(compare)) {
        return true;
    }
}

function  memorize(fn,limit) {
    let memory = [];
    let memoryPush = {
        args: [fn(arguments)],
        result: fn()
    };
    memory.push(memoryPush);

    if (memory.args.find(compareArrays(memoryPush.args,memory.args)) === true) {
        return memory.result;
    }
    if (memory.lenght > 9) {
        memory.shift();
    }
}