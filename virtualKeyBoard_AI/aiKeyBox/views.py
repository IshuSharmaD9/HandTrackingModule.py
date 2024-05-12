from django.http import JsonResponse

from keyMain import run_keyboard


# Create your views here.

def test(request):
    run_keyboard()
    return JsonResponse({"Status": "Gesture Window is Ready!!!!"})
