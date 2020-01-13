from django.db import models

# Create your models here.


class Category(models.Model):
    id = models.AutoField(primary_key=True, serialize=True)
    name = models.CharField(max_length= 30, blank=True, default='')
    description = models.TextField(blank=True, default= '')


class Product(models.Model):
    id = models.AutoField(primary_key=True, serialize=True)
    name = models.CharField(max_length= 100, blank=True, default='')
    code = models.CharField(max_length= 8, blank=True, default='N/A')
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    categories = models.ManyToManyField(Category)