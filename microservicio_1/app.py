from microservicio_1 import create_app
from flask_restful import Resource, Api
from flask import Flask, request
import requests
import json

app = create_app('default')
app_context = app.app_context()
app_context.push()
api = Api(app)
api.init_app(app)

class VistaPuntuacion(Resource):

    def post(self, id_cancion):
        content = requests.get('http://127.0.0.1:5000/cancion/{}'.format(id_cancion))
        print(content)
        cancion = content.json()
        cancion["puntaje"] = request.json["puntaje"]
        print(json.dumps(cancion))
        return json.dumps(cancion)

api.add_resource(VistaPuntuacion, '/cancion/<int:id_cancion>/puntuar')