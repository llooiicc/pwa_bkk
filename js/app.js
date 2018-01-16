/**
 * Created by loic on 15/01/18.
 */


if( 'serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
        .then(function (e) {
            console.log('[register] ok');
        }).catch(function (e) {
            console.log(e.message);
    })
}