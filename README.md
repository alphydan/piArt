
# Pi Art

This code establishes a bridge between the
[Sense-Hat](https://www.raspberrypi.org/products/sense-hat/) of a
raspberry pi and a `p5.js` drawing in the browser.

> Raspberry Pi Sensors -> Python -> websockets -> local server <- JS <- p5.js <- Browser

To run it, run `mysocket.py` with `python >= 3.6` and open `index_p5.html` in the browser.
In this example, you can blow hot air on a raspberry pi and watch a circle go big and red on a screen.  Or you can blow on the pressure sensor, and watch the circle go up.

# Yak Shaving Instructions

install python 3.6
(Using Berryconda is a good way forward)

then:

    conda config --add channels rpi
    conda install python=3.6
    conda create -n py36 python=3.6

Activate the environment with python3.6 using:

    source activate py36

Check that it is the case:  `python -V` should return `Python 3.6.3`.
  

Install the `websockets` library

    pip install websockets
    pip install sense-emu # to test sensors


If necessary, use the last pip, `pip install --upgrade pip`.

To read from the sensors you will need:

    pip install sense-hat

If you get an error with the `RTIMU` library you may need to reinstall it from scratch.  Here's what worked for me.  From the project directory:

    git clone git clone https://github.com/RPi-Distro/RTIMULib/ RTIMU
    git clone https://github.com/RPi-Distro/RTIMULib/ RTIMU
    cd RTIMU/Linux/python/
    python setup.py build
    python setup.py install
	

