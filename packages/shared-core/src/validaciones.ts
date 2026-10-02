// Regla RN-01: Mínimo 3, máximo 5 participantes
export function esCantidadParticipantesValida(cantidad: number): boolean {
  if (cantidad < 3 || cantidad > 5) {
    return false;
  }
  return true;
}

// Regla RN-02: El valor base debe ser mayor a 0 y múltiplo de 20 o 25 centavos
export function esValorBaseValido(valorBaseCentavos: number): boolean {
  if (valorBaseCentavos <= 0) return false;
  return valorBaseCentavos % 20 === 0 || valorBaseCentavos % 25 === 0;
}

// Regla RN-03: La apuesta del jugador debe ser exactamente igual al valor base de la sesión
export function esApuestaValida(apuestaCentavos: number, valorBaseCentavos: number): boolean {
  return apuestaCentavos === valorBaseCentavos;
}