import React from 'react'
import {TodosList} from './components/TodosList.tsx'
import {Container} from '@mui/material'

const App: React.FC = () => {

    return (
        <Container maxWidth="xl">
            <h1>Welcome to React with TypeScript!</h1>
            <TodosList />
        </Container>
    )
}

export default App