from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm , AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate


# Create your views here.

def signin(request):

    if request.method == 'GET':
         return render(request, 'login.html', {
            'form': AuthenticationForm
        })
    else:
        user = authenticate(
            request, username=request.POST['username'], password=request.POST
            ['password'])
        if user is None:
            return render(request, 'login.html', {
                'form': AuthenticationForm,
                'error': 'Usuarios o contraseña incorrecta'
            })
        else:
            login(request, user)
            return redirect('home_page')


def home_page(request):
    return render(request, 'index.html')


def productos(request):
    return render(request, 'productos.html')


def empresa(request):
    return render(request, 'empresa.html')


def registro(request):

    if request.method == 'GET':
         return render(request, 'registro.html', {
            'form': UserCreationForm
          })
    else:
        if request.POST['password1'] == request.POST['password2']:

            try:
                 user = User.objects.create_user(
                     username=request.POST['username'], password=request.POST['password1'])
                 user.save()
                 login(request, user)
                 return redirect('signin')
            except:
                return render(request,'registro.html', {
                    'form' : UserCreationForm,
                    "error": 'Usuario ya Existe'
          })
    return render(request,'registro.html', {
            'form' : UserCreationForm,
            "error": 'Su contraseña no es correcta'
    })

