// 除了`class`的声明方式，你还可以函数式声明组件
export default ({ data = [] }) => {
  let jsx = null;
  if (data.length) {
    jsx = data.map((l, k) => (<p key={k}>{`${l.workNo}-${l.name}(${l.nickName})`}</p>));
  }

  return (
    <div className="mod-search-data">
      <div>
        <h3>匹配的员工:</h3>
        <div>{jsx}</div>
      </div>
    </div>
  );
};
