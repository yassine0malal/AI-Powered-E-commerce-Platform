
import{createAsyncThunk ,createSlice} from "@reduxjs/toolkit"
import { fetchUsers } from "./authService";


export const userSlice = createSlice({
	name: "user",
	initialState: {
		data: [],
		loading: false,
		error: null
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state,action) => {
				console.log("pending:", action);
				state.loading = true;
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				console.log("fulfielled : state ==> ", state, "and the action is ==> ", action);
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchUsers.rejected, (state) => {
				console.log("rejected: ==> ", state);
				state.loading = false;
				state.error = "Error loading users";
			});
	}
})



export default userSlice.reducer;
