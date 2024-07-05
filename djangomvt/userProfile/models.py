import uuid
from django.db import models
from django.contrib.auth import get_user_model




User = get_user_model()

# Create your models here.


class UserProfile(models.Model):
    SEX_CHOICES = (
        ('Male', 'M'),
        ('Female', 'F'),   
    )
    id = models.UUIDField(editable=False, primary_key=True, default=uuid.uuid4)
    user = models.OneToOneField('user_mgt.Account', on_delete=models.CASCADE)
    bio = models.TextField(blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
    first_name = models.CharField(max_length=50, blank=True, null=True)
    other_name = models.CharField(max_length=50, blank=True, null=True)
    last_name = models.CharField(max_length=50, blank=True, null=True)
    sex = models.CharField(max_length=6,blank=True, null=True,choices=SEX_CHOICES)
    dob = models.DateField(blank=True, null=True)
    res_addr = models.CharField(max_length=50, blank=True, null=True)
    state_of_origin= models.CharField(max_length=50, blank=True, null=True)
    nationality = models.CharField(max_length=50, blank=True, null=True)
    
    
        
    def save(self, *args, **kwargs):
        if not self.first_name and self.user:
            self.first_name = self.user.first_name
        if not self.last_name and self.user:
            self.last_name = self.user.last_name
        if not self.email and self.user:
            self.email = self.user.email
        super().save(*args, **kwargs)
        
    def __str__(self):
        return f"Profile of {self.user.first_name +' '+ self.user.last_name if self.user else 'Unknown User'}"