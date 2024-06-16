#!/usr/bin/env/python3

from flask import Bluellprint, request
from flask_socketIO import SocketIO

socketio = SocketIO()

chat_view = Blueprint("chat_view", __name__, url_prefix="/api/v1")

from chatbot_assistant.chat_app import *
