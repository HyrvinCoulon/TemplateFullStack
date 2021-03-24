from django.shortcuts import render
from rest_framework import generics
from polluser.models import *
from .serializers import *

class UserListView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class USerActionView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer


    #def get_queryset(self):
