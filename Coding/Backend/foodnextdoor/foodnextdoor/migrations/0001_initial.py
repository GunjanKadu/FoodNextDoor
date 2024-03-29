# Generated by Django 3.0.4 on 2020-03-10 08:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import foodnextdoor.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='Chef',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.CharField(blank=True, default='https://www.xing.com/image/e_c_e_924dbdc05_26384775_3/christoph-dran%C3%9F-foto.256x256.jpg', max_length=400)),
            ],
        ),
        migrations.CreateModel(
            name='Cuisine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='Dish',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('available', models.BooleanField(default=True)),
                ('dish_name', models.CharField(max_length=300)),
                ('spicy', models.IntegerField()),
                ('price', models.FloatField()),
                ('description', models.CharField(blank=True, default='', max_length=400)),
                ('img', models.CharField(blank=True, default='https://b.zmtcdn.com/data/dish_photos/235/d172c324ff062397264ad328c5b53235.JPG?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A', max_length=400)),
                ('category', models.ManyToManyField(to='foodnextdoor.Category')),
                ('chef', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='dishes', to='foodnextdoor.Chef')),
                ('cuisine', models.ManyToManyField(to='foodnextdoor.Cuisine')),
            ],
        ),
        migrations.CreateModel(
            name='FoodType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='Vegan', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='PaymentMethod',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='UserRoles',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer', models.BooleanField(default=True)),
                ('chef', models.BooleanField(default=False)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='user_roles', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='UserAddress',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('street', models.CharField(default=foodnextdoor.models.default_street, max_length=300)),
                ('city', models.CharField(default=foodnextdoor.models.default_city, max_length=300)),
                ('bio', models.CharField(default='No Bio Found.', max_length=600)),
                ('state', models.CharField(default=foodnextdoor.models.default_state, max_length=300)),
                ('country', models.CharField(default=foodnextdoor.models.default_country, max_length=300)),
                ('zipcode', models.CharField(default=foodnextdoor.models.default_zipcode, max_length=300)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='addresses', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='DishLikes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('likecount', models.IntegerField(default=foodnextdoor.models.random_number)),
                ('dish', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='foodnextdoor.Dish')),
            ],
        ),
        migrations.AddField(
            model_name='dish',
            name='foodtype',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='foodnextdoor.FoodType'),
        ),
        migrations.AddField(
            model_name='chef',
            name='pickup_address',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='foodnextdoor.UserAddress'),
        ),
        migrations.AddField(
            model_name='chef',
            name='user',
            field=models.OneToOneField(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='chef_object', to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='DishReview',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.IntegerField()),
                ('title', models.CharField(max_length=500)),
                ('description', models.CharField(max_length=500)),
                ('dish', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='foodnextdoor.Dish')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews_given', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('user', 'dish')},
            },
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_datetime', models.DateTimeField(auto_now_add=True)),
                ('count', models.IntegerField()),
                ('dish', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='foodnextdoor.Dish')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cart', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('user', 'dish')},
            },
        ),
    ]
