from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.response import Response


class MedicViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving medics.
    """
    def list(self, request):
        '''
        /apiv0/medic
        '''
        data = {
            'medics': [
                {"cod":"P00001", "nome":"João da Silva"}
            ]
        }
        return Response(data)

    def retrieve(self, request, pk=None):
        '''
        /apiv0/medic/1
        '''
        return Response({"cod":"P00001", "nome":"João da Silva"})


class CityViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving cities.
    """
    def list(self, request):
        '''
        /apiv0/city
        '''
        data = {
            'cities': [
                {"cod":"C00001", "nome":"Curitiba"}
            ]
        }
        return Response(data)

    def retrieve(self, request, pk=None):
        '''
        /apiv0/city/1
        '''
        return Response({"cod":"C00001", "nome":"Curitiba"})


class SpecialtyViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving specialties.
    """
    def list(self, request):
        '''
        /apiv0/specialty
        '''
        data = {
            'specialties': [
                {"cod":"E00001", "nome":"Cardiologia"}
            ]
        }
        return Response(data)

    def retrieve(self, request, pk=None):
        '''
        /apiv0/specialty/1
        '''
        return Response({"cod":"E00001", "nome":"Cardiologia"})
