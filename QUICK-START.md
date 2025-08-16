# 🚀 Быстрый старт - nginx для artom55.ru

## 📋 Что создано

✅ **nginx.conf** - основная конфигурация nginx  
✅ **nginx-production.conf** - оптимизированная конфигурация для production  
✅ **deploy.sh** - скрипт автоматического деплоя  
✅ **setup-ssl.sh** - скрипт настройки SSL сертификата  
✅ **monitor.sh** - скрипт мониторинга  
✅ **docker-compose.yml** - конфигурация Docker  
✅ **Dockerfile** - Docker образ для приложения  
✅ **artom55.service** - systemd сервис  

## 🎯 Быстрая настройка

### 1. Подготовка проекта
```bash
npm install
npm run build
```

### 2. Деплой на сервер
```bash
# Скопируйте файлы на сервер
scp -r . user@your-server:/path/to/project

# Подключитесь к серверу
ssh user@your-server
cd /path/to/project

# Запустите деплой
chmod +x deploy.sh
sudo ./deploy.sh
```

### 3. Настройка SSL (опционально)
```bash
# Отредактируйте email в setup-ssl.sh
nano setup-ssl.sh

# Запустите настройку SSL
chmod +x setup-ssl.sh
sudo ./setup-ssl.sh
```

## 🔧 Полезные команды

```bash
# Проверить статус
sudo systemctl status nginx

# Перезапустить nginx
sudo systemctl reload nginx

# Мониторинг
chmod +x monitor.sh
sudo ./monitor.sh

# Обновить сайт
npm run build
sudo ./deploy.sh
```

## 🌐 Результат

После настройки ваш сайт будет доступен по адресу:
- **HTTP**: http://artom55.ru
- **HTTPS**: https://artom55.ru (после настройки SSL)

## 📝 Следующие шаги

1. Настройте DNS записи для домена artom55.ru
2. Получите SSL сертификат через Let's Encrypt
3. Настройте мониторинг и логирование
4. Настройте резервное копирование

## 🆘 Поддержка

При проблемах:
1. Проверьте логи: `sudo tail -f /var/log/nginx/artom55.ru.error.log`
2. Запустите мониторинг: `sudo ./monitor.sh`
3. Проверьте конфигурацию: `sudo nginx -t`

---

**Готово!** 🎉 Ваш сайт настроен и готов к работе. 