from rest_framework import serializers
from polluser.models import *


class UserSerializer(serializers.ModelSerializer):
      class Meta:
          model = User
          fields = '__all__'


class ObjectSerializer(serializers.ModelSerializer):
      class Meta:
          model = Object
          fields = '__all__'