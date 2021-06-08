from flaskr import create_app, celery

app = create_app('default')

if __name__ == '__main__':
    with app.app_context():
        celery.start()