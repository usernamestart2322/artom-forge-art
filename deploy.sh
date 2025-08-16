#!/bin/bash

# Скрипт для деплоя проекта artom55.ru
# Запускать с правами sudo

set -e

echo "🚀 Начинаем деплой проекта artom55.ru..."

# Проверяем, что nginx установлен
if ! command -v nginx &> /dev/null; then
    echo "❌ nginx не установлен. Устанавливаем..."
    sudo apt update
    sudo apt install -y nginx
fi

# Создаем директорию для сайта
echo "📁 Создаем директории..."
sudo mkdir -p /var/www/artom55.ru
sudo mkdir -p /var/log/nginx

# Устанавливаем права доступа
sudo chown -R $USER:$USER /var/www/artom55.ru

# Собираем проект
echo "🔨 Собираем проект..."
npm run build

# Копируем собранные файлы
echo "📋 Копируем файлы..."
cp -r dist/* /var/www/artom55.ru/

# Копируем конфигурацию nginx
echo "⚙️ Настраиваем nginx..."
sudo cp nginx.conf /etc/nginx/sites-available/artom55.ru

# Создаем символическую ссылку
sudo ln -sf /etc/nginx/sites-available/artom55.ru /etc/nginx/sites-enabled/

# Удаляем дефолтную конфигурацию если она существует
sudo rm -f /etc/nginx/sites-enabled/default

# Проверяем конфигурацию nginx
echo "🔍 Проверяем конфигурацию nginx..."
sudo nginx -t

# Перезапускаем nginx
echo "🔄 Перезапускаем nginx..."
sudo systemctl reload nginx

# Устанавливаем права доступа для nginx
sudo chown -R www-data:www-data /var/www/artom55.ru
sudo chmod -R 755 /var/www/artom55.ru

echo "✅ Деплой завершен!"
echo "🌐 Сайт доступен по адресу: http://artom55.ru"
echo ""
echo "📝 Следующие шаги:"
echo "1. Настройте DNS записи для домена artom55.ru"
echo "2. Получите SSL сертификат (например, через Let's Encrypt)"
echo "3. Раскомментируйте HTTPS секцию в nginx.conf"
echo "4. Перезапустите nginx: sudo systemctl reload nginx" 