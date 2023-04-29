import os
from dotenv import load_dotenv
from flask_pymongo import pymongo

load_dotenv()

CONNECTION_STRING = os.environ.get("DATABASE_URL")
client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database('flask_inputs')