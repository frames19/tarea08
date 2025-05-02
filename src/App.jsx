import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
//import { BrowserRouter } from 'react-router-dom';
//import Complementos from "./features/user/componente/complementos.jsx";
//import combos from "./features/user/combos/combos.jsx"

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const fondoImages = [
    '/hambur1.jpg', '/hambur6.jpg', '/hambur5.jpg', '/hambur7.jpg',
  ];

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

  const hamburguesas = [
    { img: '/hambur1.jpg', nombre: 'Hamburguesa Clásica', precio: '$8.99' },
    { img: '/hambur1.jpg', nombre: 'Hamburguesa Clásica', precio: '$8.99' },
    { img: '/hambur2.jpg', nombre: 'Hamburguesa Doble', precio: '$10.49' },
    { img: '/hambur3.jpg', nombre: 'Hamburguesa BBQ', precio: '$9.99' },
    { img: '/hambur4.jpg', nombre: 'Hamburguesa Mex', precio: '$10.99' },
    { img: '/hambur5.jpg', nombre: 'Hamburguesa Vegana', precio: '$9.50' },
    { img: '/hambur6.jpg', nombre: 'Hamburguesa Cheese', precio: '$9.00' },
    { img: '/hambur7.jpg', nombre: 'Hamburguesa Premium', precio: '$11.99' },
    { img: '/hambur8.jpg', nombre: 'Hamburguesa Kids', precio: '$7.00' },
    { img: '/hambur9.jpg', nombre: 'Hamburguesa Bacon', precio: '$10.00' },
    { img: '/hambur10.jpg', nombre: 'Hamburguesa Especial', precio: '$11.50' },
    { img: '/hambur11.jpg', nombre: 'Hamburguesa Light', precio: '$8.00' },
    { img: '/hambur12.jpg', nombre: 'Hamburguesa Monster', precio: '$12.99' },
  ];

  const complementos = [
    { img: '/comple1.jpg', nombre: 'Papas Fritas', precio: '$3.99' },
    { img: '/comple2.jpg', nombre: 'Aros de Cebolla', precio: '$4.49' },
    { img: '/gase13.jpg', nombre: 'Lata Coca cola', precio: '$4.50' },
    { img: '/comple3.jpg', nombre: 'Nuggets', precio: '$5.00' },
    { img: '/comple4.jpg', nombre: 'Batatas Fritas', precio: '$4.50' },
    { img: '/gase6.jpg', nombre: 'Inka cola Grande', precio: '$13' },
    { img: '/comple5.jpg', nombre: 'Ensalada', precio: '$4.00' },
    { img: '/comple6.jpg', nombre: 'Mozzarella Sticks', precio: '$5.50' },
    { img: '/gase3.jpg', nombre: 'Promo gaseosa', precio: '$10' },
    { img: '/comple7.jpg', nombre: 'Patacones', precio: '$3.50' },
    { img: '/comple8.jpg', nombre: 'Guacamole', precio: '$4.99' },
    { img: '/gase12.jpg', nombre: 'Sevena Grande', precio: '$15' },
    { img: '/comple9.jpg', nombre: 'Papas Gajo', precio: '$4.20' },
    { img: '/comple10.jpg', nombre: 'Chili Fries', precio: '$5.99' },
    { img: '/comple11.jpg', nombre: 'Tenders', precio: '$5.49' },
    { img: '/comple12.jpg', nombre: 'Dip Especial', precio: '$3.00' },
    { img: '/gase1.jpg', nombre: 'Coca cola', precio: '$15.00' },
  ];

  const breakpoints = {
    320: { slidesPerView: 2 },
    640: { slidesPerView: 4},
    1024: { slidesPerView:6 },
  };

  // Estado para animación de entrada
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Efecto para activar animaciones después de cargar la página
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Fondo menú oscuro si está abierto */}
      {menuOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMenuOpen(false)} />}

      {/* Carrusel de fondo */}
      <div className="relative w-full h-screen">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full"
        >
          {fondoImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Imagen de fondo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 z-10 flex flex-col">
          <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-black via-gray-900 to-black sticky top-0 z-50 border-b border-green-500/30 shadow-lg shadow-green-500/10">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-600">
              BURGERPLACE
            </h1>
            <ul className="flex gap-6 text-white">
              <li className="hover:text-green-400 cursor-pointer transition-all hover:scale-110">Inicio</li>
              <li className="hover:text-green-400 cursor-pointer transition-all hover:scale-110">Hamburguesas</li>
              <li className="hover:text-green-400 cursor-pointer transition-all hover:scale-110">Combos</li>
              <li className="hover:text-green-400 cursor-pointer transition-all hover:scale-110">Complementos</li>
              <li className="relative z-50">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 transition shadow-lg shadow-green-500/20"
                >
                  <span className="text-2xl text-white">☰</span>
                </button>
                {menuOpen && (
                  <div className="absolute right-0 mt-2 bg-gray-900/95 text-white rounded shadow-lg shadow-green-500/20 py-2 w-40 z-50 backdrop-blur-sm border border-green-500/30">
                    <button className="block w-full py-2 hover:bg-green-500/20 transition">Identifícate</button>
                    <button className="block w-full py-2 hover:bg-green-500/20 transition">Regístrate</button>
                    <button className="block w-full py-2 hover:bg-green-500/20 transition">Pedidos</button>
                  </div>
                )}
              </li>
            </ul>
          </nav>

          <section className={`flex-grow flex flex-col justify-center items-center text-center px-4 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-4 text-green-400">You will be amazed</h2>
            <p className="text-6xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-green-300 to-green-500">FRESH, BOLD & TASTY.</p>
            <p className="text-xl mb-8">and yes, we do vegan too.</p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-green-500/20 transition-all hover:scale-105">
                ORDENAR AHORA
              </button>
              <button className="border-2 border-green-500 text-green-400 font-bold py-3 px-6 rounded-full hover:bg-green-500/10 transition-all hover:scale-105">
                VER MENÚ
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* Secciones */}
      <section className="px-6 py-20 space-y-24 bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Combos */}
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-10">
            <div className="h-1 w-16 bg-green-500 rounded"></div>
            <h3 className="text-4xl font-bold mx-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-green-400">Nuestros Combos</h3>
            <div className="h-1 w-16 bg-green-500 rounded"></div>
          </div>
          <div className="relative">
            <Swiper
              modules={[Autoplay, Navigation, EffectCoverflow]}
              effect="coverflow"
              coverflowEffect={{
                rotate: 5,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
              }}
              breakpoints={breakpoints}
              spaceBetween={15}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              className="px-10"
            >
              {combos.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-4 rounded-xl shadow-lg hover:shadow-green-500/20 transition-all duration-300 border border-green-500/10 group">
                    <div className="overflow-hidden rounded-lg relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 z-10">
                        <span className="text-sm text-white font-medium bg-green-500/80 px-3 py-1 rounded-full backdrop-blur-sm">
                          Combo Popular
                        </span>
                      </div>
                      <img 
                        src={item.img} 
                        alt={`Imagen de ${item.nombre}`} 
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <h4 className="font-bold text-xl mb-1 group-hover:text-green-400 transition-colors">{item.nombre}</h4>
                      <p className="text-green-400 text-xl font-bold">{item.precio}</p>
                      <div className="flex items-center justify-center mt-3 gap-2">
                        <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2 px-4 rounded-md transition shadow-md hover:shadow-green-500/30">
                          Agregar
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-md transition">
                          ❤️
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center absolute top-1/2 left-0 z-10 transform -translate-y-1/2 opacity-80 hover:opacity-100 transition-opacity shadow-lg shadow-green-500/30 text-lg">
              ‹
            </div>
            <div className="swiper-button-next bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center absolute top-1/2 right-0 z-10 transform -translate-y-1/2 opacity-80 hover:opacity-100 transition-opacity shadow-lg shadow-green-500/30 text-lg">
              ›
            </div>
          </div>
        </div>

        {/* Hamburguesas */}
        <div className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-10">
            <div className="h-1 w-16 bg-green-500 rounded"></div>
            <h3 className="text-4xl font-bold mx-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-green-400">Hamburguesas</h3>
            <div className="h-1 w-16 bg-green-500 rounded"></div>
          </div>
          <div className="relative">
            <Swiper
              modules={[Autoplay, Navigation, EffectCoverflow]}
              effect="coverflow"
              coverflowEffect={{
                rotate: 5,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
              }}
              breakpoints={breakpoints}
              spaceBetween={15}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              navigation={{
                nextEl: '.hamburguesas-next',
                prevEl: '.hamburguesas-prev',
              }}
              className="px-10"
            >
              {hamburguesas.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-4 rounded-xl shadow-lg hover:shadow-green-500/20 transition-all duration-300 border border-green-500/10 group">
                    <div className="overflow-hidden rounded-lg relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 z-10">
                        <span className="text-sm text-white font-medium bg-green-500/80 px-3 py-1 rounded-full backdrop-blur-sm">
                          Favorita
                        </span>
                      </div>
                      <img 
                        src={item.img} 
                        alt={`Imagen de ${item.nombre}`} 
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <h4 className="font-bold text-xl mb-1 group-hover:text-green-400 transition-colors">{item.nombre}</h4>
                      <p className="text-green-400 text-xl font-bold">{item.precio}</p>
                      <div className="flex items-center justify-center mt-3 gap-2">
                        <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2 px-4 rounded-md transition shadow-md hover:shadow-green-500/30">
                          Agregar
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-md transition">
                          ❤️
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="hamburguesas-prev bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center absolute top-1/2 left-0 z-10 transform -translate-y-1/2 opacity-80 hover:opacity-100 transition-opacity shadow-lg shadow-green-500/30 text-lg">
              ‹
            </div>
            <div className="hamburguesas-next bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center absolute top-1/2 right-0 z-10 transform -translate-y-1/2 opacity-80 hover:opacity-100 transition-opacity shadow-lg shadow-green-500/30 text-lg">
              ›
            </div>
          </div>
        </div>

        {/* Complementos */}
        <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-10">
            <div className="h-1 w-16 bg-green-500 rounded"></div>
            <h3 className="text-4xl font-bold mx-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-green-400">Complementos</h3>
            <div className="h-1 w-16 bg-green-500 rounded"></div>
          </div>
          <div className="relative">
            <Swiper
              modules={[Autoplay, Navigation, EffectCoverflow]}
              effect="coverflow"
              coverflowEffect={{
                rotate: 5,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
              }}
              breakpoints={breakpoints}
              spaceBetween={15}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              navigation={{
                nextEl: '.complementos-next',
                prevEl: '.complementos-prev',
              }}
              className="px-10"
            >
              {complementos.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-4 rounded-xl shadow-lg hover:shadow-green-500/20 transition-all duration-300 border border-green-500/10 group">
                    <div className="overflow-hidden rounded-lg relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 z-10">
                        <span className="text-sm text-white font-medium bg-green-500/80 px-3 py-1 rounded-full backdrop-blur-sm">
                          Complemento
                        </span>
                      </div>
                      <img 
                        src={item.img} 
                        alt={`Imagen de ${item.nombre}`} 
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <h4 className="font-bold text-xl mb-1 group-hover:text-green-400 transition-colors">{item.nombre}</h4>
                      <p className="text-green-400 text-xl font-bold">{item.precio}</p>
                      <div className="flex items-center justify-center mt-3 gap-2">
                        <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2 px-4 rounded-md transition shadow-md hover:shadow-green-500/30">
                          Agregar
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-md transition">
                          ❤️
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="complementos-prev bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center absolute top-1/2 left-0 z-10 transform -translate-y-1/2 opacity-80 hover:opacity-100 transition-opacity shadow-lg shadow-green-500/30 text-lg">
              ‹
            </div>
            <div className="complementos-next bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center absolute top-1/2 right-0 z-10 transform -translate-y-1/2 opacity-80 hover:opacity-100 transition-opacity shadow-lg shadow-green-500/30 text-lg">
              ›
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-green-400">
            ¿Tienes hambre?
          </h3>
          <p className="text-xl mb-8 text-gray-300">
            Ordena ahora y recibe tu pedido en menos de 30 minutos
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-green-500/20 transition-all hover:scale-105">
              ORDENAR AHORA
            </button>
            <button className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-gray-500/20 transition-all hover:scale-105 border border-green-500/30">
              VER LOCALES
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-8 bg-black text-center border-t border-green-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-between mb-8">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-2xl font-bold text-green-400 mb-4">BURGERPLACE</h4>
              <p className="text-gray-400">La mejor hamburguesa de la ciudad, ahora en tu mesa.</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h5 className="text-lg font-semibold mb-4">Menú</h5>
              <ul className="space-y-2">
                <li className="hover:text-green-400 cursor-pointer transition">Hamburguesas</li>
                <li className="hover:text-green-400 cursor-pointer transition">Combos</li>
                <li className="hover:text-green-400 cursor-pointer transition">Complementos</li>
                <li className="hover:text-green-400 cursor-pointer transition">Bebidas</li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h5 className="text-lg font-semibold mb-4">Nosotros</h5>
              <ul className="space-y-2">
                <li className="hover:text-green-400 cursor-pointer transition">Quiénes somos</li>
                <li className="hover:text-green-400 cursor-pointer transition">Locales</li>
                <li className="hover:text-green-400 cursor-pointer transition">Franquicias</li>
                <li className="hover:text-green-400 cursor-pointer transition">Trabaja con nosotros</li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h5 className="text-lg font-semibold mb-4">Síguenos</h5>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-2xl hover:text-green-400 transition">📱</a>
                <a href="#" className="text-2xl hover:text-green-400 transition">📘</a>
                <a href="#" className="text-2xl hover:text-green-400 transition">📸</a>
                <a href="#" className="text-2xl hover:text-green-400 transition">🐦</a>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-gray-800 text-gray-400">
            <p>© 2025 BurgerPlace. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;