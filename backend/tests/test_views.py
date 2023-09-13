import pytest
from app import app
from unittest.mock import Mock, patch
from app.models import db,Todo

@pytest.fixture
def client():
    app.config['TESTING'] = True
    client = app.test_client()
    
    with app.app_context():
        db.create_all()

    yield client


def test_get_todos(client):
    mock_todo_1 = Todo(id=1, title='Todo 1', description='Description 1', state='active')
    mock_todo_2 = Todo(id=2, title='Todo 2', description='Description 2', state='completed')

    mock_todo_repository = Mock()
    mock_todo_repository.get_all.return_value = [mock_todo_1, mock_todo_2]

    with patch('app.views.TodoRepository', mock_todo_repository):
        response = client.get('/todos/')

    assert response.status_code == 200
    data = response.get_json()
    assert len(data) == 2
    assert data[0] == mock_todo_1.to_dict()
    assert data[1] == mock_todo_2.to_dict()



def test_get_todo(client):
    mock_todo = Todo(id=1, title='Test Todo', description='Test Description', state='active')

    mock_todo_repository = Mock()
    mock_todo_repository.get_by_id.return_value = mock_todo

    with patch('app.views.TodoRepository', mock_todo_repository):
        response = client.get('/todos/1')

    assert response.status_code == 200
    data = response.get_json()
    assert data == mock_todo.to_dict()

def test_update_todo(client):
    mock_todo = Todo(id=1, title='Test Todo', description='Test Description', state='active')

    mock_todo_repository = Mock()
    mock_todo_repository.update.return_value = mock_todo

    with patch('app.views.TodoRepository', mock_todo_repository):
        response = client.put('/todos/1', json={'state': 'completed'})

    assert response.status_code == 200
    data = response.get_json()
    assert data == mock_todo.to_dict()






