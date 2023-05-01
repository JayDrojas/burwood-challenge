from db import fizznumbers
import pymongo
from bson.json_util import dumps
from flask import Blueprint, jsonify, request
from pymongo import MongoClient

input_routes = Blueprint('inputs', __name__)

TOP_LIMIT = 3

def get_top_inputs():

    result = list(fizznumbers.find({}).sort(
        [("count", pymongo.DESCENDING)]).limit(TOP_LIMIT))

    return dumps(result)

@input_routes.route('/')
def get_inputs():
    return get_top_inputs()

@input_routes.route('/', methods=['POST'])
def create_input():
    input_data = request.json.get('user_input')
    input_exists = fizznumbers.find_one_and_update(
        {"user_input": int(input_data)}, {"$inc": {"count": 1}})

    if input_exists:
        return get_top_inputs()
    
    try:
        fizznumbers.insert_one({"user_input": int(input_data), "count": 1})
        return get_top_inputs()
    except:
        return jsonify('failed')

@input_routes.route("/all")
def api_get_all_inputs():
    result = list(fizznumbers.find({}))
    return dumps(result)