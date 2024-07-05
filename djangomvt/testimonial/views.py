from .serializers import TestimonialSerializer
from .models import Testimonial
from rest_framework import status
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

# Create your views here.
@api_view(['GET',])
@permission_classes([permissions.AllowAny,])
def get_testimonial(request):
  
    if request.method == 'GET':
        testimonial = Testimonial.objects.filter(is_published=True)
        serializer = TestimonialSerializer(testimonial, many=True)
        return Response({'testimonials':serializer.data}, status=status.HTTP_200_OK)
    else:
        return Response({'error':"Something went wrong"})
        