// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');


var name = 'poli';
// var age = 29;
let profesion = 'docente';

// function hablar() {
//   var age = 29;
//   console.log(age);
// };


const fnHablar = function hablar() {
  console.log(b); // undefined
};

class Persona {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saludar() {
    console.log(`Hola mi nombre ${this.name}`)
  }
  correr() {
    console.log('Corriendo');
  }
};

class GranPersona extends Persona {
    constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }

  volar() {
    console.log(`${this.name} puedes ${this.job}`);
  }
}
const p = new GranPersona('poli', 29, 'volar' );
p.saludar();
p.correr();
p.volar();