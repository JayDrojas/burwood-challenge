import db as db
import pymongo
from bson.json_util import dumps
from flask import Blueprint, jsonify, request
from bson.json_util import dumps

number_routes = Blueprint('inputs', __name__)

@number_routes.route('/')
def get_numbers():
    result = db.db.collection.find({}).sort([("count", pymongo.DESCENDING)])

    return jsonify(dumps(result))

@number_routes.route("/add")
def api_get_all_inputs():
    db.db.collection.insert_one({"user_input": 10, "count": 1})
    return "Connected to the data base!"