import {useQuery} from '@tanstack/react-query'
import {todoServices} from '../services/todoServices.ts'

export const useGetAllTodos = (isEnabled: boolean) => {
    const {data, error, isLoading} = useQuery({
        queryKey: ['todos'],
        queryFn: () => todoServices.getTodos(),
        select: data => data.data,
        enabled: isEnabled
    })

    return {todos: data, error, isLoading}
}