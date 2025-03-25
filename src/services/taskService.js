const API_URL = 'https://localhost:7107/api/task';

export const getAllTasks = async () => {
    try{
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Falha ao buscar as tarefas');
        return await response.json();
    } catch (error){
        console.log(error);
    }
};

export const getTaskById = async (id) => {
    try{
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error('Falha ao buscar a tarefa');
        return await response.json();
    } catch (error){
        console.log(error);
    }
}

export const createTask = async (task) => {
    try{
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });
        if (!response.ok) throw new Error('Falha ao criar a tarefa');
        return await response.json();
    } catch (error){
        console.log(error);
    }
}

export const updateTask = async (id, task) => {
    try{
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });
        if (!response.ok) throw new Error('Falha ao atualizar a tarefa');
        return await response.json();
    } catch (error){
        console.log(error);
    }
}

export const deleteTask = async (id) => {
    try{
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Falha ao deletar a tarefa');
        return await response.json();
    } catch (error){
        console.log(error);
    }
}