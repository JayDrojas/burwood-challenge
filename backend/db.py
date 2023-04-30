from pymongo import MongoClient

client = MongoClient(host='test_mongodb',
                     port=27017,
                     username='admin',
                     password='password',
                     authSource='admin')
database = client['webapp']
fizznumbers = database['fizznumbers']