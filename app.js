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


function calcularRetornoAlmoço() {

    var segundoPonto = document.getElementById("segundoPonto").value;
    var tempoAlmoço = document.getElementById("tempoAlmoço").value;
    var minutosSegundoPonto = converterParaMinutos(segundoPonto);
  
    var tempoAlmoço = converterParaMinutos(tempoAlmoço);

    var retornoAlmoço = tempoAlmoço + minutosSegundoPonto;

    var retornoAlmoço = formatarHora(retornoAlmoço);

    document.getElementById("terceiroPonto").value = retornoAlmoço;
}




function calcularUltimoPonto() {
    
    var primeiroPonto = document.getElementById("primeiroPonto").value;
    var segundoPonto = document.getElementById("segundoPonto").value;
    var terceiroPonto = document.getElementById("terceiroPonto").value;
    var duracaoAlmoco = document.getElementById("duracaoAlmoco").value;
    var totalExpediente = document.getElementById("totalExpediente").value;


    var minutosPrimeiroPonto = converterParaMinutos(primeiroPonto);
    var minutosSegundoPonto = converterParaMinutos(segundoPonto);
    var minutosTerceiroPonto = converterParaMinutos(terceiroPonto);
    var totalExpediente = converterParaMinutos(totalExpediente);
   

   
    
    

    var tempoTrabalhadoAntesAlmoco = minutosSegundoPonto - minutosPrimeiroPonto;

    var tempoRestanteTrabalho = totalExpediente - tempoTrabalhadoAntesAlmoco; 

    var minutosUltimoPonto = minutosTerceiroPonto + tempoRestanteTrabalho;

    var sugestaoMinutosAntes = minutosUltimoPonto - 10;

    var sugestaoMinutosDepois = minutosUltimoPonto + 10;

    var totalTrabalhado = tempoTrabalhadoAntesAlmoco + tempoRestanteTrabalho;

    var ultimoPontoHora = formatarHora(minutosUltimoPonto);

    var duracaoAlmoco = minutosTerceiroPonto - minutosSegundoPonto;
   
    var duracaoAlmoco = formatarHora(duracaoAlmoco);

    var totalTrabalhado = formatarHora(totalTrabalhado);

    var sugestaoAntes = formatarHora(sugestaoMinutosAntes); 

    var sugestaoDepois = formatarHora(sugestaoMinutosDepois);

    document.getElementById("sugestaoHorario").textContent = `Tolerância: ${sugestaoAntes} - ${sugestaoDepois}`;
    document.getElementById("duracaoAlmoco").textContent = `Tempo de almoço realizado: ${duracaoAlmoco}`;
    document.getElementById("ultimoPonto").value = ultimoPontoHora;
}




function limpar() {
    document.getElementById('primeiroPonto').value = '';
    document.getElementById('segundoPonto').value = '';
    document.getElementById('terceiroPonto').value = '';
    document.getElementById('ultimoPonto').value = '';
    document.getElementById('sugestaoHorario').textContent = '';
    document.getElementById('duracaoAlmoco').textContent = '';
}

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('totalExpediente').value = '07:30';
    document.getElementById('tempoAlmoço').value = '01:00';
   

  });