import {useMutation, useQueryClient} from '@tanstack/react-query'
import {todoServices} from '../services/todoServices.ts'

export const useDeleteTodo = (id: string) => {
    const queryClient = useQueryClient()
    const {mutate} = useMutation({
        mutationKey: ['deleteTodo', id],
        mutationFn: () => todoServices.deleteTodo(id),
        onSuccess: () => {
            alert('Todo deleted successfully')
            queryClient.invalidateQueries({queryKey: ['todos']})
        }
    })

    return {deleteTodo: mutate}
}