from flask_restful import Api, Resource
from celery import Celery
from flaskr import create_app
from .modelos import db, Cancion, CancionSchema

cancion_schema = CancionSchema()

app = create_app('default')
app_context = app.app_context()
app_context.push()

db.init_app(app)
db.create_all()

class VistaTablaPuntaje(Resource):

    def get(self):
        return [cancion_schema.dump(ca) for ca in Cancion.query.all()]

api = Api(app)
api.add_resource(VistaTablaPuntaje, '/tablaPuntajes')
