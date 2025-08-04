import {useQuery} from '@tanstack/react-query'
import {todoServices} from '../services/todoServices.ts'

export const useGetTodoById = (id: string) => {
    const {data, error, isLoading} = useQuery({
        queryKey: ['todo', id],
        queryFn: () => todoServices.getTodoById(id),
        select: data => data.data,
        enabled: !!id
    })

    return {data, error, isLoading}
}