import localdb from 'localdb';
import $ from 'jquery';
const DB = new localdb('TodoDB', 'Array', true);

export default {
  defaults(props) {
    return {
      itemList: DB.get() || [],
      doneCount: 0,
      allChecked: false,
    };
  },
  addTodo({ getState, setState }, item) {
    const { itemList } = getState();
    itemList.push(item);
    DB.add(item);
    setState({itemList});
  },
  changeIsDone({ getState, setState }, event) {
    let index;
    switch(event.target.nodeName) {
      case 'LI':
          index = $(event.target).index();
        break;
      case 'INPUT':
          index = $(event.target).parent().index();
        break;
    }
    let { itemList, allChecked, doneCount } = getState();
    itemList[index]['isDone'] = !itemList[index]['isDone'];
    setState({ itemList, allChecked, doneCount });
    DB.override(itemList, true);
  },
  changeAllCheck({ getState, setState }, event) {
    let index;
    switch(event.target.nodeName) {
      case 'LI':
          index = $(event.target).index();
        break;
      case 'INPUT':
          index = $(event.target).parent().index();
        break;
    }
    let { itemList, doneCount, allChecked} = getState();
    if(itemList.length === doneCount && itemList[index]['isDone'] === true) {
      allChecked = true;
    }else {
      allChecked = false;
    }
    setState({allChecked});
  },
  delItem({ getState, setState }, event) {
    const { itemList } = getState();
    const index = $(event.target).parent().index();
    itemList.splice(index, 1);
    DB.override(itemList, true);
    setState({itemList});
    event.stopPropagation();
  },
  getDoneCount({ getState, setState }) {
    let { doneCount , itemList } = getState();
    doneCount = itemList && itemList.filter((item) => item.isDone).length;
    setState({doneCount});
  },
  checkAll({ getState, setState }) {
    let { allChecked, itemList } = getState();
    allChecked = !allChecked;
    itemList.map(n => {
      n.isDone = allChecked;
    });
    DB.override(itemList, true);
    setState({itemList, allChecked});
  },
  clearAllDone({ getState, setState }) {
    let { itemList, allChecked, doneCount } = getState();
    console.log(doneCount);
    if(doneCount < 1) {
      alert(`you haven't finished a task yet`);
    }
    itemList = itemList.filter(item => !item.isDone);
    allChecked = false;
    DB.override(itemList, true);
    setState({ itemList, allChecked });
  }
}