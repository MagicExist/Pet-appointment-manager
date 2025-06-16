from rest_framework import serializers
from .models import Pet,Appointment

class PetSerializer (serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = '__all__'

class AppointmentSerializer (serializers.ModelSerializer):
    pet = PetSerializer()

    class Meta:
        model = Appointment
        fields = '__all__'
    
    def create(self, validated_data):
        pet_data = validated_data.pop('pet')
        pet = Pet.objects.create(**pet_data)
        return Appointment.objects.create(pet=pet, **validated_data)
    
    def update(self, instance, validated_data):
        pet_data = validated_data.pop('pet', None)
        if pet_data:
            for attr, value in pet_data.items():
                setattr(instance.pet, attr, value)
            instance.pet.save()
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance