from rest_framework import serializers
from .models import Testimonial
from user_mgt.serializers import UserSerializer


class TestimonialSerializer(serializers.ModelSerializer):
    testifier_first_name = serializers.CharField(source='testifier.first_name', read_only=True)
    testifier_last_name = serializers.CharField(source='testifier.last_name', read_only=True)

    class Meta:
        model = Testimonial
        fields = ['id', 'content', 'status', 'created_at', 'testifier_last_name', 'testifier_first_name', 'is_published', 'is_blacklisted']