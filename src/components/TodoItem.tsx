import React from 'react'
import {
    Checkbox,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import UpdateIcon from '@mui/icons-material/Update'
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline'
import type {TTodo} from '../types/todo.types.ts'
import {useUpdateTodos} from '../hooks/useUpdateTodo.ts'
import {useDeleteTodo} from '../hooks/useDeleteTodo.ts'
import {useToggleTodo} from '../hooks/useToggleTodo.ts'

interface IProps {
    todo: TTodo
}

export const TodoItem: React.FC<IProps> = ({todo}) => {
    const [value, setValue] = React.useState<string>(todo.title)
    const {updateTodo} = useUpdateTodos(todo.id)
    const {deleteTodo} = useDeleteTodo(todo.id)
    const {toggleTodo} = useToggleTodo(todo.id)

    const handleUpdate = () => {
        updateTodo(value)
    }

    const handleDelete = () => {
        if (todo.completed) {
            deleteTodo()
        } else {
            alert('You can only delete completed todos')
        }
    }

    const handleToggle = () => {
        toggleTodo(!todo.completed)
    }

    return (
        <ListItem
            disablePadding
        >
            <ListItemButton role={undefined} onClick={() => {}} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': todo.id }}
                    />
                </ListItemIcon>
                <ListItemText
                    id={'1'}
                    primary={`${todo.title}`}
                    style={{width: '480px'}}
                    secondary={todo.completed ? 'Completed' : 'Not completed'}
                />
                <TextField
                    id="standard-basic"
                    label="Update Todo Title"
                    variant="outlined"
                    fullWidth={true}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <IconButton edge="end" aria-label="update" title={'Update Todo'} onClick={handleUpdate}>
                    <UpdateIcon color={'secondary'} />
                </IconButton>
                <IconButton edge="end" aria-label="delete" title={'Delete Todo'} onClick={handleDelete}>
                    <DeleteIcon color={'info'} />
                </IconButton>
                <IconButton edge="end" aria-label="complete" title={'Complete Todo'} onClick={handleToggle}>
                    <CheckCircleOutline color={todo.completed ? 'success' : 'error'} />
                </IconButton>
            </ListItemButton>
        </ListItem>
    )
}
