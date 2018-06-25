#!/usr/bin/env python

# WS server that sends SenseHat data 

import asyncio
import datetime
import websockets
import json, math


# How often should data be sent? (in sec)
intervals = 0.1

# from sense_emu import SenseHat
from sense_hat import SenseHat

sense = SenseHat()

async def time(websocket, path):
    while True:

        # Environmental Variables
        hu_pi = sense.humidity
        te_pi = sense.temp
        # subtract atmospheric pressure to better see effect
        pe_pi = (sense.pressure - 1020)*100 

        # Spatial Variables
        orientation_rad = sense.get_orientation_degrees()
        ro_pi = orientation_rad['roll']
        pit_pi = orientation_rad['pitch']
        yaw_pi = orientation_rad['pitch']

        # Motion Variables
        g_pi = sense.get_accelerometer_raw()
        g_x = g_pi['x']
        g_y = g_pi['y']
        g_z = g_pi['z']
        # total acceleration
        t_g = math.sqrt(g_pi['x']**2 + g_pi['y']**2 + g_pi['z']**2)

        # Magnetic Variables
        mag_pi = sense.get_compass_raw()
        mag_x = mag_pi['x']
        mag_y = mag_pi['y']
        mag_z = mag_pi['z']
        tmag_pi = math.sqrt(mag_pi['x']**2 + mag_pi['y']**2 + mag_pi['z']**2)
        
        sense_dict = {

            'humi': hu_pi,
            'temp': te_pi,
            'pres': pe_pi,
            'roll': ro_pi,
            'pitch': pit_pi,
             'yaw': yaw_pi,
            'accel': t_g,
            'magn': tmag_pi,

            }
        
        now = str(yaw_pi) # json.dumps(sense_dict)
        now = json.dumps(sense_dict)
        # now = datetime.datetime.utcnow().isoformat() + 'Z'
        await websocket.send(now)
        await asyncio.sleep(intervals)

start_server = websockets.serve(time, '127.0.0.1', 5678)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
