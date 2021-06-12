from django.urls import path
from .views import UserListView, ObjectView, ObjectsView

urlpatterns = [
    path('list/', UserListView.as_view()),
    path('object/', ObjectView.as_view()),
    path('list_object/<str:token>/', ObjectsView.as_view())
]