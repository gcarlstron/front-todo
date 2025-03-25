# **Front-end (React):**
  - Instale o Node.js e o npm (Node Package Manager).
  - Crie um novo projeto React usando o Create React App:
      - `npx create-react-app nome-do-projeto-front`
  - Instale as dependências necessárias (Axios para requisições HTTP, etc.).
 
  ## **3. Desenvolvimento do Front-end (React):**

### - **Componentes:**
    - Crie os componentes React para os formulários de entrada de dados.
    - Crie os componentes para exibir os dados recuperados da API.
### - **Requisições HTTP:**
    - Utilize o Axios ou a função `fetch` para fazer requisições HTTP para a API do back-end.
    - Implemente a lógica para enviar e receber dados da API.
    - Trate os erros e as respostas da API de forma adequada.
### - **Gerenciamento de Estado:**
    - Utilize o useState para gerenciar o estado dos componentes.
    - Caso o projeto aumente de tamanho, considere o uso de bibliotecas de gerenciamento de estado mais robustas, como Redux ou Context API.


# Task Manager Project README

## Overview

This project is a simple Task Manager application built with React. It allows users to create, read, update, and delete tasks through a user-friendly interface, interacting with a backend API.

## Getting Started

### Project Creation

The project was initialized using Create React App:

```bash
npx create-react-app task-manager
cd task-manager
```

### Project Structure

The project follows a standard React application structure:

```
task-manager/
├── public/
├── src/
│   ├── components/
│   │   ├── Notification.js
│   │   ├── TaskForm.js
│   │   └── TaskItem.js
│   ├── services/
│   │   └── taskService.js
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   └── ...
└── package.json
```

## Development Process

### 1. Initial Setup

After creating the React app, the following components and services were developed:

- **App.js**: Main component that manages state and renders the UI
- **Components**:
  - **TaskForm.js**: Form to create and edit tasks
  - **TaskItem.js**: Individual task display component
  - **Notification.js**: Component for showing feedback messages
- **Services**:
  - **taskService.js**: API communication layer for CRUD operations

### 2. Backend API Integration

The application connects to a .NET backend API running at `https://localhost:7107/api/task`. The API service layer provides methods for:

- Getting all tasks
- Getting a task by ID
- Creating a task
- Updating a task
- Deleting a task

### 3. Features Implemented

- **Task Listing**: Display all tasks with title, description, and due date
- **Create Task**: Form for adding new tasks
- **Edit Task**: Ability to modify existing tasks
- **Delete Task**: Remove tasks from the list
- **Notifications**: User feedback for successful/failed operations

### 4. Key Challenges and Solutions

#### Infinite API Calls

Initially, the application had an issue where `getAllTasks` was being called repeatedly. This was fixed by:
- Adding an empty dependency array to the `useEffect` hook
- Properly structuring state management to avoid unnecessary renders

#### API Error Handling

Error handling was improved by:
- Adding try/catch blocks in all API calls
- Showing user-friendly notifications for errors
- Ensuring errors are propagated correctly to the UI

#### UI/UX Improvements

- Form visibility is toggled based on user actions
- Notification messages automatically disappear after 6 seconds
- Date formatting for better readability

## Running the Project

1. Make sure the backend API is running at `https://localhost:7107`

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Technologies Used

- **React**: Frontend library
- **Fetch API**: For making HTTP requests to the backend
- **CSS**: For styling components

## Future Improvements

- Add task status (completed, pending, etc.)
- Implement task filtering and sorting
- Add user authentication
- Improve responsive design for mobile devices
- Add unit and integration tests
