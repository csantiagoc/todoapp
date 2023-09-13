import pytest
from app.models import Todo

@pytest.fixture
def todo():
    return Todo(title='Test Todo', description='Test Description', state='active')


def test_todo_to_dict(todo):
    todo_dict = todo.to_dict()
    assert 'id' in todo_dict
    assert todo_dict['title'] == 'Test Todo'
    assert todo_dict['description'] == 'Test Description'
    assert todo_dict['state'] == 'active'