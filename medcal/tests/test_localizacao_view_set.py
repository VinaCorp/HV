from rest_framework.test import APITestCase
from rest_framework import status
from django.shortcuts import resolve_url as r

from medcal.models import Cidade
from medcal.models import Especialidade
from medcal.models import Medico
from medcal.models import Localizacao


class LocalizacaoViewSetList(APITestCase):
    def setUp(self):
        especialidade = Especialidade.objects.create(
            nome="Acupuntura"
        )

        medico = Medico.objects.create(
            nome="Amauri Jose Zuotoski",
            especialidade=especialidade
        )

        cidade = Cidade.objects.create(
            nome='Curitiba'
        )

        localizacao = Localizacao.objects.create(
            cep="80020905",
            rua="R MARECHAL DEODORO",
            num="51",
            compl="SALA 805 A B",
            bairro="CENTRO",
            cidade=cidade,
            estado="PR",
            medico=medico
        )

        self.obj = [
            {
                "id": 1,
                "cep": "80020905",
                "rua": "R MARECHAL DEODORO",
                "num": "51",
                "compl": "SALA 805 A B",
                "bairro": "CENTRO",
                "cidade": 1,
                "estado": "PR",
                "medico": 1
            }
        ]
        self.response = self.client.get(r('api:localizacao-list'))

    def test_get(self):
        self.assertTrue(status.is_success(self.response.status_code))

    def test_content(self):
        self.assertEqual(self.response.data, self.obj)


class LocalizacaoViewSetRetrieve(APITestCase):
    def setUp(self):
        especialidade = Especialidade.objects.create(
            nome="Acupuntura"
        )

        medico = Medico.objects.create(
            nome="Amauri Jose Zuotoski",
            especialidade=especialidade
        )

        cidade = Cidade.objects.create(
            nome='Curitiba'
        )

        self.localizacao = Localizacao.objects.create(
            cep="80020905",
            rua="R MARECHAL DEODORO",
            num="51",
            compl="SALA 805 A B",
            bairro="CENTRO",
            cidade=cidade,
            estado="PR",
            medico=medico
        )

        self.obj = {
            "id": 1,
            "cep": "80020905",
            "rua": "R MARECHAL DEODORO",
            "num": "51",
            "compl": "SALA 805 A B",
            "bairro": "CENTRO",
            "cidade": 1,
            "estado": "PR",
            "medico": 1
        }

        self.response = self.client.get(r('api:localizacao-detail', pk=1))

    def test_get(self):
        self.assertTrue(status.is_success(self.response.status_code))

    def test_content(self):
        self.assertEqual(self.response.data, self.obj)
