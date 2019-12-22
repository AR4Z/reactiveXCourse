import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<number> = {
    error: err => console.warn('error: ', err),
    complete: () => console.info('complete'),
    next: value => console.log('next: ', value)
};

const intervalo$ = new Observable<number>( subs => {
    const intervalId = setInterval(
        () => subs.next(Math.random())
    , 1000);

    return () => {
        clearInterval(intervalId);
        console.log('Intérvalo destruido');
    };
});

const subject$ = new Subject<number>();

const subscription = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe( rand => console.log('sub1', rand) );
// const subs2 = intervalo$.subscribe( rand => console.log('sub2', rand) );

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);
