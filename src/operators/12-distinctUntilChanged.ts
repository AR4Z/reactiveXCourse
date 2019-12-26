import { of, from } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";

const numeros$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);


numeros$.pipe(
    distinctUntilChanged()
).subscribe(
    console.log
)

interface Personaje {
    nombre: string;
}
const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },{
        nombre: 'Zero'
    },{
        nombre: 'Dr. Willy'
    },{
        nombre: 'X'
    },{
        nombre: 'Megaman'
    },{
        nombre: 'Zero'
    },{
        nombre: 'Megaman'
    },{
        nombre: 'Zero'
    },
]

from(personajes).pipe(
    distinctUntilChanged((p: Personaje, p2: Personaje) => p.nombre === p2.nombre)
).subscribe(console.log)
