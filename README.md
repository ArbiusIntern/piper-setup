  Piper TTS

    First : Open piper tts server locally using Docker
    - https://github.com/rhasspy/piper/issues/410

        - https://github.com/artibex/piper-http
        In Dockerfile add this 
            : RUN pip install flask_cors

    Second : Implement flask_cors in your local server 

        : Add this to the head in src/python_run/piper/http_server.py
            - from flask_cors import CORS
            
        : Add this after app = Flask(__name__) in server.py
            - CORS(app)
    
    
  Coqui Local TTS  
    
    First : Open coqui tts server locally
    - https://docs.coqui.ai/en/dev/docker_images.html#start-a-server
    
      : For M1 / M2
      - https://blog.graywind.org/posts/coqui-tts-mac/
    
    Second : Implement flask_cors in your local server 

        : Add this to the head in TTS/server/server.py
            - from flask_cors import CORS
            
        : Add this after app = Flask(__name__) in server.py
            - CORS(app)
           
