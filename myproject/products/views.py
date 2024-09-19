import json

from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from .forms import ProductForm
from .models import Product


def index(request):
    return render(request, 'products/index.html')


@csrf_exempt
def product_list(request):
    if request.method == 'GET':
        products = Product.objects.all().values()
        return JsonResponse(
            list(products),
            safe=False
        )

    elif request.method == 'POST':
        data = json.loads(request.body)
        form = ProductForm(data)
        if form.is_valid():
            product = form.save()
            return JsonResponse(
                {'message': 'Продукт создан успешно.'},
                status=201
            )
        else:
            return JsonResponse(form.errors, status=400)
