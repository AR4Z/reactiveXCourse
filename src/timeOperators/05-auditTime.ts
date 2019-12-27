import { auditTime, tap, map } from "rxjs/operators";
import { fromEvent } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x}) => x),
    tap(val => console.log('tap', val)),
    auditTime(2000)
).subscribe(console.log);
