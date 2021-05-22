from flaskr import create_app
from flask_restful import Api
from .modelos import db
from .vistas import VistaCanciones

app = create_app('default')
app_context = app.app_context()
app_context.push()

db.init_app(app)
db.create_all()

api = Api(app)
api.add_resource(VistaCanciones, '/canciones')