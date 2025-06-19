import React, { useEffect } from 'react';
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

function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]');
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function App() {
  useScrollAnimation();
  return (
    <div className="landing-root">
      <header className="hero">
        <div className="hero-flex">
          <h1>Пасека Пузанова</h1>
          <div className="hero-phone">
            {/* <div className="hero-phone-label">Телефон</div> */}
            <a href="tel:+79991234567">+375 (29) 123-45-67</a>
          </div>
        </div>
        <p>Натуральный мёд, пыльца и пчелиные матки напрямую от пчеловода</p>
      </header>
      <section className="about" data-animate>
        <h2>О нас</h2>
        <p>Пасека Пузанова — семейное дело с 1985 года. Мы любим пчёл и заботимся о качестве каждого продукта.</p>
      </section>
      <hr className="section-divider" />
      <section className="benefits" data-animate>
        <h2>Почему мы?</h2>
        <div className="benefit-list">
          <div className="benefit-item">
            <span role="img" aria-label="eco">🌱</span>
            <p>Экологически чисто</p>
          </div>
          <div className="benefit-item">
            <span role="img" aria-label="family">👨‍👩‍👧‍👦</span>
            <p>Семейная пасека</p>
          </div>
          <div className="benefit-item">
            <span role="img" aria-label="star">⭐</span>
            <p>Гарантия качества</p>
          </div>
        </div>
      </section>
      <hr className="section-divider" />
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
      <hr className="section-divider" />
      <section className="reviews" data-animate>
        <h2>Отзывы</h2>
        <div className="review-list">
          <div className="review-item">
            <p>"Лучший мёд, что я пробовал!"</p>
            <span>— Иван, Минск</span>
          </div>
          <div className="review-item">
            <p>"Пыльца помогла восстановить силы после болезни."</p>
            <span>— Ольга, Гомель</span>
          </div>
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