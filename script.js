function agregarValor(valor) {
    document.getElementById("resultado").value += valor;
}

function limpiar() {
    document.getElementById("resultado").value = '';
}

function calcular() {
    const resultado = document.getElementById("resultado").value;
    try {
        document.getElementById("resultado").value = eval(resultado);
    } catch (error) {
        document.getElementById("resultado").value = 'Error';
    }
}
