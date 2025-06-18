from django.db import models

# Create your models here.
class Pet (models.Model):
    name = models.CharField(max_length=100)
    race = models.CharField()
    age = models.PositiveIntegerField()

class Appointment (models.Model):
    procedure = models.CharField()
    date = models.DateField()
    time = models.TimeField(default='0:00')
    priority = models.CharField(max_length=20, default='low')
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE, related_name='appointments')