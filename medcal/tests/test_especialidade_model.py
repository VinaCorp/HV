from django.test import TestCase
from medcal.models import Especialidade


# models test
class EspecialidadeTest(TestCase):

    def create_especialidade(self):
        return Especialidade.objects.create(nome="Acupuntura")

    def test_especialidade_creation(self):
        especialidade = self.create_especialidade()
        self.assertTrue(isinstance(especialidade, Especialidade))
        self.assertEqual("Acupuntura", str(especialidade))
