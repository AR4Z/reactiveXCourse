import {of, from} from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

/**
 * of = toma argumentos y genera una secuencia
 * from  = array, promise, iterable, observable
 */


 const observer = {
     next: val => console.log('next: ', val),
     complete: () => console.log('complete')
 }

/* const source$ = from( fetch('https://api.github.com/users/ar4z') );
source$.subscribe(async resp => {
    const dataResp = await resp.json()
    console.log(dataResp)
}) */

// source$.subscribe(observer);

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador()
/*for(let id of miIterable) {
    console.log(id)
}*/
from(miIterable).subscribe(observer);
