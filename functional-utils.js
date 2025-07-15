const movimientos = [
  { nombre: "Salario", tipo: "ingreso", valor: 3000 },
  { nombre: "Comida", tipo: "gasto", valor: 200 },
  { nombre: "Freelance", tipo: "ingreso", valor: 500 },
  { nombre: "Transporte", tipo: "gasto", valor: 150 }
];

// functional-utils.js
function obtenerNombres(movimientos) {
  return movimientos.map(mov => mov.nombre);
}

function obtenerValores(movimientos) {
  return movimientos.map(mov => mov.valor);
}

function calcularTotal(valores) {
  return valores.reduce((total, valor) => total + valor, 0);
}

console.log("Nombres:", obtenerNombres(movimientos));
console.log("Valores:", obtenerValores(movimientos));
console.log("Total:", calcularTotal(obtenerValores(movimientos)));

function contarPorTipo(movimientos) {
  let resultado = { ingresos: 0, gastos: 0 };

  for (let mov of movimientos) {
    if (mov.tipo === "ingreso") {
      resultado.ingresos++;
    } else if (mov.tipo === "gasto") {
      resultado.gastos++;
    }
  }

  return resultado;
}

console.log("Conteo por tipo:", contarPorTipo(movimientos));

