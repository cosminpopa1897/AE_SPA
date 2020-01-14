from aeSpaServer.models import Product, Category
from rest_framework import serializers
import json



class CategorySerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(allow_null=True)
    class Meta:
        model = Category
        fields = ['id', 'name', 'description']

    def create(self, validated_data):
        category = Category()
        if validated_data["id"] == 0:
            validated_data.pop("id")
            category = Category.objects.create(**validated_data)
        
        # else:
        #     try:
        #         category = Category.objects.get(id=category["id"])
        #         product.categories.add(searchedCategory)
        #     except:
        #         print("Nu a fost gasit")
        #     product.save()
        
        return category


class ProductSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(allow_null=True)
    categories = CategorySerializer(many = True)
    class Meta:
        model = Product
        fields = ['id', 'name', 'code', 'description', 'price', 'categories']

    def create(self, validated_data):
        categoryData = validated_data.pop("categories")
        if validated_data["id"] == 0:
            validated_data.pop("id")
        product = Product.objects.create(**validated_data)
        for category in categoryData:
            try:
                searchedCategory = Category.objects.get(id=category["id"])
                product.categories.add(searchedCategory)
                product.save()
            except:
                print("Nu a fost gasit")
        
        return product
    
    def update(self, instance, validated_data):
        print("instance: ")
        print(instance)
        print("validated_data: ")
        print(validated_data)
        oldCategories= (instance.categories).all()
        oldCategories = list(oldCategories)
        newCategories = validated_data.pop("categories")
        instance.name = validated_data["name"]
        instance.code = validated_data["code"]
        instance.description = validated_data["description"]
        instance.price = validated_data["price"]
        instance.save()
        instance.categories.set([])
        for category in newCategories:
            try:
                searchedCategory = Category.objects.get(id=category["id"])
                instance.categories.add(searchedCategory)
                instance.save()
            except:
                print("Nu a fost gasit")

        return instance