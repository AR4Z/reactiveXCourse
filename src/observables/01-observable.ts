import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
    error: err => console.error('error: ', err),
    complete: () => console.info('complete'),
    next: value => console.log('next: ', value)
};

//const obs$ = Observable.create()
const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // it force error
    // const a = undefined;
    // a.nombre = 'Orlando';

    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');
});


/*obs$.subscribe(
    valor => console.log('next: ', valor),
    error => console.warn('error: ', error),
    () => console.info('Complete')
);*/

obs$.subscribe( observer );
