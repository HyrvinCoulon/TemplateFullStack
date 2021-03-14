from django.urls import path
from .views import UserListView

urlpatterns = [
    path('list/', UserListView.as_view())
]