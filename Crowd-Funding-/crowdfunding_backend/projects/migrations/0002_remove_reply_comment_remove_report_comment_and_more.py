# Generated by Django 5.1.6 on 2025-04-04 01:13

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveField(
            model_name='reply',
            name='comment',
        ),
        migrations.RemoveField(
            model_name='report',
            name='comment',
        ),
        migrations.RemoveField(
            model_name='rating',
            name='project',
        ),
        migrations.RemoveField(
            model_name='rating',
            name='user',
        ),
        migrations.RemoveField(
            model_name='reply',
            name='user',
        ),
        migrations.RemoveField(
            model_name='report',
            name='project',
        ),
        migrations.RemoveField(
            model_name='report',
            name='user',
        ),
        migrations.RenameField(
            model_name='donation',
            old_name='created_at',
            new_name='date',
        ),
        migrations.RenameField(
            model_name='project',
            old_name='end_date',
            new_name='end_time',
        ),
        migrations.RenameField(
            model_name='project',
            old_name='created_by',
            new_name='owner',
        ),
        migrations.RenameField(
            model_name='project',
            old_name='start_date',
            new_name='start_time',
        ),
        migrations.RemoveField(
            model_name='project',
            name='images',
        ),
        migrations.AddField(
            model_name='project',
            name='image',
            field=models.ImageField(default='blank.jpg', upload_to='images/'),
        ),
        migrations.AddField(
            model_name='project',
            name='slug',
            field=models.SlugField(blank=True, unique=True),
        ),
        migrations.AlterField(
            model_name='donation',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='donations', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='project',
            name='category',
            field=models.CharField(choices=[('Tech', 'Technology'), ('Health', 'Health'), ('Education', 'Education'), ('Art', 'Art'), ('Other', 'Other')], max_length=50),
        ),
        migrations.AlterField(
            model_name='project',
            name='tags',
            field=models.ManyToManyField(blank=True, to='projects.tag'),
        ),
        migrations.DeleteModel(
            name='Comment',
        ),
        migrations.DeleteModel(
            name='Rating',
        ),
        migrations.DeleteModel(
            name='Reply',
        ),
        migrations.DeleteModel(
            name='Report',
        ),
    ]
