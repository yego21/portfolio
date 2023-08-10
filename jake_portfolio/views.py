from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "jake_portfolio/index.html")
    
def about(request):
    return render(request, "jake_portfolio/index.html#about")