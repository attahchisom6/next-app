import openai
from dotenv import load_dotenv
import os

# Replace with your actual OpenAI API key
load_dotenv()
openai.api_key=os.getenv("OPENAI_API_KEY")

# List available models
models = openai.Model.list()

# Print model IDs
for model in models['data']:
    print(model['id'])

