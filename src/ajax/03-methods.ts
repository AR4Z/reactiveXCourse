import { ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

ajax.post(url, {
    id: 1,
    nombre: 'Orlando'
}, {
    'mi-token': 'ABC123'
}).subscribe(console.log);

