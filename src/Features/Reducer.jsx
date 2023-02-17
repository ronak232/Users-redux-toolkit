import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("alltodos", async () => {
  try {
    const response = await axios.get("http://localhost:3004/todo");
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

const userSlice = createSlice({
  name: "users",

  initialState: { value: [] },
  // Reducers
  reducers: {
    // add reducer
    addUser: (state, action) => {
      state.value = [...state.value, action.payload];
      console.log("before values", state.value);
      axios
        .post("http://localhost:3004/todo", action.payload)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      // localStorage.setItem("value", JSON.stringify(state.value));
    },
    // Delete reducer
    deleteUser: (state, action) => {
      console.log(action.payload);
      state.value = state.value.filter((user) => {
        return user.id !== action.payload;
      });
      axios
        .delete(`http://localhost:3004/todo/${action.payload}`)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      // localStorage.setItem("value", JSON.stringify(state.value));
    },
    // Update reducer
    updateName: (state, action) => {
      console.log("Update value", action.payload);
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.name = action.payload.name;
        }
        return user;
      });
      axios
        .put(`http://localhost:3004/todo/${action.payload.id}`, action.payload)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      // localStorage.setItem("value", JSON.stringify(state.value));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.value = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.hasError = true;
        state.isLoading = false;
      });
  },
});

export const { addUser, deleteUser, updateName } = userSlice.actions;
export default userSlice.reducer;
