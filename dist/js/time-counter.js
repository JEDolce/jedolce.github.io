const fechaCasamiento = new Date(2021, 11, 04, 18, 0, 0).getTime();

var intervalo = setInterval(function() {
    var hoy = new Date().getTime();
    var dif = fechaCasamiento - hoy;
    
    var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
    var horas = Math.floor(dif % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutos = Math.floor(dif % (1000 * 60 * 60) / (1000 * 60));
    var segundos = Math.floor(dif % (1000 * 60) / 1000);

    const para = document.querySelector('.counter');
    para.innerHTML = dias + "d " + horas + "h " + + minutos + "m " + segundos + "s ";

    if(dif < 0 ) {
        clearInterval(intervalo);
        para.innerHTML = "EMPEZO LA FIESTA!";
    }
    
}, 1000);





