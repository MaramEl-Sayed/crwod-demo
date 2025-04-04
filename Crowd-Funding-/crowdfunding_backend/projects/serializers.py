from rest_framework import serializers
from .models import Project, Donation, Tag


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ["id", "name"]


class ProjectSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source="owner.username")
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "details",
            "category",
            "tags",
            "total_target",
            "start_time",
            "end_time",
            "image",
            "owner",
            "slug",
        ]


class DonationSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source="user.username")
    project = serializers.ReadOnlyField(source="project.title")

    class Meta:
        model = Donation
        fields = ["id", "user", "project", "amount", "date"]
