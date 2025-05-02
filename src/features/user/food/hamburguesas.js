import React from 'react';

// Componente de Hamburguesas simple y sin errores
const Hamburguesas = () => {
  // Lista de hamburguesas (ajusta según tus necesidades)
  const hamburguesas = [
    { id: 1, nombre: 'Hamburguesa Clásica', precio: '$5.99', descripcion: 'Carne de res, lechuga, tomate, cebolla y queso' },
    { id: 2, nombre: 'Hamburguesa Doble', precio: '$7.99', descripcion: 'Doble carne, doble queso, lechuga, tomate y cebolla' },
    { id: 3, nombre: 'Hamburguesa BBQ', precio: '$6.99', descripcion: 'Carne de res, salsa barbacoa, cebolla caramelizada y queso cheddar' },
    { id: 4, nombre: 'Hamburguesa Vegetariana', precio: '$5.99', descripcion: 'Hamburguesa de garbanzos, lechuga, tomate y aguacate' },
  ];

  return (
    <div className="hamburguesas-container">
      <h2>Nuestras Hamburguesas</h2>
      <div className="hamburguesas-lista">
        {hamburguesas.map((hamburguesa) => (
          <div className="hamburguesa-card" key={hamburguesa.id}>
            <h3>{hamburguesa.nombre}</h3>
            <p className="precio">{hamburguesa.precio}</p>
            <p className="descripcion">{hamburguesa.descripcion}</p>
            <button className="btn-agregar">Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Asegúrate de tener esta exportación por defecto
export default Hamburguesas;