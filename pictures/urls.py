from django.urls import path
from .views import HomeView, PictureView

app_name = 'pictures'

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('data-json/', PictureView.as_view(), name='data-json'),
]