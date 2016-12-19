from django.test import TestCase
from medcal.models import Paciente
from django.utils import timezone
from django.core.urlresolvers import reverse


# models test
class PacienteTest(TestCase):

    def create_paciente(self):
        return Paciente.objects.create(nome='Genuíldo Testa')

    def test_paciente_creation(self):
        paciente = self.create_paciente()
        self.assertTrue(isinstance(paciente, Paciente))
        self.assertEqual('Genuíldo Testa', str(paciente))
