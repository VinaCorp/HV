from rest_framework.test import APITestCase
from rest_framework import status
from django.shortcuts import resolve_url as r


class MedicViewSetList(APITestCase):
    def setUp(self):
        self.obj = {'medics': [
            {"cod":"P00001", "nome":"João da Silva"}
        ]}
        self.response = self.client.get(r('medic-list'))

    def test_get(self):
        self.assertTrue(status.is_success(self.response.status_code))

    def test_content(self):
        self.assertEqual(self.response.data, self.obj)

class CityViewSetList(APITestCase):
    def setUp(self):
        self.obj = {'cities': [
            {"cod":"C00001", "nome":"Curitiba"}
        ]}
        self.response = self.client.get(r('city-list'))

    def test_get(self):
        self.assertTrue(status.is_success(self.response.status_code))

    def test_content(self):
        self.assertEqual(self.response.data, self.obj)

class SpecialtyViewSetList(APITestCase):
    def setUp(self):
        self.obj = {'specialties': [
            {"cod":"E00001", "nome":"Cardiologia"}
        ]}
        self.response = self.client.get(r('specialty-list'))

    def test_get(self):
        self.assertTrue(status.is_success(self.response.status_code))

    def test_content(self):
        self.assertEqual(self.response.data, self.obj)
