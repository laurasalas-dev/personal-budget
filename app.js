let presupuesto = [];

function registrarMovimiento() {

    let nombreGasto = prompt("Ingrese el nombre del gasto:");
    let tipo = prompt("Ingrese el tipo (Ingreso o Egreso):");
    let montoGastado = Number(prompt("Ingrese el monto:"));

    if (nombreGasto.trim() === "") {
        console.log("Error: El nombre no puede estar vacío.");
        return;
    }

    if (tipo !== "Ingreso" && tipo !== "Egreso") {
        console.log("Error: El tipo debe ser 'Ingreso' o 'Egreso'.");
        return;
    }

    if (isNaN(valor) || valor <= 0) {
        console.log("Error: El monto debe ser un número mayor que cero.");
        return;
    }

    presupuesto.push = { nombreGasto: nombreGasto.trim(), tipo, valor, fecha: new Date().toLocaleDateString() };

    console.log("✅ Movimiento guardado.");
}

function calcularTotalSaldo() {
  let total = 0;

  for (let m of presupuesto) {
    if (m.tipo === "Ingreso") {
      total += m.valor;
    } else {
      total -= m.valor;
    }
  }

  return total;
}


