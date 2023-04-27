from app import app
from dotenv import load_dotenv
import os
from flask_pymongo import pymongo

CONNECTION_STRING = os.environ.get("DATABASE_URL")
client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database('flask_inputs')
input_collection = pymongo.collection.Collection(db, 'input_collection')