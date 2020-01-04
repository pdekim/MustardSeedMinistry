from django.urls import re_path, path

from website.views import *

urlpatterns = [
    re_path('', index),
]
