//Llamamos a las dependencias gracias a browserify
var React = require('react');
var ReactDOM = require('react-dom');

//Renderizamos
ReactDOM.render(
  //La etiqueta que vamos a enviar al html
  <h1 class="text-center">Caminando con Reactjs!</h1>,

  //Con document.getElementById  lo enviamos a nuestro #content
  document.getElementById('conten')
);

//JSX
const Contenido = React.createClass({
  //Funcion render
  render : ()=>{
    return(
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
  )}
})

ReactDOM.render(
  //La etiqueta que vamos a enviar al html
  <div>
    <Contenido />
  </div>,
  //Con document.getElementById  lo enviamos a nuestro #contenPool
  document.getElementById('contenPool')
);
