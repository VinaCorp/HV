from rest_framework.test import APITestCase
from rest_framework import status
from django.shortcuts import resolve_url as r


class CityViewSetList(APITestCase):
    def setUp(self):
        self.obj = {'cities': [
            {"cod":"C00001", "nome":"Curitiba"}
        ]}
        self.response = self.client.get(r('api:city-list'))

    def test_get(self):
        self.assertTrue(status.is_success(self.response.status_code))

    def test_content(self):
        self.assertEqual(self.response.data, self.obj)


class CityViewSetRetrieve(APITestCase):
    def setUp(self):
        self.obj = {"cod":"C00001", "nome":"Curitiba"}
        self.response = self.client.get(r('api:city-detail', pk=1))

    def test_get(self):
        self.assertTrue(status.is_success(self.response.status_code))

    def test_content(self):
        self.assertEqual(self.response.data, self.obj)
