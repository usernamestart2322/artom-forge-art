#!/bin/bash

# Скрипт для настройки SSL сертификата через Let's Encrypt
# Запускать с правами sudo

set -e

DOMAIN="artom55.ru"
EMAIL="your-email@example.com"  # Замените на ваш email

echo "🔒 Настраиваем SSL сертификат для $DOMAIN..."

# Проверяем, что certbot установлен
if ! command -v certbot &> /dev/null; then
    echo "📦 Устанавливаем certbot..."
    sudo apt update
    sudo apt install -y certbot python3-certbot-nginx
fi

# Получаем SSL сертификат
echo "🎫 Получаем SSL сертификат..."
sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --email $EMAIL --agree-tos --non-interactive

# Проверяем автообновление сертификата
echo "🔄 Настраиваем автообновление сертификата..."
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer

# Проверяем статус
echo "📊 Проверяем статус сертификата..."
sudo certbot certificates

echo "✅ SSL сертификат настроен!"
echo "🌐 Сайт доступен по адресу: https://$DOMAIN"
echo ""
echo "📝 Информация:"
echo "- Сертификат будет автоматически обновляться"
echo "- Проверить статус: sudo certbot certificates"
echo "- Обновить вручную: sudo certbot renew"
echo "- Логи certbot: sudo journalctl -u certbot" 