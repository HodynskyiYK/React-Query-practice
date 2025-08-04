import {useMutation, useQueryClient} from '@tanstack/react-query'
import {todoServices} from '../services/todoServices.ts'
import type {TTodo} from '../types/todo.types.ts'

export const useCreateTodo = () => {
    const queryClient = useQueryClient()
    const {mutate} = useMutation({
        mutationKey: ['createTodo'],
        mutationFn: async (title: string) => {
            const response = await todoServices.createTodo({title, completed: false})
            return response.data
        },
        onSuccess: (data: TTodo) => {
            alert(`Creating todo with title: ${data.title}`)
            queryClient.invalidateQueries({
                queryKey: ['todos']
            })
        }
    })

    return {createTodo: mutate}
}