from channels.generic.websocket import AsyncWebsocketConsumer

import json
from random import randint
from asyncio import sleep


class WSConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        while True:
            await self.send(json.dumps({'message': randint(-20, 20)}))
            await sleep(2)
