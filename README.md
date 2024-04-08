# Piper TTS

## First: Open Piper TTS Server Locally using Docker

To open the Piper TTS server locally using Docker, follow these steps:

1. Navigate to the [Piper GitHub issue #410](https://github.com/rhasspy/piper/issues/410) for details on running the server locally.
2. Refer to [artibex/piper-http](https://github.com/artibex/piper-http) for Dockerfile changes. Add the following line to the Dockerfile:
    ```
    RUN pip install flask_cors
    ```

## Second: Implement Flask-CORS in Your Local Server

To implement Flask-CORS in your local server, follow these steps:

1. Add the following import statement at the top of `src/python_run/piper/http_server.py`:
    ```python
    from flask_cors import CORS
    ```

2. Add the following line after `app = Flask(__name__)` in `server.py`:
    ```python
    CORS(app)
    ```

# Coqui Local TTS

## First: Open Coqui TTS Server Locally

To open the Coqui TTS server locally, follow these steps:

1. Refer to the [Coqui TTS Docker Images documentation](https://docs.coqui.ai/en/dev/docker_images.html#start-a-server) for instructions on starting a server.
2. For M1 / M2 chips, follow the instructions provided in [this blog post](https://blog.graywind.org/posts/coqui-tts-mac/).

## Second: Implement Flask-CORS in Your Local Server

To implement Flask-CORS in your local Coqui TTS server, follow these steps:

1. Add the following import statement at the top of `TTS/server/server.py`:
    ```python
    from flask_cors import CORS
    ```

2. Add the following line after `app = Flask(__name__)` in `server.py`:
    ```python
    CORS(app)
    ```
