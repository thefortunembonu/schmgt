# Generated by Django 5.0.4 on 2024-06-18 12:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_rename_comments_comment'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='reply',
            options={'verbose_name_plural': 'Replies'},
        ),
        migrations.AddField(
            model_name='blog',
            name='is_blacklisted',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='blog',
            name='is_published',
            field=models.BooleanField(default=False),
        ),
    ]
