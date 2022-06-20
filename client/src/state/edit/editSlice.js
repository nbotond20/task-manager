import { createSlice } from '@reduxjs/toolkit';

const initialState = { taskList: null, userId: null };

export const editSlice = createSlice({
    name: 'edit',
    initialState,
    reducers: {
        setEditing: (state, { payload: { taskList } }) => {
            if(state.userId !== null){
                state.taskList = taskList;
                localStorage.setItem(
                    `taskList-${state.userId}`,
                    JSON.stringify(taskList)
                );
            }
        },
        load: (state, { payload: { taskList } }) => {
            state.taskList = taskList;
        },
        addTask: (state, { payload: { task } }) => {
            state.taskList.tasks.push(task);
            if(state.userId !== null){
                localStorage.setItem(
                    `taskList-${state.userId}`,
                    JSON.stringify(state.taskList)
                );
            }
        },
        setUserId: (state, { payload: { userId } }) => {
            state.userId = userId;
        },
        clear(state){
            state.taskList = null;
        },
    }
});

// reducer
export const editReducer = editSlice.reducer;
// action creators
export const { setEditing, load, addTask, setUserId, clear } = editSlice.actions;
// selectors
export const selectEdit = (state) => state.edit.taskList;
export const selectUserId = (state) => state.edit.userId;