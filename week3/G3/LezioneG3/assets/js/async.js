function partenzaRitardata() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('FINE!');
        }, 3000);
    })
}

async function funzioneAsincrona() {
    document.getElementById('start').innerHTML = 'partenza asincrona';
    let ends = await partenzaRitardata();
    document.getElementById('end').innerHTML = ends;
}

document.getElementById('attesa').innerHTML = 'Sto aspettando...';

funzioneAsincrona();