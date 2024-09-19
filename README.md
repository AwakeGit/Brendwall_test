## Тестовое задание для собеседования в компанию "Brendwall"

### Функциональность
* API:
	* GET /api/products/: Получение списка всех продуктов в формате JSON.
	* POST /api/products/: Создание нового продукта с проверкой входных данных.
* Фронтенд:
  * HTML-страница с формой для добавления новых продуктов.
  * Отображение списка продуктов в виде таблицы.


### Технологии

* Backend: Python, Django
* Frontend: HTML, Tailwind CSS, JavaScript
* База данных: SQLite
* Дополнительно: Django Admin для управления продуктами

Требования
* Python 3.10+
* Django 5.1+
Установленные зависимости из requirements.txt

### Установка и запуск проекта

1. Клонирование репозитория
```python
    git clone https://github.com/ваш_логин/название_репозитория.git
    cd название_репозитория
```
2. Создание и активация виртуального окружения
```python
python -m venv venv
venv\Scripts\activate
```
3. Установка зависимостей
```python
pip install -r requirements.txt
```
4. Настройка переменных окружения
```python
SECRET_KEY='ваш_секретный_ключ'
```
5. Применение миграций
```python
python manage.py migrate
```
6. Создание суперпользователя (опционально, для доступа к админке)
```python
python manage.py createsuperuser
```
7. Запуск сервера разработки
```python
python manage.py runserver
```

Сервер будет доступен по адресу http://localhost:8000/.

### API
- Получение списка продуктов:
	```python
	GET http://localhost:8000/api/products/
	```
- Создание нового продукта:
	```python
	POST http://localhost:8000/api/products/
	Content-Type: application/json
	{
		"name": "Название продукта",
		"description": "Описание продукта",
		"price": "100.00"
	}
	```