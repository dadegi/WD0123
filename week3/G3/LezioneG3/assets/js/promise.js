function mostraPagina(qualcosa) {
    document.getElementById('pagina').innerHTML = qualcosa;
}

let funzionePromise = new Promise(function(resolve, reject) {
    let req = new XMLHttpRequest();
    req.open('GET', 'includes.html');
    req.onload = function() {
        if (req.status == 200) {
            console.log(req.status);
            resolve(req.response);
        } else {
            reject('File non trovato!');
        }
    };
    req.send();
});

funzionePromise.then(
    function(value) {mostraPagina(value);},
    function(error) {mostraPagina(error);}
)