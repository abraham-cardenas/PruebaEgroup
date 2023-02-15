# Egroup web
## Elavoracion de pagina web para Egroup

utilice frameworks o herramientas externas a los
archivos.

## Prerequisitos

- [Python] - 3.10.6
- [Django] - 4.1.6
- [sqlparce] - 0.4.3 

## Instalacion

primero necesitamos tener instalado python y si aun no lo tienes instalado con 
el siguiente comando podras hacerlo, para en mi caso que uso linux seria asi:

```sh
sudo apt-get install python 3.10.6
```
o solo 
```sh
sudo apt-get install python
```
esto instalara la ultima version de python, con los siguientes comandos creamos nuestro entorno venv
```sh
python -m venv venv
```
luego necesitamos tener instalado en nuestros ordenadores Django 
y no lo tienes se haria de la siguiente forma

```sh
pip install django
```

con esto ya podremos inicializar nuestro pruyecto

## Librerias django

se utilizaron para el tema de login y registros, 
importando algunas librerias que nos suministra django como:

- el redirect: para el redireccionamiento de las paginas cuando se autentica el usuario 
- UserCreationForm : para la creacion de el formulario login y registro
- AuthenticationForm : para la Autenticacion del registro con el login 
- User
- login y authenticate

```sh
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm , AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate
```

## Development

para hacer correr nuestro proyecto solo debemos ejecutar el comando 

```sh
python manage.py runserver
```

y en la terminal les aparecera el puerto por el cual se estara 
ejecutando su proyecto, la cual seria el sigueinte:

```sh
127.0.0.1:8000
```
