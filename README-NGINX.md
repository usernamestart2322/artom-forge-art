# Настройка nginx для домена artom55.ru

Этот проект содержит конфигурацию nginx для развертывания React приложения на домене artom55.ru.

## 📋 Требования

- Ubuntu/Debian сервер
- Домен artom55.ru с настроенными DNS записями
- Права sudo на сервере

## 🚀 Быстрый старт

### 1. Подготовка проекта

```bash
# Установите зависимости
npm install

# Соберите проект
npm run build
```

### 2. Деплой на сервер

```bash
# Скопируйте файлы на сервер
scp -r . user@your-server:/path/to/project

# Подключитесь к серверу
ssh user@your-server

# Перейдите в директорию проекта
cd /path/to/project

# Сделайте скрипт исполняемым
chmod +x deploy.sh

# Запустите деплой
sudo ./deploy.sh
```

### 3. Настройка SSL (опционально)

```bash
# Отредактируйте email в setup-ssl.sh
nano setup-ssl.sh

# Сделайте скрипт исполняемым
chmod +x setup-ssl.sh

# Запустите настройку SSL
sudo ./setup-ssl.sh
```

## ⚙️ Ручная настройка

### 1. Установка nginx

```bash
sudo apt update
sudo apt install -y nginx
```

### 2. Создание директорий

```bash
sudo mkdir -p /var/www/artom55.ru
sudo mkdir -p /var/log/nginx
```

### 3. Копирование файлов

```bash
# Соберите проект локально
npm run build

# Скопируйте файлы на сервер
sudo cp -r dist/* /var/www/artom55.ru/
```

### 4. Настройка nginx

```bash
# Скопируйте конфигурацию
sudo cp nginx.conf /etc/nginx/sites-available/artom55.ru

# Создайте символическую ссылку
sudo ln -sf /etc/nginx/sites-available/artom55.ru /etc/nginx/sites-enabled/

# Удалите дефолтную конфигурацию
sudo rm -f /etc/nginx/sites-enabled/default

# Проверьте конфигурацию
sudo nginx -t

# Перезапустите nginx
sudo systemctl reload nginx
```

### 5. Настройка прав доступа

```bash
sudo chown -R www-data:www-data /var/www/artom55.ru
sudo chmod -R 755 /var/www/artom55.ru
```

## 🔒 Настройка SSL с Let's Encrypt

### 1. Установка certbot

```bash
sudo apt install -y certbot python3-certbot-nginx
```

### 2. Получение сертификата

```bash
sudo certbot --nginx -d artom55.ru -d www.artom55.ru
```

### 3. Настройка автообновления

```bash
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

## 📁 Структура файлов

```
/var/www/artom55.ru/          # Корневая директория сайта
├── index.html                # Главная страница
├── assets/                   # Статические ресурсы
│   ├── css/
│   ├── js/
│   └── images/
└── ...

/etc/nginx/sites-available/   # Конфигурации nginx
└── artom55.ru               # Конфигурация для домена

/var/log/nginx/              # Логи nginx
├── artom55.ru.access.log
└── artom55.ru.error.log
```

## 🔧 Полезные команды

### Управление nginx

```bash
# Проверить статус
sudo systemctl status nginx

# Перезапустить
sudo systemctl restart nginx

# Перезагрузить конфигурацию
sudo systemctl reload nginx

# Проверить конфигурацию
sudo nginx -t
```

### Просмотр логов

```bash
# Логи доступа
sudo tail -f /var/log/nginx/artom55.ru.access.log

# Логи ошибок
sudo tail -f /var/log/nginx/artom55.ru.error.log

# Все логи nginx
sudo journalctl -u nginx
```

### SSL сертификаты

```bash
# Проверить статус сертификатов
sudo certbot certificates

# Обновить сертификаты вручную
sudo certbot renew

# Логи certbot
sudo journalctl -u certbot
```

## 🛠️ Обновление сайта

### Автоматическое обновление

```bash
# Соберите проект
npm run build

# Запустите деплой
sudo ./deploy.sh
```

### Ручное обновление

```bash
# Соберите проект
npm run build

# Скопируйте файлы
sudo cp -r dist/* /var/www/artom55.ru/

# Установите права
sudo chown -R www-data:www-data /var/www/artom55.ru

# Перезагрузите nginx
sudo systemctl reload nginx
```

## 🔍 Диагностика проблем

### Проверка доступности сайта

```bash
# Локально на сервере
curl -I http://localhost

# С проверкой заголовков
curl -I http://artom55.ru
```

### Проверка DNS

```bash
# Проверить A запись
nslookup artom55.ru

# Проверить через dig
dig artom55.ru
```

### Проверка портов

```bash
# Проверить, что nginx слушает порт 80
sudo netstat -tlnp | grep :80

# Проверить, что nginx слушает порт 443 (если SSL настроен)
sudo netstat -tlnp | grep :443
```

## 📝 Настройка DNS

Убедитесь, что в DNS настройках вашего домена есть следующие записи:

```
A    artom55.ru     → IP-адрес вашего сервера
A    www.artom55.ru → IP-адрес вашего сервера
```

## 🔐 Безопасность

- Конфигурация включает базовые заголовки безопасности
- Запрещен доступ к скрытым файлам
- Настроено кэширование статических файлов
- Включено gzip сжатие

## 📞 Поддержка

При возникновении проблем:

1. Проверьте логи nginx: `/var/log/nginx/artom55.ru.error.log`
2. Проверьте статус nginx: `sudo systemctl status nginx`
3. Проверьте конфигурацию: `sudo nginx -t`
4. Убедитесь, что DNS записи настроены правильно 