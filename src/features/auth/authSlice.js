import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	result: 100,
};

export const calcSlice = createSlice({
	name: "calc",
	initialState: initialState,
	reducers: {
		add: (currentState, action) => {
			console.log("calling the reducer for action named: (sum)", action);
			const sum = Number(action.payload.firstNumber) + Number(action.payload.secondNumber);
			console.log("the result : ", sum)
			currentState.result = sum;
		},
		printHello: (currentState, action) => {
			console.log("hello .js", currentState, action);
		},
		sub: (currentState, action) => {
			console.log("current state :", currentState, "and the action contains ", action);
			const { firstNumber, secondNumber } = action.payload;
			currentState.result = Number(firstNumber) - Number(secondNumber);
		},
		mult: (currentState, action) => {
			const { firstNumber, secondNumber } = action.payload;
			currentState.result = Number(firstNumber) * Number(secondNumber);
		},
		div: (currentState, action) => {
			const { firstNumber, secondNumber } = action.payload;
			console.log(currentState);
			currentState.result = firstNumber / secondNumber;
		}
	}


})






export const { add, printHello, sub, mult, div } = calcSlice.actions;

export default calcSlice.reducer;

