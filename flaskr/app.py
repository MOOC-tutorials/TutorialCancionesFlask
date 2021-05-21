from flaskr import create_app
from .modelos import db, Album, AlbumSchema, Medio

app = create_app('default')
app_context = app.app_context()
app_context.push()
db.init_app(app)
db.create_all()

with app.app_context():

    a = Album(titulo="Prueba", anio=1999, descripcion="Lorem Ipsum", medio=Medio.CASETE)
    a_schema = AlbumSchema()
    db.session.add(a)
    db.session.commit()
    print([a_schema.dump(a) for c in Album.query.all()])