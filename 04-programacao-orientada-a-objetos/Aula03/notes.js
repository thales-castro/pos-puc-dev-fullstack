// test
console.log("Hello, World!");

// var
function testVar() {
    var var01 = "var 01";

    {
        var var02 = "var 02";
        console.log("01a." + var01);
        console.log("01b" + var02);
    }

    console.log(var01);
    console.log(var02);
}

// let
function testLet() {
    let let01 = "let 01";

    {
        let let02 = "let 02";
        console.log("01a." + let01);
        console.log("02a." + let02);
    }

    console.log(let01);
    // console.log(let02); // Essa linha gera um erro pois let02 está fora do escopo declarado
}

// const
function testConst() {
    const const01 = { propriedade: "valor" };
    console.log(const01)

    // const01 = {}; // Essa linha gera um erro pois essa constante não pode ser reatribuida, como um todo.

    const01.propriedade = "valor novo";
    console.log(const01)

}

console.log("------------------------------- var -----------------------------");
testVar();
console.log("------------------------------- let -----------------------------");
testLet();
console.log("------------------------------ const ----------------------------");
testConst();


// Expressões lambda

function decision(question, doOK, doCancel) {
    if (question == "OK") doOK();
    else doCancel();
}

function doOK() { console.log("Function OK called"); }

function doCancel() { console.log("You have called CANCEL function"); }

decision("OK", doOK, doCancel);
decision("cancel", doOK, doCancel);

let beOk = doOK
let beCancel = doCancel

decision("OK", beOk, beCancel);
decision("cancel", beOk, beCancel);

// Arrow Functions

//SINTACE BASICA
// (param1, param2, paramN) => { statements }
// (param1, param2, paramN) => expression
// equivalente a: =: { return expression; }

// Parenteses são opcionais quando só há um nome de parâmetro:
// (singleParam) => { statements }
// singleParam => { statements }

// A lista de parâmetros para uma função sem parâmetros 
// DEVE ser escrita com um par de parenteses ou _ 
// () => { statements }
// _ => { statements }

var printMessage = () => console.log("função sem parametros");
printMessage();

printMessage = _ => console.log("usando funcção com discard")
printMessage();

var funcWithParams = (x, y) => x + y;
console.log("example of funcWithParams: " + funcWithParams(2, 2));

funcWithParams = (x, y) => { return x + y };
console.log("example of funcWithParams: " + funcWithParams(2, 5));

var arrowWithLines = (x, y) => {
    if (x > y) return x;
    return y;
}

console.log("example of arrowWithLines: " + arrowWithLines(2, 5));