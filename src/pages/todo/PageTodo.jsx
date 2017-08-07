
import { withRouter } from 'react-router';
import { Component } from 'refast';
import logic from './logic';
import './PageTodo.less';
import TodoSearch from 'components/todo-search';
import TodoList from 'components/todo-list';
import TodoSummary from 'components/todo-summary';

class PageTodo extends Component {

  constructor(props) {
    super(props, logic);
  }

  componentWillMount() {
    const me = this;
    me.dispatch('getDoneCount');
  }

  addTodo(item) {
    const me = this;
    me.dispatch('addTodo', item);
  }

  render() {
    const me = this;
    const {state} = me;

    const todoListProps = {
      listData: state.itemList,
      changeIsDone: (e) => me.dispatch(['changeIsDone', 'getDoneCount', 'changeAllCheck'], e),
      delItem: (e) => me.dispatch(['delItem', 'getDoneCount'], e)
    };

    const todoSummaryProps = {
      listData: state.itemList,
      allChecked: state.allChecked,
      doneCount: state.doneCount,
      checkAll: () => me.dispatch(['checkAll', 'getDoneCount']),
      clearAllDone: () => me.dispatch(['clearAllDone', 'getDoneCount']),
    };
    return (
      <div className="page-todo">
        <TodoSearch addTodo={me.addTodo.bind(me)}/>
        <TodoList {...todoListProps}/>
        <TodoSummary {...todoSummaryProps}/>
      </div>
    );
  }
}

export default withRouter(PageTodo);
