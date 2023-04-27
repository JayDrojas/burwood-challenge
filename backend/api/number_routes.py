import db as db
import pymongo
from bson.json_util import dumps
from flask import Blueprint, jsonify, request
from bson.json_util import dumps

number_routes = Blueprint('inputs', __name__)

@number_routes.route('/')
def get_numbers():
    result = list(db.db.collection.find({}).sort(
        [("count", pymongo.DESCENDING)]).limit(3))

    return dumps(result)

@number_routes.route('/', methods=['POST'])
def create_number():
    input_data = request.json.get('user_input')
    input_exists = db.db.collection.find_one_and_update(
        {"user_input": int(input_data)}, {"$inc": {"count": 1}})

    if input_exists:
        return dumps(list(db.db.collection.find({}).sort(
        [("count", pymongo.DESCENDING)]).limit(3)))
    
    input_create = db.db.collection.insert_one({"user_input": int(input_data), "count": 1})

    if input_create:
        return dumps(list(db.db.collection.find({}).sort(
        [("count", pymongo.DESCENDING)]).limit(3)))

    return jsonify('failed')

@number_routes.route("/all")
def api_get_all_numbers():
    result = list(db.db.collection.find_one({}))
    return dumps(result)
