from flask_restx import Resource, Namespace 
from datetime import datetime

from .api_models import event_model, event_input_model, contact_model, contact_input_model
from .extensions import db
from .models import Event, Contact

# Create a namespace (i.e. base_url/api/)
ns = Namespace("api")

# create route for seeing all events and adding an event
@ns.route("/events")
class EventsListAPI(Resource):
    # see all events in db
    # marshall is to return the format defined in event_model
    @ns.marshal_list_with(event_model)
    def get(self):
        return Event.query.all()
    
    # Create event in db
    # expect sets the format of payload expected
    @ns.expect(event_input_model)
    @ns.marshal_with(event_model)
    def post(self):
        
        event = Event(
            event = ns.payload["event"],
            date = datetime.strptime(ns.payload["date"], '%Y-%m-%d'),
            country = ns.payload["country"],
            region = ns.payload["region"],
            description = ns.payload["description"],
            image_link = ns.payload["image_link"],
            lat = ns.payload["lat"],
            long = ns.payload["long"]
        )
        db.session.add(event)
        db.session.commit()

        return event, 201

# Route and function for filtering by year
@ns.route("/events/<string:country>")
class EventByCountry(Resource):

    @ns.marshal_list_with(event_model)
    def get(self, country):
        all_events = Event.query.all()
        events_this_year = []
        for event in all_events:
            if event.country.lower() == country.lower():
                events_this_year.append(event)

        return events_this_year[0]

# Create route for deleting and editing
@ns.route("/events/<int:id>")
class EventByYear(Resource):

    def delete(self, id):
        event = Event.query.get(id)
        db.session.delete(event)
        db.session.commit()
        return {}, 204
    
    @ns.expect(event_input_model)
    @ns.marshal_with(event_model)
    def put(self, id):
        event = Event.query.get(id)
        event.date = datetime.strptime(ns.payload["date"], '%Y-%m-%d')
        event.country = ns.payload["country"]
        event.region = ns.payload["region"]
        event.description = ns.payload["description"]
        event.image_link = ns.payload["image_link"]
        event.lat = ns.payload["lat"]
        event.long = ns.payload["long"]
        db.session.commit()
        return event

# create route for seeing all events and adding an event
@ns.route("/contacts")
class ContactAPI(Resource):
    # see all events in db
    # marshall is to return the format defined in event_model
    @ns.marshal_list_with(contact_model)
    def get(self):
        return Contact.query.all()
    
    # Create event in db
    # expect sets the format of payload expected
    @ns.expect(contact_input_model)
    @ns.marshal_with(contact_model)
    def post(self):
        
        contact = Contact(
            email = ns.payload["email"],
            country = ns.payload["country"],
            description = ns.payload["description"],
        )
        db.session.add(contact)
        db.session.commit()

        return contact, 201