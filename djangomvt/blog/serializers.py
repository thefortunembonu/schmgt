from rest_framework import serializers
from user_mgt.serializers import UserSerializer
from .models import Blog, Comment, Reply

class ReplySerializer(serializers.ModelSerializer):
    replier_first_name = serializers.CharField(source="reply_by.first_name", read_only=True)
    replier_last_name = serializers.CharField(source="reply_by.last_name", read_only=True)
    
    class Meta:
        model = Reply
        fields = ['reply_id', 'replier_first_name', 'replier_last_name', 'reply', 'date_created', 'number_of_dislike_reactions', 'number_of_like_reactions']

class CommentSerializer(serializers.ModelSerializer):
    commenter_first_name = serializers.CharField(source="comment_by.first_name", read_only=True)
    commenter_last_name = serializers.CharField(source="comment_by.last_name", read_only=True)
    replies = ReplySerializer(many=True, read_only=True)
    
    class Meta:
        model = Comment
        fields = ['comment_id', 'commenter_first_name', 'commenter_last_name', 'comment', 'date_created', 'number_of_dislike_reactions', 'number_of_like_reactions', 'replies']

class BlogSerializer(serializers.ModelSerializer):
    author_first_name = serializers.CharField(source="created_by.first_name", read_only=True)
    author_last_name = serializers.CharField(source="created_by.last_name", read_only=True)

    comments = CommentSerializer(many=True, read_only=True)
    
    class Meta:
        model = Blog
        fields = ['blog_id', 'title', 'content', 'img','author_first_name', 'author_last_name','date_created', 'image_url', 'comments', 'is_published', 'is_blacklisted']
