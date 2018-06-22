#!/usr/bin/env python

# WS server that sends messages at random intervals

import asyncio
import datetime
import random
import websockets

from sense_emu import SenseHat

sense = SenseHat()

async def time(websocket, path):
    while True:
        humidity_pi = sense.humidity
        temp_pi = str(sense.temp)
        humidity_value = str(64 * humidity_pi / 100)
        # foo = [x for x in range(192)]
        # now = str(random.choice(foo))
        now = humidity_value
        now = temp_pi
        # now = datetime.datetime.utcnow().isoformat() + 'Z'
        await websocket.send(now)
        await asyncio.sleep(0.4)

start_server = websockets.serve(time, '127.0.0.1', 5678)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()