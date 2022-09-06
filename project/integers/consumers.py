from channels.generic.websocket import WebsocketConsumer

import json
from random import randint
from time import sleep


class WSConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        while True:
            self.send(json.dumps({'message': randint(-20, 20)}))
            sleep(2)
