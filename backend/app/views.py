from flask import Blueprint, jsonify, request
from .repositories.todo_repository import TodoRepository

todo_bp = Blueprint('todo', __name__)

@todo_bp.route('/', methods=['GET'])
def get_todos():
    todos = TodoRepository.get_all()
    return jsonify([todo.to_dict() for todo in todos])

@todo_bp.route('/', methods=['POST'])
def create_todo():
    data = request.get_json()
    todo = TodoRepository.create(data['title'], data.get('description', ''))
    return jsonify(todo.to_dict()), 201

@todo_bp.route('/<int:id>', methods=['GET'])
def get_todo(id):
    todo = TodoRepository.get_by_id(id)
    if todo:
        return jsonify(todo.to_dict())
    else:
        return jsonify({'error': 'Todo not found'}), 404

@todo_bp.route('/<int:id>', methods=['PUT'])
def update_todo(id):
    data = request.get_json()
    todo = TodoRepository.update(id, data['state'])
    if todo:
        return jsonify(todo.to_dict())
    else:
        return jsonify({'error': 'Todo not found'}), 404