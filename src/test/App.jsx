
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { add, mult, sub, div } from "./features/auth/authSlice"
import { fetchUsers } from './features/auth/authService';


// function App() {
//   const resultState = useSelector((state) => {
//     return state.calc.result;
//   });

//   const dispatch = useDispatch();

//   // console.log("the state from the app component is ", resultState)

//   const [firstNumberInput, setFirstNumberInput] = useState(null);
//   const [secondNumberInput, setSecondNumberInput] = useState(null);
//   const [result, setResult] = useState(null);

//   // EVENT HANDLERS
//   function handleSumClick() {
//     console.log("dispaching the app from App.js compenent")
//     dispatch(add({
//       firstNumber: firstNumberInput,
//       secondNumber: secondNumberInput
//     }));
//   }

//   function handleSubClick() {
//     dispatch(sub({
//       firstNumber: firstNumberInput,
//       secondNumber: secondNumberInput
//     }));
//   }

//   function handleMultClick() {
//     dispatch(mult({
//       firstNumber: firstNumberInput,
//       secondNumber: secondNumberInput,
//     }));
//   }

//   function handleDivClick() {
//     dispatch(div({
//       firstNumber: firstNumberInput,
//       secondNumber: secondNumberInput,
//     }));
//   }

//   return (
//     <div className="App">
//       <div
//         style={{
//           height: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           flexDirection: "column",
//           alignItems: "center",
//           background: "teal",
//         }}
//       >
//         {/* FIRST INPUT */}
//         <label>First Number</label>
//         <input
//           value={firstNumberInput}
//           onChange={(e) => setFirstNumberInput(e.target.value)}
//         />

//         {/* SECOND INPUT */}
//         <label>Second Number</label>
//         <input
//           value={secondNumberInput}
//           onChange={(e) => setSecondNumberInput(e.target.value)}
//         />

//         <button onClick={handleSumClick}>sum</button>

//         <button onClick={handleSubClick}>subtract</button>

//         <button onClick={handleMultClick}>multiply</button>

//         <button onClick={handleDivClick}>divide</button>

//         <hr />

//         <h2>{resultState}</h2>
//       </div>
//     </div>
//   );
// }


function users() {
  const dispach = useDispatch();
  const response1 = useSelector((state) => state.user);
  const{loading ,data} = response1;

  return (
    <>
      <button onClick={() => { dispach(fetchUsers()) }}>Load Users</button>
      {loading && <p>Loading...</p>}
      {data.map(user => (
        <p key={user.id}> {user.name} </p>
      ))}

    </>
  );

}
export default users;