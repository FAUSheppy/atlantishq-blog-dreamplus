/* this could be done inline */
//if('serviceWorker' in navigator) {
//    navigator.serviceWorker.register('/atlantishq-offline-worker.js');
//}

navigator.serviceWorker.getRegistrations().then(
 function(registrations) {
     for(let registration of registrations) {  
         registration.unregister();
     }
});
