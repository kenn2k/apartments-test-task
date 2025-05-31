# Apartment Listing App

Веб-додаток для перегляду квартир з Next.js фронтендом та Express.js бекендом.

## Швидкий запуск з Docker

1. Клонуйте проєкт: `git clone https://github.com/kenn2k/apartments-test-task.git`
2. Перейдіть в папку: `cd <project-name>`
3. Скопіюйте конфігурацію: `.env`
4. Запустіть: `docker-compose up --build`
5. Відкрийте http://localhost:3000

## Конфігурація

- server:

```bash
  MONGO_URL=
  PORT=4000
```

- client:

```bash
  NEXT_PUBLIC_API_BASE_URL="http://localhost:4000/api/apartments"
```

## Доступні сервіси

- Frontend: http://localhost:3000 (Next.js)
- Backend API: http://localhost:4000/api/apartments (Express.js)

## Зупинка

`docker-compose down`
