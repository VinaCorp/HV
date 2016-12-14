from rest_framework.test import APITestCase
from rest_framework import status
from django.shortcuts import resolve_url as r
from django.utils import timezone

from medcal.models import Especialidade
from medcal.models import Medico
from medcal.models import Paciente
from medcal.models import Agenda


class AgendaViewSetList(APITestCase):
    def setUp(self):
        especialidade = Especialidade.objects.create(
            nome = "Acupuntura"
        )
        medico = Medico.objects.create(
            nome = "Amauri Jose Zuotoski",
            especialidade = especialidade
        )
        paciente = Paciente.objects.create(
            nome = "Bernaldo Feigundes"
        )
        agenda = Agenda.objects.create(
            medico = medico,
            datahora = timezone.datetime(
                2017, 5, 12, 16, 30, tzinfo=timezone.get_current_timezone()
            ),
            paciente = paciente
        )
 
        self.obj = [
            {
                "id": 1,
                "medico": 1,
                "datahora": "2017-05-12T19:36:00Z",
                "paciente": 1
            }
        ]
            
        self.response = self.client.get(r('api:agenda-list'), {'q':'Acupuntura'})

    def test_get(self):
        self.assertTrue(status.is_success(self.response.status_code))

    def test_content(self):
        self.assertEqual(self.response.data, self.obj)
