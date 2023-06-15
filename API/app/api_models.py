from flask_restx import fields

from .extensions import api

class MyDateFormat(fields.Raw):
    def format(self, value):
        return value.strftime('%Y-%m-%d')

# format for an event returned
event_model = api.model("Pride Historical Event", {
    'id': fields.Integer,
    'event': fields.String,
    'date': fields.String,
    'country': fields.String,
    'region': fields.String,
    'description': fields.String,
    "image_link": fields.String,
    "lat": fields.String,
    'long': fields.String
})

# format for inputting an event (create or edit)
event_input_model = api.model("EventInput", {
    'event': fields.String,
    'date': fields.String,
    'country': fields.String,
    'region': fields.String,
    'description': fields.String,
    "image_link": fields.String,
    "lat": fields.String,
    'long': fields.String
})