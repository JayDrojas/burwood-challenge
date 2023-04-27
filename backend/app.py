import db
import os
import pymongo
from bson.json_util import dumps
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from api.number_routes import number_routes
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.register_blueprint(number_routes, url_prefix='/api/inputs')

@app.route("/")
def api_home():
    return jsonify("Home")

if __name__ == '__main__':
    app.run(port=8000)
