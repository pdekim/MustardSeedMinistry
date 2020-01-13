from django.urls import re_path

from gallery.views import *

urlpatterns = [
    re_path('', gallery),
]
