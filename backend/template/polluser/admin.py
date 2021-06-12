from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from restapi.forms import CustomUserChangeForm, CustomUserCreationForm
from .models import User, Object

class CustomUserAdmin(UserAdmin):    
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = ['username', 'email']

admin.site.register(User, CustomUserAdmin)
admin.site.register(Object)
