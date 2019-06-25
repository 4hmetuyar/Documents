const getPostOne$ = Rx.Observable.timer(1000).mapTo({id: 1});
const getPostTwo$ = Rx.Observable.timer(2000).mapTo({id: 2});

Rx.Observable.forkJoin(getPostOne$, getPostTwo$).subscribe(res => console.log(res)) 
