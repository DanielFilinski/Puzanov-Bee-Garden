import React from 'react';
import './App.css';

const products = [
  {
    name: 'Мёд',
    price: '15 р/кг',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    desc: 'Натуральный цветочный мёд, собранный в экологически чистом районе.'
  },
  {
    name: 'Пыльца',
    price: '50 р/кг',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    desc: 'Пчелиная пыльца — суперфуд для здоровья и энергии.'
  },
  {
    name: 'Пчелиные матки',
    price: '30 р/шт',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    desc: 'Племенные пчелиные матки для вашей пасеки.'
  }
];

function App() {
  return (
    <div className="landing-root">
      <header className="hero">
        <h1>Пасека Пузанова</h1>
        <p>Натуральный мёд, пыльца и пчелиные матки напрямую от пчеловода</p>
      </header>
      <section className="products">
        <h2>Наши продукты</h2>
        <div className="product-list">
          {products.map((p) => (
            <div className="product-card" key={p.name}>
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p className="desc">{p.desc}</p>
              <div className="price">{p.price}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="contacts">
        <h2>Контакты</h2>
        <div className="contact-list">
          <div>Телефон: <a href="tel:+79991234567">+375 (29) 123-45-67</a></div>
          <div>WhatsApp: <a href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer">Написать</a></div>
          <div>Email: <a href="mailto:bee@puzanov.ru">bee.garden@puzanov.ru</a></div>
        </div>
      </section>
      <footer className="footer">© Пасека Пузанова, 2024</footer>
    </div>
  );
}

export default App; 