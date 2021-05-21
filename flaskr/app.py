from flaskr import create_app
from .modelos import db, Cancion

app = create_app('default')
app_context = app.app_context()
app_context.push()
db.init_app(app)
db.create_all()

with app.app_context():
    c = Cancion(titulo="Prueba", minutos=2, segundos=20, interprete="Sultanito")
    db.session.add(c)
    db.session.commit()
    print(Cancion.query.all())