#!/usr/bin/env python3

"""
Communication platform
"""


from flask import jsonify, request
from chatbot_assistant import chat_view
from openai import OpenAI, RateLimitError
from . import socketio
from flask_socketIO import emit


class REAL_TIME_MESSAGING:
  """
  handles instant request and real time chat
  """
  client = None
  def __init__(self):
    self.client = OpenAI(
        api_key=os.getenv("OPENAI_KEY")
        )

  def classification(message):
    """
    group user input messages and only accept those relating to abstract algebra
    """
    prompt = f"Classify this message {message}"
    completion = client.ChatCompletion.create(
        model="GPT-4-turbo",
        messages: [
          {"role": "system", "content": "I am a classifier assistant for input messages. Answer 'Yes' if {message} is about abstract algebra else anser 'No'"},
          {"role": "user", "content": prompt}
        ]
      ).strip()
    res = completion.choices[0].message["content"]

    return res == "Yes"

  @app_view.route('/instant_messaging', methods=["POST"], strict_slashes=False)
  def instant_messaging():
    """
    here a one time request and response is descripted and sent ro user
    """
    data = request.get_json()
    if data:
      message = data.get("message", "")
      try:
        if self.classification(message):
          completion = self.client.ChatCompletion.create(
              model="GPT-4-turbo",
              messages=[
                {"role": "system", "content": "You are a helpful assistant"},
                {"role": "user", "content": message}
              ]
            )
          response = completion.choices[0].message["content"]
      except RateLimitError:
        response = "Rate limit  exceeded"
      else:
        response = "Sorry, i can only help you with matters on abstract algebra"
    return jsonify(response), 200

  @socketio.on("message", namespace="/chat")
  def chat_medsage(data):
    """
     here a bidirectional communication is established between ioenai and the client
     """
     message = data.get("message", "")
     if self.classification(message):
       try:
        completion = self.client.ChatCompletion(
            model="GPT-4-turbo",
            messages=[
              {"role": "system", "content": "You are a chat assistant"},
              {"role": "user", "content": message}
              ]
            )
        response = completion.choices[0].message["content"]
       except RateLimitError:
         response = "Rate limit exceeded"
       else:
         "Sorry, i can only help you with matters on abstract algebra"
    emit("response", {"response": response})
