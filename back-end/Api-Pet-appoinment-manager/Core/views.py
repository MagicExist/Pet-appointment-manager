from rest_framework import viewsets
from .models import Pet,Appointment
from .serializer import PetSerializer,AppointmentSerializer

# Create your views here.

class AppointmentViewSet (viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    

