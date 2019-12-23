import {range, of, from, fromEvent} from 'rxjs';
import { filter, map } from 'rxjs/operators';

range(20, 30).pipe(
    filter((val, i) => {
        console.log('index', i);
        return val % 2 == 1;
    })
)//.subscribe(console.log);


interface Personaje {
    type: string,
    name: string
}

const personajes: Personaje[] = [
    {
        type: 'heroe',
        name: 'batman'
    },
    {
        type: 'heroe',
        name: 'robin'
    },
    {
        type: 'villano',
        name: 'Joker'
    }
]

from(personajes).pipe(
    filter(({ type }) => type == 'heroe')
).subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(key => key === 'Enter')
);
keyup$.subscribe(console.log);

