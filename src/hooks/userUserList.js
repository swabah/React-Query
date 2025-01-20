import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export const useUserList = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axios('http://localhost:4000/users')
            return response.data
        },
        refetchOnWindowFocus: false,
        enabled: true
    })
}
export const useUseListMutation = () => {
    const query = useQueryClient()

    return useMutation({
        mutationFn: async () => {
            await axios('http://localhost:4000/users', {
                method: 'POST',
                data: {
                    id: 4,
                    name: 'Thasneem'
                }
            })
        },
        onSuccess: () => {
            query.invalidateQueries({
                queryKey: ['users']
            })
        }
    })
} 