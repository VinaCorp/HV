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
            nome="Acupuntura"
        )

        medico = Medico.objects.create(
            nome="Amauri Jose Zuotoski",
            especialidade=especialidade
        )

        paciente = Paciente.objects.create(
            nome="Bernaldo Feigundes"
        )

        self.agenda = Agenda.objects.create(
            medico=medico,
            datahora=timezone.datetime(
                2017, 5, 12, 16, 30, tzinfo=timezone.get_current_timezone()
            ),
            paciente=paciente
        )

        self.agenda.save()

        self.obj = [
            {
                "id": 1,
                "medico": 1,
                "datahora": "2017-05-12T19:36:00Z",
                "paciente": 1
            }
        ]

        self.response = self.client.get(r('api:agenda-list'))

    def test_get(self):
        self.assertTrue(status.is_success(self.response.status_code))

    def test_content(self):
        self.assertEqual(self.response.data, self.obj)

    def test_search(self):
        response = self.client.get('/apiv0/agenda/', {'search': 'Acupuntura'})
        self.assertTrue(status.is_success(response.status_code))
        self.assertEqual(response.data, self.obj)

    def test_update(self):
        """
        Ensure we can update an object.
        """
        url = r('api:agenda-list')
        # Clear the scheduled patient.
        self.agenda.paciente = None
        self.agenda.save()
        pk = self.agenda.id
        self.assertTrue(Agenda.objects.get(pk=pk).paciente is None)

        data = {
            "medico": self.agenda.medico.id,
            "paciente": 1,
            "datahora": self.agenda.datahora,
        }

        url_pk = '{}{}/'.format(url, pk)
        # response = self.client.put(url_pk, data, format='json')
        response = self.client.put(url_pk, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Agenda.objects.count(), 1)
        agenda_obj = Agenda.objects.get(pk=pk)
        self.assertEqual(agenda_obj.paciente.id, 1)
        self.assertEqual(agenda_obj.medico.id, 1)
        self.assertEqual(agenda_obj.datahora, self.agenda.datahora)
