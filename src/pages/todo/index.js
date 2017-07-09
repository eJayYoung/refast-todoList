
export default {
  path: 'todo',
  title: 'todo',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./PageTodo.jsx'));
    }, 'todo');
  },
};
