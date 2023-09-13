let idCounter = 0

const todos = [
  { id: idCounter++, title: 'Todo 1', status: 'active', description: 'Description 1' },
  { id: idCounter++, title: 'Todo 2', status: 'done', description: 'Description 2' },
];


export default {
  get: url => {
    if (url === '/todos') {
      return Promise.resolve(todos);
    }

    const id = parseInt(url.split('/')[2], 10);
    return Promise.resolve(todos.find(todo => todo.id === id));
  },

  put: (url, data) => {
    const id = parseInt(url.split('/')[2], 10);
    const todo = todos.find(todo => todo.id === id);
    Object.assign(todo, data);
    return Promise.resolve(todo);
  },

  post: (url, data) => {
    const id = idCounter++;
    const todo = { id: idCounter++, title: data.title , status: data.status, description: data.description}
    todos.push(todo);
    return Promise.resolve(todo);
  }
};
