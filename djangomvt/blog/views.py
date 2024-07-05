from django.shortcuts import render
from rest_framework.response import Response
from .serializers import BlogSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions
from rest_framework import status
from .models import Blog

# Create your views here.
@api_view(['GET'])
@permission_classes([permissions.AllowAny,])
def get_blogs(request): 
    try: 
        blogs = Blog.objects.filter(is_published=True)
        if blogs is not None:
            serializer = BlogSerializer(blogs, many=True)
            return Response({'blogs': serializer.data})
        else :
            return Response({'error': 'No blogs to preview'})
    except:
        pass
        
    
@api_view(['GET'])
def get_blog(blog_id):  
    try:
        blog = Blog.objects.get(blog_id=blog_id)
        if not blog.DoesNotExist():
            serializer = BlogSerializer(blog)
            return Response({'blogs': serializer.data})
        else :
            return Response({'error': "Blog does not exist"})
    except:
        pass
    



@api_view(['POST', 'GET'])
@permission_classes([permissions.AllowAny])
def post_blog(request):  
    if request.method == 'POST':
        data = request.POST.copy()
        data['img'] = request.FILES.get('img')
        
        serializer = BlogSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'blogs': serializer.data}, status=status.HTTP_201_CREATED)
        else:
            return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['DELETE'])
@permission_classes([permissions.AllowAny,])
def delete_blog(request, blog_id):  
    try:
        if request.method == 'DELETE':
            blog = Blog.objects.get(blog_id=blog_id)
            blog.delete()
            return Response({'message': "Blog deleted"}, status=status.HTTP_200_OK)
    except Blog.DoesNotExist:
        return Response({'message': "Blog does not exist"}, status=status.HTTP_404_NOT_FOUND)
        

