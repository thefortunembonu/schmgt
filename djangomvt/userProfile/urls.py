from django.urls import path, include
from .views import GetUserProfile, UpdateUserProfile


urlpatterns = [
    path('user', GetUserProfile.as_view()),
    path('update', UpdateUserProfile.as_view()),
]