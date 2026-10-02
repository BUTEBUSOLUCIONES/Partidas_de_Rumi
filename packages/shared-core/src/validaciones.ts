// Regla RN-01: Mínimo 3, máximo 5 participantes
export function esCantidadParticipantesValida(cantidad: number): boolean {
  if (cantidad < 3 || cantidad > 5) {
    return false;
  }
  return true;
}