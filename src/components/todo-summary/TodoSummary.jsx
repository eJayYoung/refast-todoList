import { Component } from 'react';
import './TodoSummary.less';

export default class TodoSummary extends Component {

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
      <div className="mod-todo-summary">
        <input type="checkbox" checked={props.allChecked} onChange={props.checkAll}/>
        <span className="doneCount">{`${me.props.doneCount} `}</span><span>{` 已完成 ／ ${props.listData.length} 总数`}</span>
        <span className="clearAll" onClick={props.clearAllDone}>清空已完成</span>
      </div>
    );
  }
}
