import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

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
        nombre: 'X'
    },
    {
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
    distinctUntilKeyChanged('nombre')
).subscribe(console.log)
