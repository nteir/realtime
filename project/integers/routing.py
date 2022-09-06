from django.urls import path
from integers.consumers import WSConsumer


ws_urlpatterns = [
    path('ws/int/', WSConsumer.as_asgi())
]
