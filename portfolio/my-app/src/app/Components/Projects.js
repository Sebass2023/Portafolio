import React from 'react';
//import carrito from '../assets/carrito.png';
//import pomodoro from '../assets/pomodoro.png';
//import tareas from '../assets/to-do.png';

const Projects = () => {

  //console.log("Ruta de carrito:", require('../assets/to-do.png').default);
  return (
    <section className="text-gray-600 body-font " id='projects'>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
      <div>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 
          text-gray-900">Proyectos</h1>
        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
      </div>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Estos son algunos de los proyectos realizados por mi.</p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src="/_next/static/media/carrito.01e3d644.png"/>

        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Gestor de productos y carrito de compras.</h2>
        <p className="text-base leading-relaxed mt-2">Este proyecto permite al admin, crear productos y modificarlos, eliminar y modificar usuarios, verificar pedidos y solicitarlos en un carrito, hecho en PHP. </p>
        <a className="text-indigo-500 inline-flex items-center mt-3" href='https://github.com/Sebass2023/gestor-de-productos-y-carrito-de-compras.git'>Link de github
         
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/_next/static/media/pomodoro.0e05d3a2.png"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Pomodoro</h2>
        <p className="text-base leading-relaxed mt-2">Este proyecto le permite acomodar mejor su tiempo de trabajo o estudio, cuenta con descansos y los ciclos que desee.</p>
        <a className="text-indigo-500 inline-flex items-center mt-3" href='https://github.com/Sebass2023/pomodoro.git'>Link de github
      
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/_next/static/media/to-do.ac208e73.png"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">To-Do list</h2>
        <p className="text-base leading-relaxed mt-2">Este proyecto le permite anotar las tareas que tenga pendientes y quitarlas cuando las haya finalizado.</p>
        <a className="text-indigo-500 inline-flex items-center mt-3" href='https://github.com/Sebass2023/To-Do-list.git'>Link de github.

        </a>
      </div>
    </div>
  </div>
</section>
  );
};

export default Projects;
