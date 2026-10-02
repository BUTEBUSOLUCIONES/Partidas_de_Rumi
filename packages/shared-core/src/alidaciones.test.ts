import { describe, it, expect } from 'vitest';
import { esCantidadParticipantesValida } from './validaciones';

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