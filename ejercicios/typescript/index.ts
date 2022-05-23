//Boolean
let muted:boolean = true;
muted=false;

//NÚmeros
let age = 6;//no puedes usar "6"
let numerador: number = 42;
let denominador:number = age;
let resultado = numerador/denominador;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String
let nombre: string = 'Max';
let saludo = `Me llamo ${nombre}`;

//Arreglos
let people:string[] = [];
people = ["Isaber", "Nicole", "Raul"];
people.push("9000");

let peopleAndNumbers: Array< string | number> = [];
peopleAndNumbers = ["Isabel","Nicole","Raul"];
peopleAndNumbers.push("Max");
peopleAndNumbers.push(9000);

//enum
// enum Color {Red, Green, Blue}
// let c: Color = Color.Green;
// console.info(c)

// enum Color {Red = 1, Green, Blue}
// let c: Color = Color.Green;
// console.info(c)

// enum Color {Red = 1, Green = 2, Blue = 4}
// let c: Color = Color.Green;
// console.info(c)


enum Color{
    Rojo = "Rojo",
    Verde = 2,
    Azul = "Amarillo",
}

let colorFav: Color = Color.Rojo;

console.log(`Mi color favorito es ${colorFav}`);

console.log(Color[2])

//Any
let comodin:any = "Joker";
comodin = {type: "Wildcard"};

//Objet
let someObject :object = { tipo: "Wildcard"};

console.info(someObject)


// funciones
function add(a:number, b:number) : number {
    return a + b;
}

const sum = add(4,6);

// funcion que retona funcion
function createAdder(a:number):(number)=>number{
    return function(b:number){
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

console.log('fourPlus6 ', fourPlus6);

//parametros opcionales
function fullName(firstName:string = "Andy", lastName:string):string{
    return `${firstName} ${lastName}`;
}

const max = fullName(undefined, "Diaz");

console.info('max: ', max);



// Interfaces
enum Colorcito{
    Rojo = "rojo",
    Verde = "verde"
}

interface Rectangulo{
    alto:number,
    ancho: number,
    color?:Colorcito
}

let rect:Rectangulo = {
    alto: 6,
    ancho: 4,
    color: Colorcito.Rojo
}

function area(r:Rectangulo) {
    return r.alto*r.ancho;
}

const areaRect = area(rect);
console.info(areaRect)

rect.toString = function () {
    return this.color? `Un rectangulo ${this.color}`:'Un rectangulo';
}

console.log(rect.toString());