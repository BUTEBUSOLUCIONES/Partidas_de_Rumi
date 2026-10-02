import { describe, it, expect } from 'vitest';
import { esCantidadParticipantesValida, esValorBaseValido, esApuestaValida } from './validaciones';

describe('Regla RN-01: Cantidad de participantes', () => {
  it('debe retornar true para 3 participantes (mínimo)', () => {
    expect(esCantidadParticipantesValida(3)).toBe(true);
  });

  it('debe retornar true para 5 participantes (máximo)', () => {
    expect(esCantidadParticipantesValida(5)).toBe(true);
  });

  it('debe retornar true para 4 participantes (valor intermedio)', () => {
    expect(esCantidadParticipantesValida(4)).toBe(true);
  });

  it('debe retornar false para 2 participantes (demasiado pocos)', () => {
    expect(esCantidadParticipantesValida(2)).toBe(false);
  });

  it('debe retornar false para 6 participantes (demasiados)', () => {
    expect(esCantidadParticipantesValida(6)).toBe(false);
  });
});

describe('Regla RN-02: Valor base de la sesión (en centavos)', () => {
  it('debe retornar true para 20 centavos (múltiplo de 20)', () => {
    expect(esValorBaseValido(20)).toBe(true);
  });

  it('debe retornar true para 25 centavos (múltiplo de 25)', () => {
    expect(esValorBaseValido(25)).toBe(true);
  });

  it('debe retornar true para 100 centavos ($1.00, múltiplo de ambos)', () => {
    expect(esValorBaseValido(100)).toBe(true);
  });

  it('debe retornar false para 30 centavos (no es múltiplo de 20 ni 25)', () => {
    expect(esValorBaseValido(30)).toBe(false);
  });

  it('debe retornar false para 0 centavos (no se puede jugar gratis)', () => {
    expect(esValorBaseValido(0)).toBe(false);
  });

  it('debe retornar false para valores negativos', () => {
    expect(esValorBaseValido(-25)).toBe(false);
  });
});

describe('Regla RN-03: Apuesta del jugador', () => {
  it('debe retornar true cuando la apuesta es igual al valor base', () => {
    expect(esApuestaValida(25, 25)).toBe(true);
  });

  it('debe retornar false cuando la apuesta es mayor al valor base', () => {
    expect(esApuestaValida(50, 25)).toBe(false);
  });

  it('debe retornar false cuando la apuesta es menor al valor base', () => {
    expect(esApuestaValida(10, 25)).toBe(false);
  });
});