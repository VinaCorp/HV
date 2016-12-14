from rest_framework.routers import DefaultRouter

from medcal.views import MedicoViewSet

from medcal.views import LocalizacaoViewSet

from medcal.views import EspecialidadeViewSet

from medcal.views import AgendaViewSet

from medcal.views import PacienteViewSet

router = DefaultRouter()
router.register(r'medico', MedicoViewSet, base_name='medico')
router.register(r'localizacao', LocalizacaoViewSet, base_name='localizacao')
router.register(
    r'especialidade', EspecialidadeViewSet, base_name='especialidade')
router.register(r'agenda', AgendaViewSet, base_name='agenda')
router.register(r'paciente', PacienteViewSet, base_name='paciente')

urlpatterns = router.urls
