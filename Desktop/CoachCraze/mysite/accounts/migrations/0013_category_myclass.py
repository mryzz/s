# Generated by Django 4.2.9 on 2024-01-23 23:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0012_remove_category_myclass_alter_myclass_categories'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='myclass',
            field=models.ManyToManyField(related_name='category', to='accounts.myclass'),
        ),
    ]