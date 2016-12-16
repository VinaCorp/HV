from rest_framework.test import APITestCase
from rest_framework import status
from django.shortcuts import resolve_url as r

from medcal.models import Especialidade

class EspecialidadeViewSetList(APITestCase):
    def setUp(self):
        especialidade = Especialidade.objects.create(
            nome = "Acupuntura"
        )

        self.obj = [
            {
                "id": 1,
                "nome": "Acupuntura"
            }
        ]
        self.response = self.client.get(r('api:especialidade-list'))

    def test_get(self):
        self.assertTrue(status.is_success(self.response.status_code))

    def test_content(self):
        self.assertEqual(self.response.data, self.obj)

class EspecialidadeViewSetRetrieve(APITestCase):
    def setUp(self):
        especialidade = Especialidade.objects.create(
            nome = "Acupuntura"
        )
        self.obj = {
            "id": 1,
            "nome": "Acupuntura"
        }

        self.response = self.client.get(r('api:especialidade-detail', pk=1))

    def test_get(self):
        self.assertTrue(status.is_success(self.response.status_code))

    def test_content(self):
        self.assertEqual(self.response.data, self.obj)
