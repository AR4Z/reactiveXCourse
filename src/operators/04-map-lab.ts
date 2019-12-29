import { fromEvent } from "rxjs";
import { pluck, map, tap } from "rxjs/operators";

const texto = document.createElement('div');

texto.innerHTML = `
Phasellus malesuada neque sit amet purus maximus venenatis. Sed a pulvinar elit. Nam convallis fringilla egestas. Vestibulum at feugiat eros. Pellentesque auctor suscipit urna, vel lacinia orci luctus vitae. Praesent eu lectus sed ex iaculis cursus. Sed neque lectus, posuere ac interdum et, convallis sed nunc. Proin ac lectus felis. Vivamus a tristique felis. Pellentesque magna mauris, hendrerit nec magna eu, ullamcorper laoreet neque. Integer malesuada fermentum sapien quis egestas. Etiam congue tristique enim et aliquam. Fusce porta eros volutpat est sagittis lacinia. Donec id cursus purus, ac porttitor ligula. Nullam a libero quis libero facilisis consequat sit amet vitae nisl. Quisque sit amet pretium elit, non dictum justo.
<br/>
<br/>
Suspendisse pretium urna non magna varius, a mollis mi malesuada. Suspendisse dictum pharetra libero, sed lacinia risus luctus at. Suspendisse dapibus quis augue quis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta vulputate volutpat. Cras velit nibh, varius et lectus vitae, posuere vehicula ex. Praesent non leo et nisi sollicitudin lobortis vel id justo.
<br/>
<br/>
Donec mollis, ante ut dapibus ullamcorper, ligula quam pharetra purus, sit amet pellentesque odio quam id lacus. In tempus, massa quis imperdiet tempus, eros nisl convallis tortor, at dictum ligula neque a magna. Fusce tempus tellus a risus hendrerit, in posuere augue sodales. Sed quis urna tortor. Donec mattis ut massa vitae eleifend. Donec suscipit sem eget mauris egestas, ut feugiat mi vehicula. Nunc eu est a felis faucibus lacinia quis ultrices lectus. Nulla sodales, mauris vitae facilisis efficitur, sem nisl mollis erat, at facilisis nulla libero accumsan nisi. Mauris molestie ipsum ac sem interdum, ut malesuada lectus egestas. Etiam varius dolor ipsum, eu ullamcorper est placerat sit amet. Nulla non porttitor lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla non libero quis ligula vehicula luctus eu iaculis lectus.
<br/>
<br/>
Ut ornare, augue sed pharetra lacinia, orci turpis accumsan orci, ut consequat lorem odio sodales est. Vivamus convallis diam id est tristique, et vehicula leo auctor. Integer id lacus et nisl pulvinar ornare id vitae magna. Vivamus pretium augue in nibh aliquam lobortis. Cras sit amet risus placerat ligula suscipit scelerisque at non risus. Aenean auctor justo aliquet pretium sollicitudin. Etiam dictum volutpat enim non venenatis. Quisque egestas quam id quam efficitur fermentum. Phasellus velit metus, tempor ultrices tincidunt at, ornare eu orci. Duis id molestie leo, sit amet placerat purus. Ut nunc est, mollis ut iaculis id, bibendum eget lectus. Maecenas maximus turpis id libero lobortis, sit amet convallis lectus interdum. Aenean consequat nisi id egestas luctus. Sed quis vulputate nisi.
<br/>
<br/>
Nam a mattis mi. Quisque nec turpis ligula. Nunc molestie nisi et ex sagittis lobortis. Sed sollicitudin sem id sem faucibus, in aliquam urna consequat. Etiam at iaculis urna, ut feugiat sem. Sed erat augue, auctor quis fermentum eu, semper vitae mauris. Etiam fringilla iaculis rutrum. Aenean nec sollicitudin neque, vitae tempus elit. Proin congue maximus erat, in interdum tortor varius congue. Integer aliquet risus eget elit posuere tempor. 
`
const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);


// streams

const scroll$ = fromEvent(document, 'scroll');

scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    pluck('target', 'documentElement'),
    map((doc) => doc['scrollTop'] /doc['scrollTopMax'] * 100),
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${ porcentaje }%`;
})


