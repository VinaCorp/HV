from rest_framework.test import APITestCase
from rest_framework import status
from django.shortcuts import resolve_url as r


class ScheduleViewSetList(APITestCase):
    def setUp(self):
        self.obj = {
            "IdSessao":"",
            "IDRetorno":"",
            "MensagemDeRetorno":"",
            "IdEntidade":"",
            "prestador": [
                {
                    "codigo":"",
                    "nome prestador":"",
                    "código da Clínica":"",
                    "nome da clinica":"",
                    "foto":" url",
                    "avaliação":"",
                    "endereço":"",
                    "agendaDisponível": [{"data": [
                        {"dataLivre":"20/10/2016", "hora": ["8:00", "9:00"]},
                        {"dataLivre":"21/10/2016", "hora": ["11:00", "12:00"]},
                        {"dataLivre":"22/10/2016", "hora": ["13:00", "15:00"]}]
                    }],
                    "especialidades":[{"cod": "E00001", "nome": "Cardiologia"}]
                }
            ]
        } 
            
        self.response = self.client.get(r('api:schedule-list'), {'q':'Cardiologia'})

    def test_get(self):
        self.assertTrue(status.is_success(self.response.status_code))

    def test_content(self):
        self.assertEqual(self.response.data, self.obj)
