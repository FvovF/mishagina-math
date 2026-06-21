# Сайт репетитора по математике ОГЭ

Современный премиальный лендинг для репетитора по математике Мишагиной Ольги Юрьевны.

## Технологии

- Next.js 15
- TypeScript
- Tailwind CSS
- App Router
- Адаптивная верстка
- SEO-оптимизация

## Установка и запуск

```bash
# Установить зависимости
npm install

# Запустить dev сервер
npm run dev
```

Сайт откроется на [http://localhost:3000](http://localhost:3000)

## Сборка для продакшена

```bash
npm run build
npm start
```

## Деплой на Vercel

1. Создайте аккаунт на [Vercel](https://vercel.com)
2. Установите Vercel CLI:
```bash
npm install -g vercel
```
3. Задеплойте проект:
```bash
vercel
```

Или загрузите проект через веб-интерфейс Vercel.

## Добавление фото преподавателя

Разместите фото преподавателя в папку `public/` с именем `teacher.png` или `teacher.jpg`.

Затем обновите компонент `components/Hero.tsx`, заменив placeholder на реальное изображение:

```tsx
<Image
  src="/teacher.png"
  alt="Мишагина Ольга Юрьевна"
  fill
  className="object-cover"
  priority
/>
```

## Структура проекта

```
m/
├── app/
│   ├── layout.tsx       # Основной layout с SEO
│   ├── page.tsx         # Главная страница
│   └── globals.css      # Глобальные стили и анимации
├── components/
│   ├── Hero.tsx         # Первый экран
│   ├── About.tsx        # О преподавателе
│   ├── Results.tsx      # Результаты учеников
│   ├── Pricing.tsx      # Цены
│   ├── Testimonials.tsx # Отзывы
│   ├── FAQ.tsx          # Частые вопросы
│   ├── Contacts.tsx     # Контакты
│   └── Footer.tsx       # Футер
└── public/              # Статические файлы
```

## Контакты преподавателя

- Telegram: [@OlgaMish_teacher](https://t.me/OlgaMish_teacher)
- Телефон: +7 (999) 123-45-67
- ВКонтакте: [olga_math_teacher](https://vk.com/olga_math_teacher)

