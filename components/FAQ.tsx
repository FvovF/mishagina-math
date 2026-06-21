'use client';

import { useEffect, useRef, useState } from 'react';

const faqs = [
  {
    question: 'Сколько длится занятие?',
    answer: 'Стандартное занятие длится 60 минут. Этого времени достаточно для изучения новой темы, повторения пройденного материала и проработки практических заданий. При необходимости можно увеличить продолжительность до 90 минут.',
  },
  {
    question: 'Можно ли заниматься онлайн?',
    answer: 'Да, конечно! Я провожу занятия как в очном формате, так и онлайн. Для онлайн-уроков используются современные платформы с интерактивной доской, что делает дистанционное обучение таким же эффективным, как и очное.',
  },
  {
    question: 'Что делать, если знания очень слабые?',
    answer: 'Не переживайте! Я работаю с учениками любого уровня подготовки. На первом занятии мы определим ваши текущие знания и пробелы, после чего я составлю индивидуальную программу. Мы начнём с основ и постепенно перейдём к более сложным темам, двигаясь в комфортном для вас темпе.',
  },
  {
    question: 'Когда лучше начинать подготовку к ОГЭ?',
    answer: 'Оптимально начинать подготовку за год до экзамена — в начале 9 класса. Это даёт достаточно времени для качественного изучения всех тем и отработки навыков. Однако даже при более позднем старте можно добиться хороших результатов при регулярных занятиях.',
  },
  {
    question: 'Есть ли домашние задания?',
    answer: 'Да, домашние задания — обязательная часть подготовки. Они помогают закрепить пройденный материал и выявить темы, требующие дополнительной проработки. Я всегда проверяю домашнюю работу, разбираю ошибки и отвечаю на возникшие вопросы.',
  },
  {
    question: 'Как проходит первое занятие?',
    answer: 'Первое занятие — бесплатное и носит ознакомительный характер. Мы познакомимся, я проведу диагностику текущего уровня знаний, мы обсудим ваши цели и пожелания. После этого я составлю индивидуальный план подготовки и отвечу на все ваши вопросы о процессе обучения.',
  },
];

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Частые вопросы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ответы на самые популярные вопросы о занятиях
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-blue-100/50 transition-colors duration-300"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6 text-lg">
              Остались вопросы? Свяжитесь со мной удобным способом
            </p>
            <a
              href="#contacts"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1"
            >
              Задать вопрос
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
