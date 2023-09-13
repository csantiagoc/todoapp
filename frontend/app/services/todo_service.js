import MockBackend from './mock_backend';
import Backend from './backend';

const backend = process.env.NODE_ENV === 'prod' ? Backend : MockBackend;

export default {
  getTodos: () => backend.get('/todos'),
  getTodo: id => backend.get(`/todos/${id}`),
  updateTodo: (id, data) => backend.put(`/todos/${id}`, data),
};
