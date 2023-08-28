from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, "jake_portfolio/index.html")
    
def portfolio_details(request):
    return render(request, "jake_portfolio/portfolio-details.html")

def py_scripts(request):
    return render(request, "jake_portfolio/py_scripts.html")