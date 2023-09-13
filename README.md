# Todo App

### Tech Stack

#### Frontend (/frontend folder)
- React.js
- Next.js

#### Backend (/backend folder)
- Python
- Flask
- SQLAlchemy
- SQLite

#### Endpoints
- GET /todos
- GET /todos/id
- PUT /todos/id
- POST /todos

### Try the app
- [Link to try the application](https://todoapp-five-phi.vercel.app/)

**Note:** We were unable to deploy the frontend on GitHub Pages because it does not fully support Next.js dynamic route functionalities. As a result, the frontend was deployed using Vercel. The app is currently using a mocked backend (frontend\app\services\mock_backend.js), but it can be easily switched to the real backend by setting the environment variable `NODE_ENV` to 'prod'.

### Backend Unit Tests
You can find the backend unit tests in the `backend\tests` directory.

### Instructions to Run the Project

#### Backend:
1. Navigate to the backend folder.
2. Create a Python virtual environment: `python -m venv venv`
3. Activate the virtual environment: `venv/Scripts/activate` (on Windows) or `source venv/bin/activate` (on macOS/Linux)
4. Install the required dependencies: `pip install -r requirements.txt`
5. Run the Flask application: `flask run`
6. You can access the API at [http://127.0.0.1:5000/todos/](http://127.0.0.1:5000/todos/) to try the GET /todos endpoint.

#### Frontend:
1. Navigate to the frontend folder.
2. Install Node.js dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Access the frontend at [http://127.0.0.1:3000/](http://127.0.0.1:3000/).
