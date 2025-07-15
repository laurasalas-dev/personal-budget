# personal-budget

# Descripción del proyecto:
Este programa permite registrar movimientos financieros (ingresos y egresos) e ir calculando el saldo total según las entradas del usuario. Funciona completamente en consola, utilizando prompt() para capturar datos y console.log() para mostrar resultados.

# Funciones:
El usuario ingresa:

El nombre del gasto o ingreso.

El tipo del movimiento ("Ingreso" o "Egreso").

El monto correspondiente.

El programa valida los datos ingresados:

El nombre no debe estar vacío.

El tipo debe ser "Ingreso" o "Egreso".

El monto debe ser un número mayor que cero.

Si los datos son válidos, el movimiento se guarda en un arreglo.

Luego se puede ejecutar una función para calcular el saldo total restando egresos y sumando ingresos.

# Funciones implementadas:
registrarMovimiento()
  - Solicita datos al usuario mediante prompt().
  - Valida los datos con estructuras if/else.
  - Agrega un objeto al arreglo presupuesto si los datos son correctos.

calcularTotalSaldo()
  - Recorre todos los movimientos con un for...of.
  - Suma si el tipo es "Ingreso", y resta si es "Egreso".
  - Devuelve el saldo total calculado.
