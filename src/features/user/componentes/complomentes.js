export default Complementos;
const Complementos = () => {
  const complementos = [
    { img: '/comple1.jpg', nombre: 'Papas Fritas', precio: '$3.99' },
    { img: '/comple2.jpg', nombre: 'Aros de Cebolla', precio: '$4.49' },
    { img: '/comple3.jpg', nombre: 'Nuggets', precio: '$5.00' },
    { img: '/comple4.jpg', nombre: 'Batatas Fritas', precio: '$4.50' },
    { img: '/comple5.jpg', nombre: 'Ensalada', precio: '$4.00' },
    { img: '/comple6.jpg', nombre: 'Mozzarella Sticks', precio: '$5.50' },
    { img: '/comple7.jpg', nombre: 'Patacones', precio: '$3.50' },
    { img: '/comple8.jpg', nombre: 'Guacamole', precio: '$4.99' },
    { img: '/comple9.jpg', nombre: 'Papas Gajo', precio: '$4.20' },
    { img: '/comple10.jpg', nombre: 'Chili Fries', precio: '$5.99' },
    { img: '/comple11.jpg', nombre: 'Tenders', precio: '$5.49' },
    { img: '/comple12.jpg', nombre: 'Dip Especial', precio: '$3.00' },
  ];

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Nuestros Complementos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {complementos.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={item.img} alt={item.nombre} className="w-full h-40 object-cover rounded-md shadow-md mb-2" />
            <h4 className="font-semibold">{item.nombre}</h4>
            <p className="text-green-400">{item.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};