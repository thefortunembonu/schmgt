from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_blogs),
    path('<str:blog_id>', views.get_blog),
    path('post_blog/', views.post_blog)
]
