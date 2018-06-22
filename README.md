
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

git clone git clone https://github.com/RPi-Distro/RTIMULib/ RTIMU
  835  git clone https://github.com/RPi-Distro/RTIMULib/ RTIMU
    836  cd RTIMU/Linux/python/
      837  python setup.py build
        838  python setup.py install
	

