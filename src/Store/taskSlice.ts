import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, TaskState } from "../App";


const initialState: TaskState = {
    tasks: [],
    completedTasks: [],
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload)
        },
        removeTask: (state, action: PayloadAction<Task>) => {
            const removeTask = action.payload;
            state.tasks = state.tasks.filter((task) => task.id !== removeTask.id)
        },
        completeTask: (state, action: PayloadAction<Task>) => {
            const completedTask = action.payload;
            state.completedTasks.push(completedTask)
            state.tasks = state.tasks.filter((task) => task.id !== completedTask.id);
        },
        clearCompletedTask: (state) => {
            state.completedTasks = []
        }
    }
});

export const { addTask, removeTask, completeTask, clearCompletedTask } = taskSlice.actions;
export default taskSlice.reducer;
