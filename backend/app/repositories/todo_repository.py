from ..models import db, Todo

class TodoRepository:
    @staticmethod
    def get_all():
        return Todo.query.all()

    @staticmethod
    def create(title, description):
        todo = Todo(title=title, description=description)
        db.session.add(todo)
        db.session.commit()
        return todo

    @staticmethod
    def get_by_id(id):
        return Todo.query.get(id)

    @staticmethod
    def update(id, state):
        todo = Todo.query.get(id)
        if todo:
            todo.state = state
            db.session.commit()
            return todo
        return None