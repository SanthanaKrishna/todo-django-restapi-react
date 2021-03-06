from django.urls import path, include
from rest_framework import routers

from .views import TodoViewSet

router = routers.DefaultRouter()
router.register(r'todos', TodoViewSet, 'todo')

urlpatterns = router.urls
