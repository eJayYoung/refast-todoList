
import { withRouter } from 'react-router';
import { Component } from 'refast';
import logic from './logic';
import './PageTodo.less';
import TodoSearch from 'components/todo-search';

class PageTodo extends Component {

  constructor(props) {
    super(props, logic);
  }

  render() {
    return (
      <div className="page-todo">
        <TodoSearch />
      </div>
    );
  }
}

export default withRouter(PageTodo);
