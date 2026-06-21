'use client';

import { useEffect, useRef, useState } from 'react';

const pricingOptions = [
  {
    title: 'Индивидуальные занятия',
    price: '2000',
    description: 'Персональная программа подготовки и работа над слабыми местами',
    features: [
      'Полное внимание преподавателя',
      'Гибкий график занятий',
      'Индивидуальный темп обучения',
      'Адаптация программы под ученика',
      'Работа над конкретными пробелами',
      'Подготовка домашних заданий',
    ],
    popular: true,
  },
  {
    title: 'Групповые занятия',
    price: '1000',
    description: 'Занятия в мини-группах с поддержкой и разбором всех тем ОГЭ',
    features: [
      'Группы до 4 человек',
      'Обмен опытом с другими учениками',
      'Мотивация в коллективе',
      'Разбор всех тем ОГЭ',
      'Регулярные пробные тестирования',
      'Доступная стоимость',
    ],
    popular: false,
  },
];

export default function Pricing() {
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
    <section id="pricing" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Стоимость занятий
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите формат, который подходит именно вам
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingOptions.map((option, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${
                  option.popular
                    ? 'from-blue-50 to-blue-100 border-4 border-blue-600'
                    : 'from-gray-50 to-white border-2 border-gray-200'
                } rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Популярный выбор
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.title}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-5xl font-bold text-blue-600">{option.price}</span>
                    <span className="text-2xl text-gray-600 ml-2">₽</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{option.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <svg
                        className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contacts"
                  className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    option.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Записаться
                </a>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Первое занятие — бесплатно!
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                На первом занятии мы познакомимся, определим ваш текущий уровень знаний,
                обсудим цели и составим индивидуальный план подготовки к ОГЭ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
