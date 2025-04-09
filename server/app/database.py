from pymongo import MongoClient
import os
from dotenv import load_dotenv
import gridfs

# Charger les variables d'environnement
load_dotenv()

# Connexion MongoDB
MONGO_URI = "mongodb://mongodb:27017/twitterdb"
client = MongoClient(MONGO_URI)
db = client["twitterdb"]

fs = gridfs.GridFS(db, collection="media")