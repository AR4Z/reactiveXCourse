import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators";

const numeros = [1,2,3,4,5];

const totalAcumulador = (acc, cur) => acc + cur;

//reduce

from(numeros).pipe(
    reduce(totalAcumulador)
).subscribe(console.log)

// scan

from(numeros).pipe(
    scan(totalAcumulador)
).subscribe(console.log)

// redux

interface Usuario {
    id?: string;
    auth?: boolean;
    token?: string;
    edad?: number;
}
const user: Usuario[] = [
    {id: 'ar4z', auth: false, token: null},
    {id: 'ar4z', auth: true, token: 'ABC'},
    {id: 'ar4z', auth: true, token: 'ABC123'}
]

const state$ = from(user).pipe(
    scan<Usuario>((acc, cur)=> {
        return { ...acc, ...cur }
    }, {edad: 33})
)
const id$ = state$.pipe(
    map(state => state )
)

id$.subscribe(console.log)