import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(os.path.abspath(os.path.dirname(__file__)), '../db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)

# required import at this level to avoid db circular import
from .views import todo_bp
app.register_blueprint(todo_bp, url_prefix='/todos')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)