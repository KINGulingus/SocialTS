import React from "react";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from "../../assets/images/user.jpg"
import {RootStateType, UsersType} from "../../redux/store";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "67456724-8867-48c2-b789-63a99d888cba"
    }
});

interface UsersProps {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

class Users extends React.Component<UsersProps, RootStateType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>

            {
                this.props.users.map(u => <div key={u.id}>
              <span>
                  <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}
                         alt={''}/>
                  </div>
                  <div>
                      {u.followed ? <button onClick={() => {
                              this.props.unfollow(u.id)
                          }}>Unfollow</button>
                          : <button onClick={() => {
                              this.props.follow(u.id)
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
        </div>;
    }
}

export default Users