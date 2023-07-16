import React from "react";

const TimerComponent = () => {
  const [time, setTime] = React.useState(0);
  console.log("컴포넌트 업데이트");
  React.useEffect(() => {
    setTime(time + 1);
  }, []);

  return (
    <div>
      <p>{time} 초</p>
      <button>1 증가</button>
    </div>
  );
};
export default TimerComponent;
