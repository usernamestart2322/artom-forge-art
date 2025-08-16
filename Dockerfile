# Многоэтапная сборка для оптимизации размера образа
FROM node:18-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci --only=production

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Production образ
FROM nginx:alpine

# Копируем собранные файлы
COPY --from=builder /app/dist /var/www/artom55.ru/dist

# Копируем конфигурацию nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Создаем пользователя для nginx
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Устанавливаем права доступа
RUN chown -R nextjs:nodejs /var/www/artom55.ru
RUN chmod -R 755 /var/www/artom55.ru

# Переключаемся на пользователя nextjs
USER nextjs

# Открываем порт
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"] 