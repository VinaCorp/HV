from django.test import TestCase
from django.utils import timezone

from medcal.models import Agenda
from medcal.models import Especialidade
from medcal.models import Medico
from medcal.models import Paciente


# models test
class AgendaTest(TestCase):

    def create_agenda(self):
        especialidade = Especialidade.objects.create(
            nome="Acupuntura"
        )

        medico = Medico.objects.create(
            nome="Amauri Jose Zuotoski",
            especialidade=especialidade
        )

        paciente = Paciente.objects.create(
            nome="Bernaldo Feigundes"
        )

        return Agenda.objects.create(
            medico=medico,
            datahora=timezone.datetime(
                2017, 5, 12, 16, 30, tzinfo=timezone.get_current_timezone()
            ),
            paciente=paciente
        )

    def test_agenda_creation(self):
        agenda = self.create_agenda()
        self.assertTrue(isinstance(agenda, Agenda))
        self.assertEqual(
            'Amauri Jose Zuotoski - Bernaldo Feigundes', str(agenda))
