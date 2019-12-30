import { fromEvent, combineLatest, from } from "rxjs";
import { pluck, subscribeOn } from "rxjs/operators";

/*const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

combineLatest(
    keyup$.pipe(pluck('type')),
    click$.pipe(pluck('type')),
).subscribe(console.log)*/

const input1 = document.createElement('input');
const input2 = document.createElement('input');
input1.placeholder = 'email@gmail.com'
input2.type = 'password'
input2.placeholder = '*********'

document.querySelector('body').append(input1, input2);
const getInputStream = (elm: HTMLElement) => {
    return fromEvent<KeyboardEvent>( elm, 'keyup' ).pipe(
        pluck<KeyboardEvent, string>('target', 'value')
    )
}
combineLatest(
    getInputStream(input1),
    getInputStream(input2)
).subscribe(console.log)
