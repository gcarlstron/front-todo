import React, {useState, useEffect} from "react";

function TaskForm({task, onSubmit, onCancel}){

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        dueDate: new Date().toISOString().split("T")[0]
    });

    useEffect(() => {
        if(task){
            setFormData({
                title: task.title ||'',
                description: task.description || '',
                dueDate: task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : null
            });
        }
    }, [task]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={"form-group"}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required />
            </div>
            <div className={"form-group"}>
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows = "4"
                />
            </div>
            <div className={"form-group"}>
                <label htmlFor="dueDate">Due Date:</label>
                <input
                type="date"
                id="dueDate"
                name={"dueDate"}
                value={formData.dueDate}
                onChange={handleChange}
                />
            </div>
            <div className={"form-actions"}>
                <button type={"submit"}>Save</button>
                <button type={"button"} onClick={onCancel}>Cancel</button>
            </div>
        </form>
    )
}

export default TaskForm;