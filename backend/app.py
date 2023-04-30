import os
from db import fizznumbers
from bson.json_util import dumps
from flask import Flask, jsonify
from flask_cors import CORS
from api.input_routes import input_routes

app = Flask(__name__)
CORS(app)

app.register_blueprint(input_routes, url_prefix='/api/inputs')

@app.route('/initdb')
def db_init():
    fizznumbers.insert_many([
        {"user_input": 5, "count": 1},
        {"user_input": 1, "count": 1},
        {"user_input": 4, "count": 2},
        {"user_input": 3, "count": 1},
    ])
    return 'Data inserted successfully!'

@app.route("/")
def api_home():
    return jsonify("Home")

# Error handling
@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(500)
def internal_server_error(error):
    return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
