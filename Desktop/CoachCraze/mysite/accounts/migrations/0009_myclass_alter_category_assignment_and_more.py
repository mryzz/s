# Generated by Django 4.2.9 on 2024-01-23 22:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_category_assignment'),
    ]

    operations = [
        migrations.CreateModel(
            name='MyClass',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('last_modified', models.DateTimeField(auto_now=True)),
                ('categories', models.ManyToManyField(related_name='classes', to='accounts.category')),
                ('creator', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.profile')),
            ],
        ),
        migrations.AlterField(
            model_name='category',
            name='assignment',
            field=models.ManyToManyField(related_name='category', to='accounts.myclass'),
        ),
        migrations.AlterField(
            model_name='comment',
            name='assignment',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.myclass'),
        ),
        migrations.DeleteModel(
            name='Assignment',
        ),
    ]
