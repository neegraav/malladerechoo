function activar(boton, siguienteSemestre) {
  if (!boton.classList.contains('activo')) return;

  boton.classList.remove('activo');
  boton.classList.add('aprobado');

  const siguiente = document.querySelector(`[data-semestre="${siguienteSemestre}"]`);
  if (siguiente) {
    const ramos = siguiente.querySelectorAll('.ramo');
    ramos.forEach(r => r.classList.add('activo'));
  }
}
