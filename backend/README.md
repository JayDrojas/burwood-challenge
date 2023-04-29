## FizzBuzz Backend

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