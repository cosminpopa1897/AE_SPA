from django.shortcuts import render
from rest_framework import viewsets
from aeSpaServer.models import Product, Category
from aeSpaServer.serializer import ProductSerializer, CategorySerializer
# Create your views here.

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
