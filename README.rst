vhospital-api
======================================

|build-status-image| |pypi-version|

Overview
--------

REST API for Virtual Hospital Medic Calendar

Requirements
------------

-  Python (3.5)
-  Django (1.10)
-  Django REST Framework (3.5)

Installation
------------

Clone this repository from github. Install using ``setup.py``\ …

.. code:: bash

    $ python setup.py install

Deploy
------

To deploy using heroku you will need a heroku account and the heroku client.

After that you can follow these steps:

.. code:: bash

    $ heroku login
    $ heroku create 
    $ heroku config:add SECRET_KEY=$(./manage.py generate_secret_key)
    $ heroku config:add ALLOWED_HOSTS='127.0.0.1, .localhost, .herokuapp.com'
    $ heroku config:add DEBUG=False
    $ git push heroku master
    $ heroku run python manage.py migrate

If you want to see some data you can use our sample or prepare yours:

.. code:: bash

    $ heroku pg:psql --app vhospital < sql/pg_initial.sql

If you used mysql you can use:

.. code:: bash

    $ heroku pg:psql --app vhospital < sql/mysql_initial.sql

Testing
-------

Install testing requirements.

.. code:: bash

    $ pip install -r requirements.txt

Run with manage.py.

.. code:: bash

    $ ./manage.py test

You could also use the excellent `tox`_ testing tool to run the tests
against all supported versions of Python and Django. But we didn't configured
the app to use tox yet. After that you would be able to install tox
globally, and then simply run:

.. code:: bash

    $ tox

Documentation
-------------

To build the documentation, you’ll need to install ``mkdocs``.

.. code:: bash

    $ pip install mkdocs

To preview the documentation:

.. code:: bash

    $ mkdocs serve
    Running at: http://127.0.0.1:8000/

To build the documentation:

.. code:: bash

    $ mkdocs build

.. _tox: http://tox.readthedocs.org/en/latest/

.. |build-status-image| image:: https://secure.travis-ci.org/ramiroluz/vhospital-drf.svg?branch=master
   :target: http://travis-ci.org/ramiroluz/vhospital-drf?branch=master
.. |pypi-version| image:: https://img.shields.io/pypi/v/vhospital-api.svg
   :target: https://pypi.python.org/pypi/vhospital-api
