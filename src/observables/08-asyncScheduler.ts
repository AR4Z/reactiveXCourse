import { asyncScheduler } from 'rxjs';


const saludar = () => console.log('hola mundo');
const saludar2 = nombre => console.log(`hola ${nombre}`);

console.log('inicio')

/*asyncScheduler.schedule(
    saludar, 2000
)*/
/*asyncScheduler.schedule(
    saludar2, 2000, 'orlando'
)*/

const subs = asyncScheduler.schedule(
    function(state: number) {
        console.log('state', state++);
        this.schedule(state, 1000);
    }, 3000, 0
)

/*setTimeout(() => {
    subs.unsubscribe()
}, 6000)*/

asyncScheduler.schedule(
    () => subs.unsubscribe(), 6000
)
console.log('fin')

