import axios  from 'axios'
import {API_URL} from '../constants/api.ts'
import type {TTodo} from '../types/todo.types.ts'

class TodoServices {
    private URL: string = `${API_URL}/todos`

    getTodos() {
        return axios.get<TTodo[]>(this.URL)
    }

    getTodoById(id: string) {
        return axios.get<TTodo>(`${this.URL}/${id}`)
    }

    createTodo(todo: Omit<TTodo, 'id'>) {
        return axios.post<TTodo>(this.URL, todo)
    }

    updateTodo(id: string, todo: Partial<TTodo>) {
        return axios.put<TTodo>(`${this.URL}/${id}`, todo)
    }

    deleteTodo(id: string) {
        return axios.delete<void>(`${this.URL}/${id}`)
    }
}

export const todoServices = new TodoServices()