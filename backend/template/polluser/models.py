from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    
    REQUIRED_FIELDS = ['email']
    username = models.CharField(max_length=10, default='')
    email = models.EmailField(max_length=65, null=True)
    password = models.CharField(max_length=100, default='')

    def __str__(self):
        return self.username


class Object(models.Model):
    token = models.CharField(max_length=60, default='')
    name = models.CharField(max_length=60, default='')
    description = models.CharField(max_length=100, default='')

    def __str__(self):
        return self.name