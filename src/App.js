import React, { useEffect } from 'react';
import './App.css';

const products = [
  {
    name: 'Мёд',
    price: '15 р/кг',
    img: 'https://kopyllh.by/wp-content/uploads/2024/07/a492f467b51601c77f2f9e8016d76e37.jpg',
    desc: 'Натуральный цветочный мёд, собранный в экологически чистом районе.'
  },
  {
    name: 'Пыльца',
    price: '50 р/кг',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSslobxFG8C48aK9QHvbT8iv1ZyS6twrf5cSQ&s',
    desc: 'Пчелиная пыльца — суперфуд для здоровья и энергии.'
  },
  {
    name: 'Пчелиные матки',
    price: '30 р/шт',
    img: 'https://image.jimcdn.com/app/cms/image/transf/none/path/s425efbacbd31cd1a/backgroundarea/id33163245de25423/version/1457428340/image.jpg',
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

function BenefitItem({ icon, label, index }) {
  return (
    <div
      className="benefit-item"
      data-animate
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <span className="benefit-icon" role="img" aria-label="icon">{icon}</span>
      <p>{label}</p>
    </div>
  );
}

// SVG-иконки для benefit-item
const EcoIcon = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#ffe259"/>
    <path d="M7 17c2-2 6-6 10-10" stroke="#ffa751" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const FamilyIcon = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="10" width="16" height="10" rx="5" fill="#ffe259"/>
    <circle cx="8" cy="8" r="3" fill="#ffa751"/>
    <circle cx="16" cy="8" r="3" fill="#ffa751"/>
  </svg>
);
const StarIcon = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <polygon points="12,2 15,9 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,9" fill="#ffe259" stroke="#ffa751" strokeWidth="1.5"/>
  </svg>
);

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
        <p>Пасека Пузанова — семейное дело с 1985 года. За десятилетия мы накопили уникальный опыт и знания, которые передаются из поколения в поколение. Мы не просто производим мёд — мы живём этим делом, следим за здоровьем каждой пчелиной семьи и строго контролируем качество продукции. Для нас важно сохранять традиции натурального пчеловодства, не использовать химикаты и заботиться о природе. Наши продукты — это результат любви к пчёлам, честного труда и уважения к покупателям.</p>
      </section>
      <hr className="section-divider" />
      <section className="benefits" data-animate>
        <h2>Почему мы?</h2>
        <div className="benefit-list">
          {[
            { icon: EcoIcon, label: 'Экологически чисто' },
            { icon: FamilyIcon, label: 'Семейная пасека' },
            { icon: StarIcon, label: 'Гарантия качества' },
          ].map((b, i) => (
            <BenefitItem key={b.label} icon={b.icon} label={b.label} index={i} />
          ))}
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