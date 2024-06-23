#!/usr/bin/env python3

from flask import Flask
from chatbot_assistant import socketio, chat_view
from flask_cors import CORS
import os

def create_app():
    """
    manufacture app qith necesarry dependencies initialized
    """
    print("OPENAI_API_KEYyy:", os.getenv("OPENAI_API_KEY"))

    app = Flask(__name__)
    app.register_blueprint(chat_view)

    CORS(
        app,
        resources={r"/api/v1/*": {"origins": "*"}}
    )

    app.config.from_object("config.ConfigClass")
    print(f"DEBUG: {app.config['DEBUG']}")
    print(f"KEY: {app.config['SECRET_KEY']}")

    socketio.init_app(app)

    return app
