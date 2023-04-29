import os
from bson.json_util import dumps
from flask import Flask, jsonify
from flask_cors import CORS
from api.input_routes import input_routes
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.register_blueprint(input_routes, url_prefix='/api/inputs')

@app.route("/")
def api_home():
    return jsonify("Home")

port = os.environ.get('PORT', 8000)

# Error handling
@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(500)
def internal_server_error(error):
    return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    app.run(port=port)
