document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('product-form');
    const tableBody = document.querySelector('#products-table tbody');

    // Функция для загрузки продуктов
    function loadProducts() {
        fetch('/api/products/')
            .then(response => response.json())
            .then(data => {
                tableBody.innerHTML = '';
                data.forEach(product => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${product.id}</td>
                        <td>${product.name}</td>
                        <td>${product.description}</td>
                        <td>${product.price}</td>
                    `;
                    tableBody.appendChild(row);
                });
            });
    }

    // Обработчик отправки формы
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const data = {
            name: form.name.value,
            description: form.description.value,
            price: form.price.value
        };

        fetch('/api/products/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken') // Функция для получения CSRF-токена
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    form.reset();
                    loadProducts();
                } else {
                    return response.json().then(data => {
                        alert('Ошибка: ' + JSON.stringify(data));
                    });
                }
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });
    });

    // Функция для получения CSRF-токена
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Проверяем, соответствует ли эта строка нужному нам cookie
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    // Загрузить продукты при загрузке страницы
    loadProducts();
});
