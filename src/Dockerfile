# Используем официальный образ Node.js в качестве базового
FROM node:18

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файл package.json и package-lock.json в контейнер
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект в контейнер
COPY . .

# Собираем проект
RUN npm run build

# Используем Nginx для сервировки статических файлов
FROM nginx:alpine

# Копируем сборку приложения в директорию, откуда Nginx будет сервировать файлы
COPY --from=0 /app/build /usr/share/nginx/html

# Экспонируем порт, на котором работает Nginx
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
