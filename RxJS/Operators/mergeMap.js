const post$ = Rx.Observable.of({id: 1});
const getPostInfo$ = Rx.Observable.timer(3000).mapTo({title: "Post title"});

const posts$ = post$.mergeMap(post => getPostInfo$).subscribe(res => console.log(res));
