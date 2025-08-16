#!/bin/bash

# Простой скрипт для запуска приложения в Docker
# Запускать из корневой директории проекта

echo "🐳 Запускаем приложение в Docker..."

# Собираем Docker образ
echo "🔨 Собираем Docker образ..."
docker build -t artom55-app .

# Останавливаем и удаляем старый контейнер если он существует
echo "🧹 Очищаем старые контейнеры..."
docker stop artom55-container 2>/dev/null || true
docker rm artom55-container 2>/dev/null || true

# Запускаем новый контейнер
echo "🚀 Запускаем контейнер..."
docker run -d \
  --name artom55-container \
  -p 80:80 \
  --restart unless-stopped \
  artom55-app

echo "✅ Приложение запущено!"
echo "🌐 Доступно по адресу: http://localhost"
echo ""
echo "📝 Полезные команды:"
echo "  Просмотр логов: docker logs artom55-container"
echo "  Остановить: docker stop artom55-container"
echo "  Перезапустить: docker restart artom55-container"
echo "  Удалить: docker rm -f artom55-container" 