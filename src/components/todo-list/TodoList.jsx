import { Component } from 'react';
import './TodoList.less';

export default class TodoList extends Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {

  }
  static propTypes = {

  }
  render() {
    const me = this;
    const {props} = me;

    return (
      <ul className="mod-todo-list">
        {
          props.listData.map((item, i) => {
            return <li key={i} onClick={props.changeIsDone}>
              <input type="checkbox" checked={item.isDone} onChange={props.changeIsDone} />
              <span className={item.isDone ? `isDone` : ''}>{item.text}</span>
              <span className="del" onClick={props.delItem}>×</span>
            </li>;
          })
        }
      </ul>
    );
  }
}
