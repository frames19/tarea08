
const Combos = () => {
    const combos = [
      { img: '/combo1.jpg', nombre: 'Combo Clásico', precio: '$12.99' },
      { img: '/combo2.jpg', nombre: 'Combo Doble', precio: '$15.99' },
      { img: '/combo3.jpg', nombre: 'Combo BBQ', precio: '$14.99' },
      { img: '/combo4.jpg', nombre: 'Combo Mexicano', precio: '$16.49' },
      { img: '/combo5.jpg', nombre: 'Combo Especial', precio: '$18.00' },
      { img: '/combo6.jpg', nombre: 'Combo Picante', precio: '$14.00' },
      { img: '/combo7.jpg', nombre: 'Combo Cheese', precio: '$13.50' },
      { img: '/combo8.jpg', nombre: 'Combo Familiar', precio: '$22.00' },
      { img: '/combo9.jpg', nombre: 'Combo Vegan', precio: '$15.00' },
      { img: '/combo10.jpg', nombre: 'Combo Deluxe', precio: '$19.99' },
      { img: '/combo11.jpg', nombre: 'Combo Light', precio: '$12.00' },
      { img: '/combo12.jpg', nombre: 'Combo Monster', precio: '$21.99' },
    ];
  
    return (
      <div className="p-6 bg-black min-h-screen text-white">
        <h2 className="text-4xl font-bold text-center mb-10">Nuestros Combos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {combos.map((item, index) => (
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