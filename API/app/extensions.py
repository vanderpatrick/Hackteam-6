from flask_sqlalchemy import SQLAlchemy 
from flask_restx import Api

# assign variables for api and SQLAlchemy classes
api = Api()
db = SQLAlchemy()