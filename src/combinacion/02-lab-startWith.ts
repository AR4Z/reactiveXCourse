import { ajax } from "rxjs/ajax";
import { startWith } from "rxjs/operators";

const loadingdiv = document.createElement('div');
loadingdiv.classList.add('loading');
loadingdiv.innerHTML = 'Cargando...';

const body = document.querySelector('body');
ajax.getJSON('https://reqres.in/api/users/2?delay=3').pipe(
    startWith(true)
).subscribe(resp => {
    if(resp === true) {
        body.append(loadingdiv);
    } else {
        document.querySelector('.loading').remove();
    }
});

