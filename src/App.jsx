import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Star, Wifi, Coffee, Shirt, Check, Quote, ArrowUp } from 'lucide-react';

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <a href="#rooms" className="text-gray-800 hover:text-green-600 transition-colors font-medium">Номера</a>
              <a href="#amenities" className="text-gray-800 hover:text-green-600 transition-colors font-medium">Услуги</a>
            </div>
            <div className="text-2xl font-light tracking-wide text-green-700">Green Hotel</div>
            <div className="flex items-center space-x-8">
              <a href="#reviews" className="text-gray-800 hover:text-green-600 transition-colors font-medium">Отзывы</a>
              <a href="#contacts" className="text-gray-800 hover:text-green-600 transition-colors font-medium">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex">
        <div className="w-[55%] bg-green-800 flex items-center justify-center">
          <div className="text-center text-white px-12">
            <div className="text-sm tracking-widest mb-6 font-light">ТАРАЗ · КАЗАХСТАН</div>
            <h1 className="text-6xl font-light leading-tight mb-6">
              GREEN<br/>HOTEL
            </h1>
            <p className="text-xl italic mb-8 text-green-100">
              Комфорт и уют в центре города
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-3 hover:bg-green-700 transition-colors font-medium">
                Забронировать
              </button>
              <button className="border border-white text-white px-8 py-3 hover:bg-white hover:text-green-800 transition-colors font-medium">
                Узнать больше
              </button>
            </div>
          </div>
        </div>
        <div className="w-[45%] relative">
          <img 
            src="https://picsum.photos/seed/greenhotel/800/1200" 
            alt="Green Hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="font-medium">4.8</span>
              <span className="text-gray-600">★ 89 отзывов</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-green-800 text-white py-3">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>4.8 рейтинг</span>
            </div>
            <div className="w-px h-4 bg-white/30"></div>
            <span>89 отзывов на 2ГИС</span>
            <div className="w-px h-4 bg-white/30"></div>
            <span>Работаем круглосуточно</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light mb-6">Об отеле</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Green Hotel — это уютный отель в центре Тараза. Мы создали пространство, 
                где сочетаются комфорт и доступные цены.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Наша философия — чистота, тишина и внимание к каждому гостю. 
                Идеальное место для отдыха и деловых поездок.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span className="text-sm">1-й переулок Дулати, 39а</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-green-600" />
                  <span className="text-sm">+7 726 2XX-XX-XX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-green-600" />
                  <span className="text-sm">info@greenhotel.kz</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/greenhotel-about/600/400" 
                alt="About Green Hotel"
                className="rounded-lg w-full"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-600 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Line */}
      <div className="flex justify-center py-12">
        <div className="w-px h-16 bg-green-600"></div>
      </div>

      {/* Rooms Section */}
      <section id="rooms" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-16">Номера</h2>
          
          <div className="space-y-1">
            {/* Room 1 - Even */}
            <div className="group bg-white rounded-lg overflow-hidden flex transition-all hover:shadow-lg">
              <div className="w-[40%] relative">
                <img 
                  src="https://picsum.photos/seed/room-standard/400/300" 
                  alt="Standard Room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[60%] p-8 flex flex-col justify-center">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                <h3 className="text-2xl font-light mb-2">Standard</h3>
                <p className="text-gray-600 mb-4">Уютный номер для комфортного отдыха</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-light">8 000 ₸</span>
                  <button className="bg-green-800 text-white px-6 py-2 hover:bg-green-700 transition-colors text-sm">
                    Забронировать
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-200"></div>

            {/* Room 2 - Odd */}
            <div className="group bg-white rounded-lg overflow-hidden flex transition-all hover:shadow-lg">
              <div className="w-[60%] p-8 flex flex-col justify-center order-2">
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-green-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                <h3 className="text-2xl font-light mb-2">Comfort</h3>
                <p className="text-gray-600 mb-4">Просторный номер с улучшенным дизайном</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-light">12 000 ₸</span>
                  <button className="bg-green-800 text-white px-6 py-2 hover:bg-green-700 transition-colors text-sm">
                    Забронировать
                  </button>
                </div>
              </div>
              <div className="w-[40%] relative order-1">
                <img 
                  src="https://picsum.photos/seed/room-comfort/400/300" 
                  alt="Comfort Room"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-full h-px bg-gray-200"></div>

            {/* Room 3 - Even */}
            <div className="group bg-white rounded-lg overflow-hidden flex transition-all hover:shadow-lg">
              <div className="w-[40%] relative">
                <img 
                  src="https://picsum.photos/seed/room-suite/400/300" 
                  alt="Suite Room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[60%] p-8 flex flex-col justify-center">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                <h3 className="text-2xl font-light mb-2">Suite</h3>
                <p className="text-gray-600 mb-4">Роскошный номер для особого комфорта</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-light">18 000 ₸</span>
                  <button className="bg-green-800 text-white px-6 py-2 hover:bg-green-700 transition-colors text-sm">
                    Забронировать
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-16">Услуги</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-3xl mx-auto">
            <div className="group flex items-center space-x-4 p-4 hover:bg-green-50 transition-colors border-b border-gray-100">
              <Coffee className="w-4 h-4 text-green-600" />
              <span className="text-gray-800">Завтрак</span>
            </div>
            <div className="group flex items-center space-x-4 p-4 hover:bg-green-50 transition-colors border-b border-gray-100">
              <Wifi className="w-4 h-4 text-green-600" />
              <span className="text-gray-800">Бесплатный Wi-Fi</span>
            </div>
            <div className="group flex items-center space-x-4 p-4 hover:bg-green-50 transition-colors border-b border-gray-100">
              <Shirt className="w-4 h-4 text-green-600" />
              <span className="text-gray-800">Прачечная</span>
            </div>
            <div className="group flex items-center space-x-4 p-4 hover:bg-green-50 transition-colors border-b border-gray-100">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-800">24/7 регистратура</span>
            </div>
            <div className="group flex items-center space-x-4 p-4 hover:bg-green-50 transition-colors border-b border-gray-100">
              <Phone className="w-4 h-4 text-green-600" />
              <span className="text-gray-800">Трансфер</span>
            </div>
            <div className="group flex items-center space-x-4 p-4 hover:bg-green-50 transition-colors border-b border-gray-100">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-800">Парковка</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-16">Отзывы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Quote className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <p className="text-gray-600 mb-4 italic">
                "Отличный отель в центре города. Чисто, тихо, персонал очень внимательный. 
                Обязательно вернусь снова."
              </p>
              <div className="font-medium">Айгуль К.</div>
              <div className="text-sm text-gray-500">Алматы</div>
            </div>
            
            <div className="text-center">
              <Quote className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <p className="text-gray-600 mb-4 italic">
                "Проживание превзошло все ожидания. Дизайн уютный, всё чисто. 
                Завтраки прекрасные."
              </p>
              <div className="font-medium">Дмитрий П.</div>
              <div className="text-sm text-gray-500">Астана</div>
            </div>
            
            <div className="text-center">
              <Quote className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <p className="text-gray-600 mb-4 italic">
                "Идеальное место для деловой поездки. Всё продумано до мелочей. 
                Рекомендую коллегам."
              </p>
              <div className="font-medium">Мария С.</div>
              <div className="text-sm text-gray-500">Шымкент</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-green-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Готовы посетить Green Hotel?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Забронируйте номер прямо сейчас и насладитесь комфортом в центре Тараза
          </p>
          <button className="bg-green-600 text-white px-10 py-4 hover:bg-green-700 transition-colors font-medium text-lg">
            Забронировать сейчас
          </button>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-16">Контакты</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-light mb-4">Адрес</h3>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="text-gray-800">Казахстан, г. Тараз</p>
                      <p className="text-gray-800">1-й переулок Дулати, 39а</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-light mb-4">Телефон</h3>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span className="text-gray-800">+7 726 2XX-XX-XX</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-light mb-4">Email</h3>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-600" />
                    <span className="text-gray-800">info@greenhotel.kz</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500">Карта Тараза</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-light tracking-wide mb-4">GREEN HOTEL</div>
            <p className="text-green-200 text-sm mb-4">
              © 2024 Green Hotel. Все права защищены.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <button className="hover:text-green-400 transition-colors">Политика конфиденциальности</button>
              <button className="hover:text-green-400 transition-colors">Условия бронирования</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all z-40"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default App;
