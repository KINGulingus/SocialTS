import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UsersType} from "../../redux/store";

interface UsersProps {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setTotalUsersCount:(totalCount:number)=>void
    setCurrentPage: (currentPage: number) => void
    pageSize: number,
    totalUserCount: number,
    onPageChanged:(pageNumber:number)=>void
    currentPage:number
}

let Users = (props:UsersProps) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

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
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
              <span>
                  <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}
                         alt={''}/>
                  </div>
                  <div>
                      {u.followed ? <button onClick={() => {
                             props.unfollow(u.id)
                          }}>Unfollow</button>
                          : <button onClick={() => {
                             props.follow(u.id)
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


export default Users