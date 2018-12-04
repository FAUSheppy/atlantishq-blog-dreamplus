/* this could be done inline */
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/atlantishq-offline-worker.js');
}
