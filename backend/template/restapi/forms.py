from django import forms
from django.contrib.auth.forms import UserChangeForm, UserCreationForm 
from polluser.models import User 
 

class CustomUserCreationForm(UserCreationForm):    
    class Meta:        
        model = User        
        fields = ('email', )  

class CustomUserChangeForm(UserChangeForm):    
    class Meta:        
        model = User        
        fields = UserChangeForm.Meta.fields