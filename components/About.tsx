'use client';

import { useEffect, useRef, useState } from 'react';

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              О преподавателе
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-2xl font-semibold text-gray-900 mb-8">
                Мишагина Ольга Юрьевна
              </p>

              <p>
                Я — профессиональный репетитор по математике с 10-летним опытом работы. За годы практики я помогла сотням учеников не только успешно сдать ОГЭ, но и по-настоящему полюбить математику.
              </p>

              <p>
                Моя специализация — подготовка к ОГЭ по математике. Я фокусируюсь исключительно на этом экзамене, что позволяет мне глубоко знать все его особенности, типичные задания и распространённые ошибки учеников.
              </p>

              <p>
                Работаю с учениками любого уровня подготовки — от тех, кто испытывает серьёзные трудности с математикой, до тех, кто стремится получить максимальный балл. Каждому ученику я подбираю индивидуальную программу обучения, учитывая его текущие знания, темп усвоения материала и личные особенности.
              </p>

              <p>
                Мой подход основан на систематической работе: мы последовательно устраняем пробелы в знаниях, отрабатываем каждую тему до полного понимания и регулярно тренируемся на экзаменационных заданиях. Я не просто объясняю материал — я учу думать математически и применять знания на практике.
              </p>

              <p>
                Провожу занятия как онлайн, так и очно, что даёт возможность заниматься в удобном для ученика формате без потери качества обучения.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Чёткий план</h3>
                    <p className="text-gray-600 text-base">Структурированная программа подготовки</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Личный подход</h3>
                    <p className="text-gray-600 text-base">Учитываю особенности каждого ученика</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Устранение пробелов</h3>
                    <p className="text-gray-600 text-base">Работа над слабыми темами</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Видимый прогресс</h3>
                    <p className="text-gray-600 text-base">Регулярный контроль результатов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
