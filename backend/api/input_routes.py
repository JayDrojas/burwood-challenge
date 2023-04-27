import db as db
import pymongo
from bson.json_util import dumps
from flask import Blueprint, jsonify, request
from bson.json_util import dumps

input_routes = Blueprint('inputs', __name__)

@input_routes.route('/')
def get_inputs():
    result = list(db.db.collection.find({}).sort(
        [("count", pymongo.DESCENDING)]).limit(3))

    return dumps(result)

@input_routes.route('/', methods=['POST'])
def create_input():
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

@input_routes.route("/all")
def api_get_all_inputs():
    result = list(db.db.collection.find({}))
    return dumps(result)
