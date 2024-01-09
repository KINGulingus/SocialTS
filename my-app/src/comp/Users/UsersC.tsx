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
    setTotalUsersCount:(totalCount:number)=>void
    setCurrentPage: (currentPage: number) => void
    pageSize: number,
    totalUserCount: number,

}

class Users extends React.Component<UsersProps, RootStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.setCurrentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged=(pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            if (pages.length < 10) {
                pages.push(i);
            }

        }




        return <div>
            <div>
                {pages.map(p => {
                    // @ts-ignore
                    return <span className={this.props.currentPage === p && styles.selectedPage}
                                 onClick={(e) => {this.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
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

//less55