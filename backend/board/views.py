
from rest_framework import viewsets
from .models import Note
from .serializers import NoteSerializer

# Create your views here.

class NoteViewSet(viewsets.ModelViewSet):
    """
    API endpoint to get all notes 
    """
    queryset = Note.objects.all()
    serializer_class = NoteSerializer