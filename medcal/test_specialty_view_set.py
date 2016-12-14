from rest_framework.test import APITestCase
from rest_framework import status
from django.shortcuts import resolve_url as r


class SpecialtyViewSetList(APITestCase):
    def setUp(self):
        self.obj = {'specialties': [
            {"cod":"E00001", "nome":"Cardiologia"}
        ]}
        self.response = self.client.get(r('api:specialty-list'))

    def test_get(self):
        self.assertTrue(status.is_success(self.response.status_code))

    def test_content(self):
        self.assertEqual(self.response.data, self.obj)

class SpecialtyViewSetRetrieve(APITestCase):
    def setUp(self):
        self.obj = {"cod":"E00001", "nome":"Cardiologia"}
        self.response = self.client.get(r('api:specialty-detail', pk=1))

    def test_get(self):
        self.assertTrue(status.is_success(self.response.status_code))

    def test_content(self):
        self.assertEqual(self.response.data, self.obj)
