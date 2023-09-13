from flask import Blueprint, jsonify, request
from .repositories.todo_repository import TodoRepository

todo_bp = Blueprint('todo', __name__)

@todo_bp.route('/', methods=['GET'])
def get_todos():
    todos = TodoRepository.get_all()
    return jsonify([todo.to_dict() for todo in todos])
