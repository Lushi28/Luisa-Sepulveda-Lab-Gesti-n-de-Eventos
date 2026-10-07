document.addEventListener('DOMContentLoaded', () => {
  // Tarea 1: cambiar el estilo del párrafo al pulsar el botón.
  const botonEstilo = document.getElementById('botonEstilo');
  const parrafo = document.getElementById('parrafo');

  botonEstilo?.addEventListener('click', () => {
    if (!parrafo) return;
    parrafo.style.fontFamily = 'Georgia, serif';
    parrafo.style.fontSize = '1.5rem';
    parrafo.style.color = '#764ba2';
  });

  // Tarea 2: imprimir los valores del formulario sin recargar la página.
  const formulario = document.getElementById('form1');
  formulario?.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const fname = formulario.elements.namedItem('fname')?.value ?? '';
    const lname = formulario.elements.namedItem('lname')?.value ?? '';
    console.log('Nombre:', fname);
    console.log('Apellido:', lname);
  });

  // Tarea 3: mostrar el total y las direcciones del primer y último enlace.
  const botonEnlaces = document.getElementById('botonEnlaces');
  botonEnlaces?.addEventListener('click', () => {
    const enlaces = document.querySelectorAll('a');

    if (enlaces.length === 0) {
      alert('Número total de enlaces: 0\nNo hay enlaces en la página.');
      return;
    }

    const primerEnlace = enlaces[0].href;
    const ultimoEnlace = enlaces[enlaces.length - 1].href;

    alert(
      `Número total de enlaces: ${enlaces.length}\n` +
      `Primer enlace: ${primerEnlace}\n` +
      `Último enlace: ${ultimoEnlace}`
    );
  });

  // Tarea extra: seleccionar y manipular los elementos.
  const contenedor = document.getElementById('contenedor');
  const elementosSegundo = document.querySelectorAll('.segundo');
  const terceroEnListaOrdenada = document.querySelector('ol .tercero');
  const ul = document.querySelector('#contenedor ul');

  console.log({ contenedor, elementosSegundo, terceroEnListaOrdenada });

  if (contenedor) contenedor.textContent = '¡Hola!';

  const footer = document.querySelector('.footer');
  footer?.classList.add('principal');
  footer?.classList.remove('principal');

  const nuevoElemento = document.createElement('li');
  nuevoElemento.textContent = 'cuatro';
  ul?.append(nuevoElemento);
});