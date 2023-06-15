from .extensions import db 

# DB model for event
class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    event = db.Column(db.String(50), unique=True)
    date = db.Column(db.Date)
    country = db.Column(db.String(30))
    region = db.Column(db.String(30))
    description = db.Column(db.String(350))
    image_link = db.Column(db.String(350))
    lat = db.Column(db.String(12))
    long = db.Column(db.String(12))
