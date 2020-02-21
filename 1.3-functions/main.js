

function getSolutions(a,b,c) {
    let d = b*b - 4*a*c;
    let result;
    if (d < 0) {
        return result = {d: d};
    } else if (d == 0) {
        let xOne = -b/(2*a);
        return result = {
            roots: [xOne],
            d: d
        }
    } else {
        let xOne = (-b + Math.sqrt(d))/(2*a);
        let xTwo = (-b - Math.sqrt(d))/(2*a);
        return result = {
            roots: [xOne,xTwo],
            d: d
        }
    }

}

function showSolutionsMessage(a,b,c) {
    let result = getSolutions(a,b,c);
    console.log(`Вычесляем корни квадратного уравнения ${a}*x*x + ${b}*x + ${c} = 0`);
    console.log(`Значение дискриминанта ${result.d}`);
    if (result.d < 0) {
        console.log("Уравнение не имеет вещественных корней");
    } else if (result.d == 0) {
        console.log(`Уравннение имеет один корень x=${result.roots}`);
    } else if (result.d > 0) {
        console.log(`Уравнение имеет два корня x=${result.roots[0]} и x=${result.roots[1]} `);
    }
}

///////////

function getAverageScore(data) {

    let result = {};

    function getAverageMark(marks) {
        let sum = 0;
        for (let i = 0; i < marks.length; i++) {
            sum +=marks[i];
        }
        return sum/marks.length;
    }

    for (let key in data) {
       result[key] = getAverageMark(data[key]);
    }

    for (let key in result) {
        result.average = getAverageMark(result[key]);
    }

    return result;
}
//////////

function getPersonData(secretData) {


    function getDecodedName(secret) {
        let decodedName;

        if (secret == 0) {
            decodedName = "Rodrigo";
        } else if (secret == 1){
            decodedName = "Emilio";
        }
        return decodedName;
    }

    let name = {
        firstName: getDecodedName(secretData.aaa),
        lastName: getDecodedName(secretData.bbb)
    }
    console.log(name);
}







