function converterParaMinutos(hora) {
    var partes = hora.split(':');
    return parseInt(partes[0]) * 60 + parseInt(partes[1]);
}

function formatarHora(minutos) {
    var horas = Math.floor(minutos / 60);
    var minutosRestantes = minutos % 60;
    if (horas >= 24) {
        horas = horas - 24;
    }
    return adicionarZeroEsquerda(horas, 2) + ':' + adicionarZeroEsquerda(minutosRestantes, 2);
}

function adicionarZeroEsquerda(numero, tamanho) {
    var stringNumero = numero + "";
    while (stringNumero.length < tamanho) {
        stringNumero = "0" + stringNumero;
    }
    return stringNumero;
}

function calcularUltimoPonto() {
    
    var primeiroPonto = document.getElementById("primeiroPonto").value;
    var segundoPonto = document.getElementById("segundoPonto").value;
    var terceiroPonto = document.getElementById("terceiroPonto").value;
    var duracaoAlmoco = document.getElementById("duracaoAlmoco").value;

    
    var minutosPrimeiroPonto = converterParaMinutos(primeiroPonto);
    var minutosSegundoPonto = converterParaMinutos(segundoPonto);
    var minutosTerceiroPonto = converterParaMinutos(terceiroPonto);
   
    
    

   
    var tempoTrabalhadoAntesAlmoco = minutosSegundoPonto - minutosPrimeiroPonto;

    var tempoRestanteTrabalho = (7 * 60) + 30 - tempoTrabalhadoAntesAlmoco; 

    
    var minutosUltimoPonto = minutosTerceiroPonto + tempoRestanteTrabalho;

   
    var ultimoPontoHora = formatarHora(minutosUltimoPonto);

    var duracaoAlmoco = minutosTerceiroPonto - minutosSegundoPonto;

    var duracaoAlmoco = formatarHora(duracaoAlmoco);


    document.getElementById("duracaoAlmoco").value = duracaoAlmoco;
    
    document.getElementById("ultimoPonto").value = ultimoPontoHora;
}