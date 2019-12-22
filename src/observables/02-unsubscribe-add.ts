import { Observable, Observer } from 'rxjs';

const observer: Observer<number> = {
    error: err => console.warn('error: ', err),
    complete: () => console.info('complete'),
    next: value => console.log('next: ', value)
};


const intervalo$ = new Observable<number>(subscriber => {
    let cont: number = 1;
    const interval = setInterval(() => {
        console.log(cont);
        subscriber.next(cont++);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Intérvalo destruido');
    }
});


const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2)
     .add(subs3);

setTimeout(()=> {
    subs1.unsubscribe();

    console.log('Completado timeout');
}, 6000);


