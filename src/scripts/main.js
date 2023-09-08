document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit_form').addEventListener('submit', function (e) {
        e.preventDefault();

        let valorEmprestado = parseFloat(document.getElementById('valor_emprestado').value);
        let numeroParcelas = parseInt(document.getElementById('numero_parcelas').value);
        let taxaJuros = 1 + parseFloat(document.getElementById('taxa_juros').value) / 100;
        let divisor = 0;

        for (let i = 0; i < numeroParcelas; i++) {
            divisor += Math.pow(taxaJuros, i);
        }

        let valorParcela = (valorEmprestado * Math.pow(taxaJuros, numeroParcelas)/divisor).toFixed(2);
        let totalPago = valorParcela * numeroParcelas;

        document.getElementById('mostrar_emprestado').innerHTML = valorEmprestado.toFixed(2);
        document.getElementById('mostrar_parcelas').innerHTML = numeroParcelas;
        document.getElementById('mostrar_valor_parcelas').innerHTML = valorParcela;
        document.getElementById('mostrar_valor_pago').innerHTML = totalPago.toFixed(2);
        document.getElementById('mostrar_valor_juros').innerHTML = (totalPago - valorEmprestado).toFixed(2);

        document.querySelector('.resultado').style.display = 'block';
    });
    document.getElementById('submit_form').addEventListener('reset', function (e) {
        document.querySelector('.resultado').style.display = 'none';
    });
});
