from __future__ import unicode_literals

from django.db import models


class Paciente(models.Model):
    # id = models.IntegerField(primary_key=True)
    nome = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.nome


class Especialidade(models.Model):
    # id = models.IntegerField(primary_key=True)
    nome = models.CharField(
        max_length=100, blank=True, null=True
    )

    def __str__(self):
        return self.nome


class Medico(models.Model):
    # id = models.IntegerField(primary_key=True)
    nome = models.CharField(max_length=100, blank=True, null=True)
    especialidade = models.ForeignKey(
        Especialidade, models.CASCADE, blank=True, null=True
    )

    def __str__(self):
        return self.nome


class Agenda(models.Model):
    # id = models.IntegerField(primary_key=True)
    medico = models.ForeignKey('Medico', models.CASCADE)
    datahora = models.DateTimeField()
    paciente = models.ForeignKey(
        'Paciente',
        models.CASCADE,
        blank=True,
        null=True
    )

    class Meta:
        unique_together = (
            ('id', 'medico', 'datahora'),
        )

    def __str__(self):
        return '{} - {}'.format(self.medico.nome, self.paciente.nome)


class Cidade(models.Model):
    # id = models.IntegerField(primary_key=True)
    nome = models.CharField(max_length=100)


class Localizacao(models.Model):
    # id = models.IntegerField(primary_key=True)
    cep = models.CharField(max_length=9, blank=True, null=True)
    rua = models.CharField(max_length=45, blank=True, null=True)
    num = models.CharField(max_length=5, blank=True, null=True)
    compl = models.CharField(
        max_length=45, blank=True, null=True
    )

    bairro = models.CharField(
        max_length=45, blank=True, null=True
    )

    cidade = models.ForeignKey(
        'Cidade',
        models.CASCADE,
        blank=True,
        null=True
    )

    estado = models.CharField(
        max_length=2, blank=True, null=True
    )

    medico = models.ForeignKey(
        'Medico', models.CASCADE, blank=True, null=True
    )
