## FizzBuzz Backend
### Summary

```
Currently, it is set up so that we can just start up the Docker container, and we thought it would be easier to hardcode credentials for now (also due to time). No backend is necessary using Docker. In case we need to start the backend locally, some adjustments need to be made in our connection to MongoDB on the backend.
```


### Prequsites 

1. Create a MongoDB cluster
    - Get URI from cluster
    - Add it to .env file (see env.example)
    - [See this link for tutorial](https://www.mongodb.com/basics/mongodb-atlas-tutorial)

### How to start backend

1. cd into backend
  ```bash
  cd backend
  ```

2. Create a virtual environemtn
```bash
python3 -m venv venv
```

3. Activate the virtual environment
```bash
source venv/bin/activate
```

4. Install the required dependencies
```bash
pip install -r requirements.txt
```

5. After starting virtual environemnt run this command to start backend 
```bash
python app.py
```