import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

/*
range(1,5).pipe(
    map<number, number>( val => val*10 )
)
.subscribe(console.log);*/

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );
const keyupCode$ = keyup$.pipe(
    map<KeyboardEvent, number>(eve => eve.keyCode)
);
const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('Tecla presionada')
);
//keyupCode$.subscribe( val => console.log('map',val));
//keyupPluck$.subscribe( val => console.log('pluck',val));
keyupMapTo$.subscribe( val => console.log('mapTo',val));



