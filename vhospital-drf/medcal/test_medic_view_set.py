from rest_framework.test import APITestCase
from rest_framework import status
from django.shortcuts import resolve_url as r


class MedicViewSetList(APITestCase):
    def setUp(self):
        self.obj = {'medics': [
            {"cod":"P00001", "nome":"João da Silva"}
        ]}
        self.response = self.client.get(r('api:medic-list'))

    def test_get(self):
        self.assertTrue(status.is_success(self.response.status_code))

    def test_content(self):
        self.assertEqual(self.response.data, self.obj)


class MedicViewSetRetrieve(APITestCase):
    def setUp(self):
        self.obj = {"cod":"P00001", "nome":"João da Silva"}
        self.response = self.client.get(r('api:medic-detail', pk=1))

    def test_get(self):
        self.assertTrue(status.is_success(self.response.status_code))

    def test_content(self):
        self.assertEqual(self.response.data, self.obj)
