# 🐳 Docker для artom55.ru

## 🚀 Быстрый запуск

### Вариант 1: Простой запуск (рекомендуется)

```bash
# Сделайте скрипт исполняемым
chmod +x docker-run.sh

# Запустите приложение
./docker-run.sh
```

### Вариант 2: Ручной запуск

```bash
# Собрать образ
docker build -t artom55-app .

# Запустить контейнер
docker run -d --name artom55-container -p 80:80 artom55-app
```

### Вариант 3: Docker Compose

```bash
# Запустить с docker-compose
docker-compose up -d
```

## 📋 Что происходит

1. **Сборка образа**: Docker собирает многоэтапный образ
   - Этап 1: Устанавливает Node.js и собирает React приложение
   - Этап 2: Копирует собранные файлы в nginx контейнер

2. **Запуск контейнера**: nginx сервер запускается на порту 80

3. **Доступ**: Приложение доступно по адресу http://localhost

## 🔧 Управление контейнером

```bash
# Просмотр логов
docker logs artom55-container

# Остановить контейнер
docker stop artom55-container

# Перезапустить контейнер
docker restart artom55-container

# Удалить контейнер
docker rm -f artom55-container

# Войти в контейнер (для отладки)
docker exec -it artom55-container sh
```

## 🌐 Настройка домена

Для работы с доменом artom55.ru:

### Вариант 1: Прокси через nginx на хосте

1. Установите nginx на сервер
2. Настройте прокси в `/etc/nginx/sites-available/artom55.ru`:

```nginx
server {
    listen 80;
    server_name artom55.ru www.artom55.ru;
    
    location / {
        proxy_pass http://localhost:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

3. Активируйте конфигурацию:
```bash
sudo ln -s /etc/nginx/sites-available/artom55.ru /etc/nginx/sites-enabled/
sudo systemctl reload nginx
```

### Вариант 2: Прямое подключение

Измените порт в docker-run.sh:
```bash
docker run -d \
  --name artom55-container \
  -p 80:80 \
  --restart unless-stopped \
  artom55-app
```

## 🔒 SSL сертификаты

Для HTTPS в Docker:

### Вариант 1: Certbot в отдельном контейнере

```bash
# Получить сертификат
docker run --rm -it \
  -v /etc/letsencrypt:/etc/letsencrypt \
  -v /var/lib/letsencrypt:/var/lib/letsencrypt \
  certbot/certbot certonly \
  --webroot \
  --webroot-path=/var/www/html \
  --email your-email@example.com \
  --agree-tos \
  --no-eff-email \
  -d artom55.ru \
  -d www.artom55.ru
```

### Вариант 2: Обновить nginx-docker.conf

Добавьте SSL секцию в nginx-docker.conf и монтируйте сертификаты:

```bash
docker run -d \
  --name artom55-container \
  -p 80:80 \
  -p 443:443 \
  -v /etc/letsencrypt:/etc/letsencrypt:ro \
  --restart unless-stopped \
  artom55-app
```

## 📊 Мониторинг

```bash
# Статистика контейнера
docker stats artom55-container

# Использование ресурсов
docker system df

# Очистка неиспользуемых ресурсов
docker system prune
```

## 🛠️ Разработка

Для разработки с hot reload:

```bash
# Запустить в режиме разработки
docker run -d \
  --name artom55-dev \
  -p 3000:3000 \
  -v $(pwd):/app \
  -v /app/node_modules \
  node:18-alpine sh -c "cd /app && npm run dev"
```

## 🔍 Отладка

```bash
# Просмотр логов nginx
docker exec artom55-container tail -f /var/log/nginx/error.log

# Проверка конфигурации nginx
docker exec artom55-container nginx -t

# Проверка файлов в контейнере
docker exec artom55-container ls -la /usr/share/nginx/html
```

## 📝 Файлы

- **Dockerfile** - конфигурация Docker образа
- **nginx-docker.conf** - конфигурация nginx для Docker
- **docker-run.sh** - скрипт для быстрого запуска
- **docker-compose.yml** - конфигурация для docker-compose

## ✅ Преимущества Docker

- ✅ Изолированная среда
- ✅ Простота развертывания
- ✅ Масштабируемость
- ✅ Воспроизводимость
- ✅ Легкость обновления

## 🚨 Важные моменты

1. **Порты**: Убедитесь, что порт 80 свободен
2. **Права**: Docker требует прав sudo на Linux
3. **Обновления**: Пересоберите образ после изменений в коде
4. **Данные**: Файлы приложения находятся внутри контейнера

---

**Готово!** 🎉 Теперь вы можете запустить приложение одной командой: `./docker-run.sh` 