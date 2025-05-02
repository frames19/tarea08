import React from 'react';

const Inicio = () => {
  const fondoImages = [
    '/images/hambur1.jpg', '/images/hambur6.jpg', '/images/hambur5.jpg', '/images/hambur7.jpg',
  ];

  const combos = [
    { img: '/images/combo1.jpg', nombre: 'Combo Clásico', precio: '$12.99' },
    { img: '/images/combo2.jpg', nombre: 'Combo Doble', precio: '$15.99' },
    { img: '/images/combo3.jpg', nombre: 'Combo BBQ', precio: '$14.99' },
    { img: '/images/combo4.jpg', nombre: 'Combo Mexicano', precio: '$16.49' },
  ];

  const hamburguesas = [
    { img: '/images/hambur1.jpg', nombre: 'Hamburguesa Clásica', precio: '$8.99' },
    { img: '/images/hambur2.jpg', nombre: 'Hamburguesa Doble', precio: '$10.49' },
    { img: '/images/hambur3.jpg', nombre: 'Hamburguesa BBQ', precio: '$9.99' },
    { img: '/images/hambur4.jpg', nombre: 'Hamburguesa Mex', precio: '$10.99' },
  ];

  const complementos = [
    { img: '/images/comple1.jpg', nombre: 'Papas Fritas', precio: '$3.99' },
    { img: '/images/comple2.jpg', nombre: 'Aros de Cebolla', precio: '$4.49' },
    { img: '/images/comple3.jpg', nombre: 'Nuggets', precio: '$5.00' },
    { img: '/images/comple4.jpg', nombre: 'Batatas Fritas', precio: '$4.50' },
  ];

  const breakpoints = {
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  };

  return (
    <div>
      {/* Aquí se puede agregar el componente de carrusel (Swiper u otro) */}
      <div className="combos">
        {combos.map((combo, index) => (
          <div key={index}>
            <img src={combo.img} alt={combo.nombre} />
            <h3>{combo.nombre}</h3>
            <p>{combo.precio}</p>
          </div>
        ))}
      </div>

      <div className="hamburguesas">
        {hamburguesas.map((hamburguesa, index) => (
          <div key={index}>
            <img src={hamburguesa.img} alt={hamburguesa.nombre} />
            <h3>{hamburguesa.nombre}</h3>
            <p>{hamburguesa.precio}</p>
          </div>
        ))}
      </div>

      <div className="complementos">
        {complementos.map((complemento, index) => (
          <div key={index}>
            <img src={complemento.img} alt={complemento.nombre} />
            <h3>{complemento.nombre}</h3>
            <p>{complemento.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inicio;

  