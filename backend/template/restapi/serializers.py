from rest_framework import serializers
from polluser.models import *


class UserSerializer(serializers.ModelSerializer):
      
      class Meta:
          model = User
          fields = ('name', 'password')