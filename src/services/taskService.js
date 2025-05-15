const API_URL = 'http://localhost:3000/tasks'

// Function to fetch all tasks
export async function fetchTasks() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch tasks');
    return await response.json();
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
}

// Function to create a new task
export async function addTask(task) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    });
    if (!response.ok) throw new Error('Failed to fetch task');
    return await response.json();
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
}

// Function to change the status of a task
export async function updateTaskStatus(taskId, status) {
  try {
    const response = await fetch(`${API_URL}/${taskId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
    if (!response.ok) throw new Error('Failed to update task status');
    return await response.json();
  } catch (error) {
    console.error('Error updating task status:', error);
    throw error;
  }
}

// Function to delete a task
export async function deleteTask(taskId) {
  try {
    const response = await fetch(`${API_URL}/${taskId}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete task');
    return await response.json();
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
}