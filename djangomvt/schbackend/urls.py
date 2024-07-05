
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/', include('user_mgt.urls')),
    path('profile/', include('userProfile.urls')),
    path('blogs/', include('blog.urls')),
    path('testimonials/', include('testimonial.urls'))
   
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)