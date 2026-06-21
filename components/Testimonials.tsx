'use client';

import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Елена Петрова',
    role: 'Мама ученицы 9 класса',
    text: 'Ольга Юрьевна — настоящий профессионал! Дочь занималась полгода перед ОГЭ. Из тройки выросли до твёрдой четвёрки, а на экзамене получили 23 балла. Самое главное — ребёнок перестал бояться математики и даже стал интересоваться предметом.',
    rating: 5,
  },
  {
    name: 'Михаил',
    role: 'Ученик 9 класса',
    text: 'Занимался с Ольгой Юрьевной весь учебный год. Она объясняет так, что действительно понимаешь, а не просто зубришь формулы. На пробниках было 12-14 баллов, а на реальном ОГЭ сдал на 24! Очень благодарен за терпение и поддержку.',
    rating: 5,
  },
  {
    name: 'Ирина Васильева',
    role: 'Мама ученика 9 класса',
    text: 'Обратились к Ольге Юрьевне за два месяца до экзамена в критической ситуации — сын совсем не понимал математику. Педагог смогла быстро найти все пробелы и подтянуть знания. Результат превзошёл наши ожидания — 21 балл! Рекомендую всем родителям.',
    rating: 5,
  },
  {
    name: 'Дарья',
    role: 'Ученица 9 класса',
    text: 'Готовилась к ОГЭ онлайн, очень боялась, что дистанционный формат не подойдёт. Но Ольга Юрьевна так всё организовала, что занятия были даже удобнее, чем очно. Всегда отвечала на вопросы в мессенджере, давала дополнительные материалы. Сдала на 25 баллов!',
    rating: 5,
  },
  {
    name: 'Андрей Смирнов',
    role: 'Папа ученика 9 класса',
    text: 'Хочу отметить профессионализм и ответственный подход. Ольга Юрьевна всегда на связи, держит родителей в курсе прогресса, объясняет над чем нужно работать. Сын занимался индивидуально, результат — рост с 11 до 23 баллов. Однозначно советую!',
    rating: 5,
  },
  {
    name: 'Анастасия',
    role: 'Ученица 9 класса',
    text: 'Я думала, что математика — это не моё, но Ольга Юрьевна показала, что я просто не понимала основы. После занятий с ней всё встало на свои места. Домашние задания всегда проверяла подробно, объясняла ошибки. На ОГЭ получила 22 балла, хотя в начале года еле-еле на 10 справлялась.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Отзывы учеников и родителей
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Что говорят о занятиях те, кто уже достиг своих целей
            </p>
            <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto rounded-full mt-4 sm:mt-6"></div>
          </div>

          {/* Testimonials grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Rating stars */}
                <div className="flex space-x-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author info */}
                <div className="border-t border-gray-200 pt-3 sm:pt-4">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-12 sm:mt-16">
            <a
              href="#contacts"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 text-sm sm:text-base"
            >
              Стать следующим успешным учеником
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
