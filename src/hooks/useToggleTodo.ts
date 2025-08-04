import {useMutation, useQueryClient} from '@tanstack/react-query'
import {todoServices} from '../services/todoServices.ts'

export const useToggleTodo = (id: string) => {
    const queryClient = useQueryClient()
    const {mutate} = useMutation({
        mutationKey: ['toggleTodo', id],
        mutationFn: (completed: boolean) => todoServices.updateTodo(id, {completed}),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['todos']})
        }
    })

    return {toggleTodo: mutate}
}