#!/usr/bin/env/python3

from flask import Blueprint, request
from flask_socketio import SocketIO
from dotenv import load_dotenv

load_dotenv()
socketio = SocketIO()

chat_view = Blueprint("chat_view", __name__, url_prefix="/api/v1")
from chatbot_assistant.chat_app import *



