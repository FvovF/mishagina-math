'use client';

import { useEffect, useRef, useState } from 'react';

const results = [
  { before: 12, after: 24, name: 'Анна' },
  { before: 9, after: 21, name: 'Дмитрий' },
  { before: 14, after: 27, name: 'Мария' },
  { before: 11, after: 23, name: 'Александр' },
];

export default function Results() {
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
              Результаты учеников
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Реальные достижения моих учеников на ОГЭ по математике
            </p>
            <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto rounded-full mt-4 sm:mt-6"></div>
          </div>

          {/* Results grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {results.map((result, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-center space-y-3 sm:space-y-4 lg:space-y-6">
                  {/* Student name */}
                  <div className="text-base sm:text-lg font-semibold text-gray-900">{result.name}</div>

                  {/* Before score */}
                  <div>
                    <div className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">Было</div>
                    <div className="text-2xl sm:text-3xl font-bold text-red-500">{result.before}</div>
                    <div className="text-xs sm:text-sm text-gray-600">баллов</div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 animate-bounce"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>

                  {/* After score */}
                  <div>
                    <div className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">Стало</div>
                    <div className="text-3xl sm:text-4xl font-bold text-green-500">{result.after}</div>
                    <div className="text-xs sm:text-sm text-gray-600">баллов</div>
                  </div>

                  {/* Improvement */}
                  <div className="pt-3 sm:pt-4 border-t border-gray-200">
                    <div className="inline-flex items-center space-x-1 sm:space-x-2 bg-green-100 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm">
                      <span>+{result.after - result.before}</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="text-center mt-12 sm:mt-16 max-w-3xl mx-auto px-4">
            <div className="bg-blue-600 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl">
              <p className="text-xl sm:text-2xl font-semibold mb-2">
                Средний прирост — 11 баллов
              </p>
              <p className="text-sm sm:text-base text-blue-100">
                Каждый ученик получает индивидуальную программу подготовки, адаптированную под его уровень и цели
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
