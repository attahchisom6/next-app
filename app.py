#!/usr/bin/env python3

"""
The app interface
"""
from flask import Flask
from chatbot_assistant import socketio, chat_view
from flask_cors import CORS
from dotenv import load_dotenv

app = Flask(__name__)
app.register_blueprint(chat_view)

Cors(
      app,
      resources={r"*": {"origins": "/api/v1/*"}}
    )

#load enviroment variabls
load_dotenv()

app.config.from_object("config.ConfigClass")

socketio.init_app(app)

i if name == "main":
  socketio.run(app, debug=True, port=5001)
