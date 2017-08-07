import { Component } from 'react';
import './TodoSearch.less';

export default class TodoSearch extends Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {

  }
  static propTypes = {

  }

  componentDidMount() {

  }
  handleKeyUp(e) {
    const me = this;
    if(e.keyCode === 13) {
      let value = e.target.value;
      if(!value) return false;
      let initNewItem = {
        text: value,
        isDone: false,
      }
      me.props.addTodo(initNewItem);
      e.target.value = '';
    }
  }

  render() {
    const me = this;
    return (
      <div className="mod-todo-search">
        <input type='text' onKeyUp={me.handleKeyUp.bind(me)} placeholder='press enter to add your task'/>
      </div>
    );
  }
}
