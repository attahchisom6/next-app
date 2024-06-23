#!/usr/bin/env python3

"""
The app interface
"""
from chatbot_assistant import socketio
from chatbot_assistant.app_factory import create_app # app_factory import create_app

app = create_app()

if __name__ == "__main__":
  socketio.run(app, debug=True, allow_unsafe_werkzeug=True, port=5001)
