/*

Это то как выглядило все до классовой компоненты

import React from "react";
import {UsersType} from "../../redux/store";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from "../../assets/images/user.jpg"


interface UsersProps {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "67456724-8867-48c2-b789-63a99d888cba"
    }
});

const Users: React.FC<UsersProps> = ({
                                         users,
                                         follow,
                                         unfollow,
                                         setUsers
                                     }) => {
    let getUsers = () => {
        if (users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                setUsers(response.data.items)
            })
        }
    }


    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            users.map(u => <div key={u.id}>
              <span>
                  <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}
                         alt={''}/>
                  </div>
                  <div>
                      {u.followed ? <button onClick={() => {
                              unfollow(u.id)
                          }}>Unfollow</button>
                          : <button onClick={() => {
                              follow(u.id)
                          }}>Follow</button>}

                  </div>
              </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"Belatus"}</div>
                        <div>{"Vitebsk"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users*/
