import React from 'react'
import {TodosList} from './components/TodosList.tsx'
import {Container} from '@mui/material'
import {CreateTodo} from './components/CreateTodo.tsx'

const App: React.FC = () => {

    return (
        <Container maxWidth="xl">
            <h1 style={{ textAlign: 'center'}}>Welcome to React with TypeScript!</h1>
            <TodosList />
            <CreateTodo />
        </Container>
    )
}

export default App