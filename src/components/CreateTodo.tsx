import React from 'react'
import {Box, Button, Modal, TextField, Typography} from '@mui/material'
import {useCreateTodo} from '../hooks/useCreateTodo.ts'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const CreateTodo: React.FC = () => {
    const [open, setOpen] = React.useState<boolean>(false)
    const [title, setTitle] = React.useState<string>('')
    const {createTodo} = useCreateTodo()


    const handleCreate = () => {
        if (title.trim() === '') {
            alert('Title cannot be empty')
            return
        }

        createTodo(title)
        setTitle('')
        setOpen(false)
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: '3rem',
            flexGrow: 1
        }}>
            <Button
                variant='contained'
                color='primary'
                onClick={() => setOpen(true)}
            >Create Todo</Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby='create-todo-modal-title'
                aria-describedby='create-todo-modal-description'
            >
                <Box sx={style}>
                    <Typography id='modal-modal-title' variant='h6' component='h2'>
                        Set Todo Title
                    </Typography>
                    <TextField
                        id='standard-basic'
                        label='Standard'
                        variant='standard'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        sx={{width: '100%', marginBottom: '1.5rem'}}
                    />
                    <Box sx={{ textAlign: 'center' }}>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={handleCreate}
                        >Create</Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}
