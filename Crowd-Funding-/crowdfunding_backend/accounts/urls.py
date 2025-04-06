from django.urls import path,include
from .api import register_user, activate_account
from .views import login_user
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns=[
    path('register/', register_user, name='register'),
    path('activate/<uidb64>/<token>/', activate_account, name='activate'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('login/', login_user, name='login'),

    ]