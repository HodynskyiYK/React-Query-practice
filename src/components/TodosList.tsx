import {Alert, Box, List} from '@mui/material'
import React from 'react'
import {TodoItem} from './TodoItem.tsx'
import CircularProgress from '@mui/material/CircularProgress'
import {useGetAllTodos} from '../hooks/useGetAllTodos.ts'

export const TodosList: React.FC = () => {
    const {todos, isLoading, error} = useGetAllTodos(true)

    if (isLoading) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                padding: '5rem 0',
                flexGrow: 1
            }}>
                <CircularProgress />
            </Box>
        )
    }

    if (error) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                padding: '5rem 0',
                flexGrow: 1
            }}>
                <Alert severity="error">Error loading todos</Alert>
            </Box>
        )
    }

    return (
        <List sx={{ width: '100%', maxWidth: 1200, bgcolor: 'background.paper', margin: '0 auto' }}>{
            todos?.length ? todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            )) : (
                <Alert severity="warning">No todos</Alert>
            )
        }</List>
    )
}
