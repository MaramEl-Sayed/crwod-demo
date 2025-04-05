from django.urls import path
from .views import ProjectListCreateView, ProjectDetailView, DonationListCreateView

app_name = "projects"

urlpatterns = [
    path("", ProjectListCreateView.as_view(), name="project-list"),
    path("<int:pk>/", ProjectDetailView.as_view(), name="project-detail"),
    path("donations/", DonationListCreateView.as_view(), name="donation-list"),
]
