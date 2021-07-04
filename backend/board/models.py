from django.db import models

class Note(models.Model):
    """ Represents a note with a text"""
    text = models.CharField(max_length=100)
