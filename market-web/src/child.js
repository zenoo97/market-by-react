const ChildComponent = (props) => {
  const { name, age } = props;
  return (
    <div>
      <p>자식 컴포넌트</p>
      <p>
        이름: {name}, 나이: {age}
      </p>
    </div>
  );
};
export default ChildComponent;
