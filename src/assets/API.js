const ENDPOINT = "https://glo3102lab4.herokuapp.com/";

// Post user id
export const createUser = async () => {
    const response = await fetch(`${ENDPOINT}users`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
        },
    });

    const data = await response.json();
    return data.id;
};

const baseURL = (userId) => `${ENDPOINT}${userId}`;

// Get all tasks
export const getTasks = (userId) => {
    return fetch(`${baseURL(userId)}/tasks`)
        .then((response) => response.json())
        .then((json) => {
            return json.tasks;
        })
        .catch(() => {
            console.error('Unable to fetch tasks');
        });
};

// Post task
export const createTask = (name, userId) => {
    return fetch(`${baseURL(userId)}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name
        })
    })
        .then((response) => response.json())
        .then((task) => {
            return task;
        })
        .catch(() => {
            console.error('Unable to create tasks');
        });
};

// Put task
export const updateTask = (id, name, userId) => {
    return fetch(`${baseURL(userId)}/tasks/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name
        })

    })
        .then((response) => response.json())
        .then((task) => {
            return task;
        })
        .catch(() => {
            console.error('Unable to update tasks');
        });
};

// Delete task
export const deleteTask = async (id, userId) => {
    return fetch(`${baseURL(userId)}/tasks/${id}`, {
        method: "DELETE",
    })
        .catch(() => {
            console.error('Unable to delete task');
        });
};
