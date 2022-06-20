import { load } from '../state/edit/editSlice';

const loadTasklist = (userId) => {
    const taskListJSON = localStorage.getItem(`taskList-${userId}`);
    const taskList = JSON.parse(taskListJSON) || null;
    return load({taskList});
};

export default loadTasklist;
