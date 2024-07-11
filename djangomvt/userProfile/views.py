from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .serializers import UserProfileSerializer
from .models import UserProfile


User = get_user_model()

class GetUserProfile(APIView):
    def get(self, request, format=None):
        try:
            user = self.request.user
            user = User.objects.get(id=user.id)
            email = user.email
            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile)
            
            return Response({'profile': user_profile.data, 'email': str(email)})
        except:
            return Response({'error': 'Something went wrong while getting user profile'})
        



class UpdateUserProfile(APIView):
    def put(self, request, format=None):
        try:
            user = self.request.user
            data = self.request.data
            first_name = data['first_name']
            mid_name = data['mid_name']
            last_name = data['last_name']
            city = data['city']
            nationality = data['nationality']
            
            user = User.objects.get(id=user.id)
        
            user_profile = UserProfile.objects.get(user=user)
            
            UserProfile.objects.filter(user=user).update(
                first_name=first_name,
                last_name = last_name,
                mid_name = mid_name,
                city = city,
                nationality = nationality
            )
            
            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile)
            
            return Response({'profile': user_profile.data})
        except:
            return Response({'error':'Something went wrong while updating user profile'})