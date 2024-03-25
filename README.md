First : Open coqui tts server locally
- https://docs.coqui.ai/en/dev/docker_images.html#start-a-server

  : For M1 / M2
  - https://blog.graywind.org/posts/coqui-tts-mac/

Second : install flask_cors in your locally server and then add this after app = Flask(__name__) in server.py
- CORS(app)
