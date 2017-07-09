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
  render() {
    return (
      <div className="mod-todo-search">
        <input />
      </div>
    );
  }
}
