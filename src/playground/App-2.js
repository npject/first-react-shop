import './App.css';

function App2(props) {
  // const handleClick = (text,ev)=>{
  //   debugger
  // };
  // const text = "hello!!!";
  // const data = {
  //   username:'rose',
  //   pass:'test'
  // };

  //...................................................
  // if(props.condition){
  //   return (
  //     <ConditionOne/>
  //   );
  // }else{
  //   return (
  //     <ConditionTwo/>
  //   );
  // }

  //..................................................
  // return (
  //   <>
  //   {props.condition && <ConditionOne/>}
  //   {!props.condition && <ConditionTwo/>}
  //   </>
  // );

  //...................................................
  return (
    <>
    {props.condition ? <ConditionOne/> : <ConditionTwo/>}
    </>
  );

  //...................................................
  // return (
  //   <>
  //   <button onClick={(event)=> handleClick('hi react',event)}>click me</button>
  //   <Child dataApp={[text,data]}/>
  //   <p>......</p>
  //   </>
  // );
}

export default App2;

// function Child(props) {
//   console.log(props)
//   return (
//     <>
//     <p>{props.dataApp[0]}</p>
//     <p>{props.dataApp[1].username}</p>
//     <p>{props.dataApp[1].pass}</p>
//     </>
//   );
// }

function ConditionOne() {
  return (
    <>
    <p>Condition One</p>
    </>
  );
}
function ConditionTwo() {
  return (
    <>
    <p>Condition Two</p>
    </>
  );
}
