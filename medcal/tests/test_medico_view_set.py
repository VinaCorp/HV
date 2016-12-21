from rest_framework.test import APITestCase
from rest_framework import status
from django.shortcuts import resolve_url as r

from medcal.models import Especialidade
from medcal.models import Medico


class MedicoViewSetList(APITestCase):
    def setUp(self):
        especialidade = Especialidade.objects.create(
            nome="Acupuntura"
        )
        medico = Medico.objects.create(
            nome="Amauri Jose Zuotoski",
            especialidade=especialidade
        )

        self.obj = [
            {
                "id": 1,
                "nome": "Amauri Jose Zuotoski",
                "especialidade": 1
            }
        ]

        self.response = self.client.get(r('api:medico-list'))

    def test_search(self):
        response = self.client.get('/apiv0/medico/', {'search': 'Amauri'})
        self.assertTrue(status.is_success(response.status_code))
        self.assertEqual(response.data, self.obj)

    def test_get(self):
        self.assertTrue(status.is_success(self.response.status_code))

    def test_content(self):
        self.assertEqual(self.response.data, self.obj)


class MedicoViewSetRetrieve(APITestCase):
    def setUp(self):
        especialidade = Especialidade.objects.create(
            nome="Acupuntura"
        )
        medico = Medico.objects.create(
            nome="Amauri Jose Zuotoski",
            especialidade=especialidade
        )

        self.obj = {
            "id": 1,
            "nome": "Amauri Jose Zuotoski",
            "especialidade": 1
        }

        self.response = self.client.get(r('api:medico-detail', pk=1))

    def test_get(self):
        self.assertTrue(status.is_success(self.response.status_code))

    def test_content(self):
        self.assertEqual(self.response.data, self.obj)
