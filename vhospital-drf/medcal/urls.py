from rest_framework import routers
from rest_framework.routers import DefaultRouter
from medcal.views import MedicViewSet
from medcal.views import CityViewSet
from medcal.views import SpecialtyViewSet
from medcal.views import ScheduleViewSet

router = DefaultRouter()
router.register(r'medic', MedicViewSet, base_name='medic')
router.register(r'city', CityViewSet, base_name='city')
router.register(r'specialty', SpecialtyViewSet, base_name='specialty')
router.register(r'schedule', ScheduleViewSet, base_name='schedule')

urlpatterns = router.urls
