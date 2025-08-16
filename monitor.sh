#!/bin/bash

# Скрипт для мониторинга и обслуживания nginx
# Запускать с правами sudo

set -e

DOMAIN="artom55.ru"
LOG_DIR="/var/log/nginx"
SITE_DIR="/var/www/artom55.ru"

echo "🔍 Мониторинг nginx для домена $DOMAIN"
echo "=================================="

# Проверка статуса nginx
echo "📊 Статус nginx:"
if systemctl is-active --quiet nginx; then
    echo "✅ nginx работает"
    systemctl status nginx --no-pager -l
else
    echo "❌ nginx не работает"
    echo "Попытка запуска..."
    sudo systemctl start nginx
fi

echo ""

# Проверка конфигурации
echo "⚙️ Проверка конфигурации nginx:"
if sudo nginx -t; then
    echo "✅ Конфигурация корректна"
else
    echo "❌ Ошибка в конфигурации"
    exit 1
fi

echo ""

# Проверка доступности сайта
echo "🌐 Проверка доступности сайта:"
if curl -s -o /dev/null -w "%{http_code}" http://localhost | grep -q "200"; then
    echo "✅ Сайт доступен локально"
else
    echo "❌ Сайт недоступен локально"
fi

if curl -s -o /dev/null -w "%{http_code}" http://$DOMAIN | grep -q "200"; then
    echo "✅ Сайт доступен по домену"
else
    echo "❌ Сайт недоступен по домену"
fi

echo ""

# Проверка SSL сертификата (если настроен)
if [ -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
    echo "🔒 Проверка SSL сертификата:"
    if curl -s -o /dev/null -w "%{http_code}" https://$DOMAIN | grep -q "200"; then
        echo "✅ HTTPS работает"
    else
        echo "❌ HTTPS не работает"
    fi
    
    # Проверка срока действия сертификата
    CERT_EXPIRY=$(openssl x509 -enddate -noout -in /etc/letsencrypt/live/$DOMAIN/fullchain.pem | cut -d= -f2)
    echo "📅 Сертификат действителен до: $CERT_EXPIRY"
    
    echo ""
fi

# Проверка дискового пространства
echo "💾 Использование диска:"
df -h /var/www/ | tail -1
echo ""

# Проверка размера логов
echo "📝 Размер логов:"
if [ -f "$LOG_DIR/$DOMAIN.access.log" ]; then
    echo "Access log: $(du -h $LOG_DIR/$DOMAIN.access.log | cut -f1)"
fi
if [ -f "$LOG_DIR/$DOMAIN.error.log" ]; then
    echo "Error log: $(du -h $LOG_DIR/$DOMAIN.error.log | cut -f1)"
fi
echo ""

# Последние ошибки
echo "🚨 Последние ошибки (последние 10 строк):"
if [ -f "$LOG_DIR/$DOMAIN.error.log" ]; then
    tail -10 "$LOG_DIR/$DOMAIN.error.log"
else
    echo "Файл логов ошибок не найден"
fi

echo ""

# Статистика запросов
echo "📈 Статистика запросов (последние 100):"
if [ -f "$LOG_DIR/$DOMAIN.access.log" ]; then
    echo "Top IP адресов:"
    tail -100 "$LOG_DIR/$DOMAIN.access.log" | awk '{print $1}' | sort | uniq -c | sort -nr | head -5
    
    echo ""
    echo "Top страниц:"
    tail -100 "$LOG_DIR/$DOMAIN.access.log" | awk '{print $7}' | sort | uniq -c | sort -nr | head -5
else
    echo "Файл логов доступа не найден"
fi

echo ""

# Проверка файлов сайта
echo "📁 Проверка файлов сайта:"
if [ -d "$SITE_DIR" ]; then
    echo "Количество файлов: $(find $SITE_DIR -type f | wc -l)"
    echo "Общий размер: $(du -sh $SITE_DIR | cut -f1)"
    
    # Проверка главной страницы
    if [ -f "$SITE_DIR/index.html" ]; then
        echo "✅ index.html найден"
    else
        echo "❌ index.html не найден"
    fi
else
    echo "❌ Директория сайта не найдена"
fi

echo ""

# Проверка процессов nginx
echo "🔄 Процессы nginx:"
ps aux | grep nginx | grep -v grep

echo ""

# Проверка портов
echo "🔌 Открытые порты:"
netstat -tlnp | grep nginx

echo ""
echo "✅ Мониторинг завершен" 