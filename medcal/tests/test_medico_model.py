from django.test import TestCase
from medcal.models import Especialidade
from medcal.models import Medico


# models test
class MedicoTest(TestCase):

    def create_medico(self):
        especialidade = Especialidade.objects.create(
            nome="Acupuntura"
        )
        return Medico.objects.create(
            nome="Amauri Jose Zuotoski",
            especialidade=especialidade
        )

    def test_medico_creation(self):
        medico = self.create_medico()
        self.assertTrue(isinstance(medico, Medico))
        self.assertEqual("Amauri Jose Zuotoski", str(medico))
