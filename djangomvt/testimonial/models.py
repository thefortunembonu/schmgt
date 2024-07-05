from django.db import models
from user_mgt.models import Account
# Create your models here.

class Testimonial(models.Model):
    
    STATUS_CHOICES = (
        ('Knoxx Alumni', 'Knoxx Alumni'),
        ('Knoxx Academic Staff', 'Knoxx Academic Staff'),
        ('Knoxx Non-Academic Staff', 'Knoxx Non-Academic Staff'),
        ('Knoxx Student', 'Knoxx Student'),
    )
    testifier = models.ForeignKey(Account, null=True, blank=True, on_delete=models.CASCADE)
    content = models.TextField()
    status = models.CharField(max_length=50, choices=STATUS_CHOICES)
    created_at = models.DateField(auto_now_add=True, null=True, blank=True)
    is_published = models.BooleanField(default=False)
    is_blacklisted = models.BooleanField(default=False)
    
    def __str__(self):
        return 'Testimony by ' +  self.testifier.first_name + ' ' + self.testifier.last_name 
