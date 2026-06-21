'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 sm:py-16 lg:py-0">
      {/* Mathematical decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 text-blue-100 text-4xl sm:text-6xl font-bold opacity-20 animate-float">π</div>
        <div className="absolute top-24 sm:top-40 right-8 sm:right-20 text-blue-100 text-3xl sm:text-5xl font-bold opacity-20 animate-float" style={{ animationDelay: '1s' }}>∫</div>
        <div className="absolute bottom-32 sm:bottom-40 left-8 sm:left-20 text-blue-100 text-5xl sm:text-7xl font-bold opacity-20 animate-float" style={{ animationDelay: '2s' }}>∑</div>
        <div className="absolute bottom-12 sm:bottom-20 right-12 sm:right-40 text-blue-100 text-4xl sm:text-6xl font-bold opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>√</div>
        <div className="absolute top-1/3 left-1/4 text-blue-100 text-3xl sm:text-4xl font-bold opacity-15 animate-float" style={{ animationDelay: '0.5s' }}>x²</div>
        <div className="absolute top-2/3 right-1/4 text-blue-100 text-4xl sm:text-5xl font-bold opacity-15 animate-float" style={{ animationDelay: '2.5s' }}>∆</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Подготовка к ОГЭ по математике{' '}
                <span className="text-blue-600">без стресса</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Помогаю ученикам уверенно сдать ОГЭ и повысить успеваемость по математике
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contacts"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 text-center text-sm sm:text-base"
              >
                <span className="relative z-10">Записаться на занятие</span>
              </a>
              <a
                href="#about"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center text-sm sm:text-base"
              >
                Узнать подробнее
              </a>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-8">
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">10 лет</div>
                <div className="text-sm sm:text-base text-gray-700 font-medium">опыта работы</div>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">Онлайн</div>
                <div className="text-sm sm:text-base text-gray-700 font-medium">и очные занятия</div>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">100%</div>
                <div className="text-sm sm:text-base text-gray-700 font-medium">индивидуальный подход</div>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">Только</div>
                <div className="text-sm sm:text-base text-gray-700 font-medium">подготовка к ОГЭ</div>
              </div>
            </div>
          </div>

          {/* Right side - Teacher photo */}
          <div className={`relative mt-8 lg:mt-0 max-w-md mx-auto lg:max-w-none transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl sm:rounded-3xl transform rotate-6 scale-105 opacity-20"></div>

              {/* Photo container */}
              <div className="relative bg-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-2xl">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                  <Image
                    src="/teacher.png"
                    alt="Мишагина Ольга Юрьевна"
                    width={853}
                    height={1280}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white px-4 sm:px-8 py-2 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl border-2 sm:border-4 border-blue-600 animate-float">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">+150</div>
                  <div className="text-xs sm:text-sm text-gray-700 font-medium">учеников</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
