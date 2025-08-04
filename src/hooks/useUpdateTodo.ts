import {useMutation, useQueryClient} from '@tanstack/react-query'
import {todoServices} from '../services/todoServices.ts'

export const useUpdateTodos = (id: string) => {
    const queryClient = useQueryClient()
    const {mutate} = useMutation({
        mutationKey: ['updateTodo', id],
        mutationFn: (title: string) => todoServices.updateTodo(id, {title}),
        onSuccess: () => {
            alert('Update done')
            queryClient.invalidateQueries({queryKey: ['todos']})
        }
    })

    return {updateTodo: mutate}
}