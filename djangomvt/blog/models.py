import uuid
from django.db import models
from user_mgt.models import Account

class Reply(models.Model):
    reply_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    reply = models.TextField(blank=True, null=True)
    reply_by = models.ForeignKey(Account, null=True, blank=True, on_delete=models.DO_NOTHING)
    number_of_like_reactions = models.IntegerField(default=0, null=True, blank=True)
    number_of_dislike_reactions = models.IntegerField(default=0, null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f" Reply by {self.reply_by.first_name}"
    class Meta:
        verbose_name_plural = 'Replies'

class Comment(models.Model):
    comment_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    comment = models.TextField(blank=True, null=True)
    comment_by = models.ForeignKey(Account, null=True, blank=True, on_delete=models.DO_NOTHING)
    date_created = models.DateTimeField(auto_now_add=True)
    number_of_like_reactions = models.IntegerField(default=0, null=True, blank=True)
    number_of_dislike_reactions = models.IntegerField(default=0, null=True, blank=True)
    replies = models.ManyToManyField(Reply, blank=True)

    def __str__(self):
        return f" Comment by {self.comment_by.first_name}"
  

class Blog(models.Model):
    blog_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255, default='No Title')
    content = models.TextField(default='No Content')
    created_by = models.ForeignKey(Account, null=True, blank=True, on_delete=models.DO_NOTHING)
    date_created = models.DateTimeField(auto_now_add=True)
    img = models.ImageField(upload_to='blog/images', null=True, blank=True)
    comments = models.ManyToManyField(Comment, blank=True)
    is_published = models.BooleanField(default=False)
    is_blacklisted = models.BooleanField(default=False)


    def image_url(self):
        return f"http://localhost:8000{self.img.url}"
    
    def __str__(self):
        return f"{self.title} by {self.created_by}"
