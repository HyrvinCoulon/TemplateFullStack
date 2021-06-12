from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from polluser.models import *
from .serializers import *

class UserListView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserActionView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer


class ObjectsView(generics.ListAPIView):
    lookup_field = "token"
    serializer_class = ObjectSerializer

    def get_queryset(self):
        token = self.kwargs['token']
        return Object.objects.filter(token=token)


class ObjectView(generics.CreateAPIView):
    serializer_class = ObjectSerializer
    
    def post(self,request):
        if request.method == "POST":
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)

            return Response({
                    "success": "Inscription réussie",
                    "message": "Successfully register",
                    "object": serializer.data
            }, status=status.HTTP_201_CREATED, headers=headers)
        else:
                return Response({"error": "NOT OK"})
