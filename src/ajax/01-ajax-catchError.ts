import { ajax, AjaxError } from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/userXs?per_page=5';
const manejaErrores = (response: Response) => {
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
};
const atrapaError = (err: AjaxError) => {
    console.warn('error en: ', err);
    return of([]);
}
const fetchPromesa = fetch(url);

/*fetchPromesa
.then(manejaErrores)
.then((resp) => {
    return resp.json()
}).then(data => console.log('data', data))
.catch((err) => {
    console.warn('error', err)
})*/

ajax(url).pipe(
    pluck('response'),
    catchError(atrapaError)
    // map(resp => resp.response)
)
.subscribe(users => console.log('users', users));

