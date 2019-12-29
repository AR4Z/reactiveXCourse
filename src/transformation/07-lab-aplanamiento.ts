import { fromEvent, of } from "rxjs";
import { tap, map, mergeMap, pluck, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
const peticionHttpLogin = (userCredentials) => ajax.post(
    'https://reqres.in/api/login?delay=1',
    userCredentials
).pipe(
    pluck('response', 'token'),
    catchError(err => of(''))
);

const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'pistol';

submitBtn.innerHTML = 'Login';

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form);


const submitForm$ = fromEvent(form, 'submit').pipe(
    tap(ev => ev.preventDefault()),
    map(ev => { return { email: ev.target[0].value, password: ev.target[1].value } }),
    mergeMap(peticionHttpLogin)
);

submitForm$.subscribe(token => { console.log(token) });

