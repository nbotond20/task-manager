const fetchLocalTasklist = (localUser) => {
    const editingTaskList = localStorage.getItem('taskList-' + localUser?.id);
    const localTaskList = editingTaskList ? JSON.parse(editingTaskList) : null;

    return {
        localTaskList
    };
};

export default fetchLocalTasklist;
