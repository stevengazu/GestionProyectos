// Style import

import { getWeather } from './networking/weather';
import './styles/main.scss';
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';



export const displayWeather = async () => {
    const button = document.getElementById('button-location') as HTMLButtonElement;
    button.disabled =true;
    const city = getCity();
    if(city) {
        const weather = await getWeather(city);
        updateInteface(weather);
    } 
    button.disabled = false;
}

if (buttonClick) buttonClick.addEventListener('click', displayWeather);


//class A
class ClaseA {
    foo: number;
    bar: string;
    lorem: string;

    constructor(foo: number, bar: string,lorem:string) {
        this.foo = foo;
        this.bar = bar;
        this.lorem=lorem;
    }
}
const instanciaA = new ClaseA(42, "Hola, mundo","sdfa");
console.log(instanciaA.foo); // 42
console.log(instanciaA.bar); // "Hola, mundo"

//class B
class ClaseB {
    foo: number;
    bar: string;

    constructor(foo: number, bar: string) {
        this.foo = foo;
        this.bar = bar;
    }
}
const instanciaB = new ClaseA(42, "Hola, mundo");
console.log(instanciaA.foo); // 42
console.log(instanciaA.bar); // "Hola, mundo"
console.log(instanciaA.bar); // "Hola, mundo"
//class C
class ClaseC {
    foo: number;
    bar: string;

    constructor(foo: number, bar: string) {
        this.foo = foo;
        this.bar = bar;
    }
}
const instanciaC = new ClaseA(42, "Hola, mundo");
console.log(instanciaC.foo); // 42
console.log(instanciaC.bar); // "Hola, mundo"
