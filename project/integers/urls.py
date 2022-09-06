from django.urls import path
from integers.views import index


urlpatterns = [
    path('', index)
]
