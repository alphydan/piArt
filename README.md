
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
	

