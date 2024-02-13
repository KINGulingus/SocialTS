import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY": "67456724-8867-48c2-b789-63a99d888cba"
    }
})

export const usersAPI = {
    getUsers (setCurrentPage:number,
                pageSize: number
    ){
        return instance.get(`users?page=${setCurrentPage}&count=${pageSize}`)
            .then(response=>{
                return response.data
            })
    }
}

