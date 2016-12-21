import django_filters.rest_framework
from rest_framework import viewsets
from rest_framework import filters
from rest_framework import mixins

from medcal.models import Medico
from medcal.models import Cidade
from medcal.models import Paciente
from medcal.models import Localizacao
from medcal.models import Especialidade
from medcal.models import Agenda

from medcal.serializers import MedicoSerializer
from medcal.serializers import CidadeSerializer
from medcal.serializers import PacienteSerializer
from medcal.serializers import LocalizacaoSerializer
from medcal.serializers import EspecialidadeSerializer
from medcal.serializers import AgendaSerializer


class MedicoFilter(django_filters.rest_framework.FilterSet):
    especialidade = django_filters.NumberFilter(name="especialidade__id")
    localizacao = django_filters.NumberFilter(name="localizacao__id")

    class Meta:
        model = Medico
        fields = ['nome', 'especialidade', 'localizacao']


class MedicoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Medico.objects.all()
    serializer_class = MedicoSerializer
    filter_backends = (
        django_filters.rest_framework.DjangoFilterBackend,
        filters.SearchFilter,
    )
    filter_class = MedicoFilter
    search_fields = (
        'nome',
        'localizacao__cidade__nome',
        'especialidade__nome'
    )


class PacienteViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer


class CidadeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Cidade.objects.all()
    serializer_class = CidadeSerializer


class LocalizacaoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Localizacao.objects.all()
    serializer_class = LocalizacaoSerializer


class EspecialidadeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Especialidade.objects.all()
    serializer_class = EspecialidadeSerializer


class UpdateListRetrieveViewSet(mixins.UpdateModelMixin,
                                mixins.ListModelMixin,
                                mixins.RetrieveModelMixin,
                                viewsets.GenericViewSet):
    """
    A viewset that provides `retrieve`, `update`, and `list` actions.

    To use it, override the class and set the `.queryset` and
    `.serializer_class` attributes.
    """
    pass


class AgendaFilter(django_filters.rest_framework.FilterSet):
    medico = django_filters.NumberFilter(name="medico__id")

    class Meta:
        model = Agenda
        fields = ['medico']


class AgendaViewSet(UpdateListRetrieveViewSet):
    queryset = Agenda.objects.all()
    serializer_class = AgendaSerializer
    filter_backends = (
        django_filters.rest_framework.DjangoFilterBackend,
        filters.SearchFilter,
    )
    filter_class = AgendaFilter
    search_fields = (
        'medico__nome',
        'medico__localizacao__cidade__nome',
        'medico__especialidade__nome'
    )
