from flask import Flask
from flask_cors import CORS

from .extensions import api, db
from .resources import ns

import os

def create_app():
    app = Flask(__name__)
    CORS(app)

    # Define Database
    # Use local development sqlite3 db
    app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get('DATABASE_URL')

    # create instance of api and db
    api.init_app(app)
    db.init_app(app)

    # Adds routes to swagger
    api.add_namespace(ns)

    return app
