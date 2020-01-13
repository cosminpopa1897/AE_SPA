from aeSpaServer.models import Product, Category
from rest_framework import serializers
import json



class CategorySerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(allow_null=True)
    class Meta:
        model = Category
        fields = ['id', 'name', 'description']

class ProductSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(allow_null=True)
    categories = CategorySerializer(many = True)
    class Meta:
        model = Product
        fields = ['id', 'name', 'code', 'description', 'price', 'categories']

    def create(self, validated_data):
        print(validated_data)
        categoryData = validated_data.pop("categories")
        print(json.dumps(categoryData))
        if validated_data["id"] == 0:
            validated_data.pop("id")
        product = Product.objects.create(**validated_data)
        
        for category in categoryData:
            print(category)
            try:
                searchedCategory = Category.objects.get(id=category["id"])
                product.categories.add(searchedCategory)
            except:
                print("Nu a fost gasit")
            product.save()
        
        return product