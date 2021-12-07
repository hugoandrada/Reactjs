// METODO MAP
// llama a la funcion para cada elemento del array

const Personas = [
    { Nombre: 'Hugo',
      Apellido: 'Andrada',
      Edad: 38,
      Dni: 30303123,
      Varios: ['cuatro','cinco','seis']
    },{
      Nombre: 'Juan',
      Apellido: 'Perez',
      Edad: 53,
      Dni: 22123555,
      Varios: ['uno','dos','tres'] 
    }
]

// buscar cada elemento edad y le suma 2 a cada uno
Personas.map(buscar => buscar.Edad+2); // imprime 40 y 55
// buscar solo los elementos que queremos
Personas.map(buscar => buscar.Nombre) // imprime Hugo y Juan
//concatena la palabra user a cada elemento apellido
Personas.map(p => p.Apellido + " user");


const t = [1, 2, 3] 

const m1 = t.map(value => value * 2) 
console.log(m1) // [2, 4, 6] es impreso

//usando desestructuracion se asignan variables a los elementos del array
const t = [1, 2, 3, 4, 5]
const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 es impreso
console.log(rest)          // [3, 4 ,5] es impreso