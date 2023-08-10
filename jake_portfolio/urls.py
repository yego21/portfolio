from django.urls import path

from . import views

app_name = "jake_portfolio"
urlpatterns = [
    path("", views.index, name="index"),  
    # path("#about", views.about, name="about"),  
    path("#", views.portfolio_details, name="portfolio_details"),  
]