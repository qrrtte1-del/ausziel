# Ausziel — Допомога зі вступом до Австрії

> Персональна допомога абітурієнтам зі вступом до університетів Австрії: вимоги, документи, дедлайни та зрозумілий план наступних кроків. Перша консультація безкоштовна.

## 🚀 Швидкий старт

### Вимоги

- Node.js 18+
- npm або pnpm

### Встановлення

```bash
# Клонуй репозиторій
git clone https://github.com/qrrtte1-del/ausziel.git
cd ausziel

# Встанови залежності
npm install

# Запусти локально
npm run dev
```

Відкрий [http://localhost:3000](http://localhost:3000) в браузері.

## 📋 Структура проекту

```
src/
├── app/
│   ├── layout.tsx      # Основний layout з Header та Footer
│   └── page.tsx        # Головна сторінка
├── components/
│   ├── Header.tsx      # Навігація та меню
│   ├── Hero.tsx        # Героїчна секція
│   ├── Services.tsx    # Послуги
│   ├── ProcessSteps.tsx # Як це працює
│   ├── Principles.tsx  # Принципи роботи
│   ├── FounderSection.tsx # Про засновника
│   ├── ConsultationForm.tsx # Форма записи
│   ├── FAQAccordion.tsx # Питання та відповіді
│   ├── Footer.tsx      # Підвал
│   └── ...інші компоненти
├── config/
│   └── site.ts         # Конфіг сайту (контакти, посилання)
├── lib/
│   ├── utils.ts        # Утиліти
│   └── constants.ts    # Константи
└── styles/
    ├── globals.css     # Глобальні стилі
    └── responsive.css  # Адаптивні стилі

public/
├── robots.txt          # SEO
└── sitemap.xml         # Карта сайту
```

## ⚙️ Налаштування

### Зміна контактної інформації

Відкрий `src/config/site.ts` та змінюй:

```typescript
export const siteConfig = {
  brandName: 'Ausziel',
  telegramUsername: 'ausziel',      // Твій Telegram
  whatsappNumber: '436767061092',   // Твій WhatsApp
  founderName: 'Вячеслав',          // Твоє ім'я
  // ... інші налаштування
};
```

### Додавання фото

1. Помісти фото в `public/images/founder.jpg`
2. Оновіть посилання в `src/components/FounderSection.tsx`

### Форма та WhatsApp

Форма автоматично надсилає повідомлення до WhatsApp з інформацією користувача:

- Можна налаштувати вихідне повідомлення в `siteConfig.whatsappInitialMessage`
- Форма валідується на фронтенді
- При відправці користувач автоматично перенаправляється у WhatsApp

## 🎨 Стилізація

Сайт використовує:

- **Tailwind CSS** для стилів
- **Pastelle colors** для дизайну:
  - Cream (`#fefdfb`) — основний фон
  - Lavender (`#f3f0ff`)
  - Sky (`#e8f4fd`)
  - Sage (`#f0f5f1`)
  - Peach (`#fef3f0`)

Змінюй кольори в `src/styles/globals.css` та `src/lib/constants.ts`

## 📱 Адаптивність

Сайт повністю адаптивний для:

- 📱 Мобільні (320px+)
- 💻 Планшети (768px+)
- 🖥️ Десктопи (1024px+)
- 🖨️ Великі екрани (1280px+)

## 🚀 Деплоїмент

### Cloudflare Pages

1. Push код на GitHub
2. Зайди на [Cloudflare Pages](https://pages.cloudflare.com/)
3. Підключи GitHub репозиторій
4. Налаштування білду:
   - **Framework**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
5. Cloudflare Pages автоматично детектує та билдить проект

### Vercel

1. Push на GitHub
2. Зайди на [vercel.com](https://vercel.com)
3. Імпортуй репозиторій
4. Vercel автоматично налаштує Next.js
5. Твій сайт готовий! 🎉

## 📧 Email Integration (опціонально)

Якщо хочеш отримувати email'и з форми:

1. Налаштуй backend API для обробки форм
2. Додай `NEXT_PUBLIC_FORM_ENDPOINT` в `.env.local`
3. Сервер отримуватиме POST запити з даними форми

## 🔒 Конфіденційність

- Форма не зберігає дані локально
- Дані відправляються прямо у WhatsApp користувача
- Додай сторінку приватності в `public/privacy.md` при необхідності

## 📊 SEO

Сайт оптимізований для SEO:

- ✅ Meta теги у `layout.tsx`
- ✅ Open Graph для соцмереж
- ✅ `robots.txt` для вебпошукачів
- ✅ `sitemap.xml` для індексації
- ✅ Семантична HTML розмітка
- ✅ Українська мова

Оновіть домен у:

- `src/config/site.ts` — `websiteUrl`
- `public/sitemap.xml` — абсолютні посилання

## 📝 Запитання и відповіді (FAQ)

Зміни FAQ в `src/config/site.ts`:

```typescript
export const faqItems = [
  {
    question: 'Твоє запитання?',
    answer: 'Твоя відповідь',
  },
  // ...
];
```

## 🛠️ Розробка

### Доступні скрипти

```bash
# Розробка з hot reload
npm run dev

# Білд для продакшену
npm run build

# Запуск білденого сайту
npm run start

# Лінтинг коду
npm run lint
```

### Додавання нових компонентів

1. Створи файл у `src/components/`
2. Експортуй як default
3. Імпортуй у `src/app/page.tsx`
4. Додай стилі (Tailwind класи)

## 📄 Ліцензія

MIT License — вільно використовуй і модифікуй

## 🤝 Контакти

- **Telegram**: [@ausziel](https://t.me/ausziel)
- **WhatsApp**: [+43 676 706 10 92](https://wa.me/436767061092)

---

**Зроблено з ❤️ для абітурієнтів**
