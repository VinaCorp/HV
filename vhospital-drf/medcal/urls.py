from rest_framework import routers
from rest_framework.routers import DefaultRouter
from medcal.views import MedicViewSet
from medcal.views import CityViewSet
from medcal.views import SpecialtyViewSet

router = DefaultRouter()
router.register(r'medic', MedicViewSet, base_name='medic')
router.register(r'city', CityViewSet, base_name='city')
router.register(r'specialty', SpecialtyViewSet, base_name='specialty')

urlpatterns = router.urls
