import { tap, map } from "rxjs/operators";
import { range } from "rxjs";

const numeros$ = range(1,5);


numeros$.pipe(
    tap(console.log),
    map(val => val*10),
    tap(x => console.log('despues', x))
).subscribe(val => console.log('subs', val));

