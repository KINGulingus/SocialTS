import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UsersType} from "../../redux/store";
import {NavLink} from "react-router-dom";
import {instance} from "../../api/api";

interface UsersProps {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
    pageSize: number,
    totalUserCount: number,
    onPageChanged: (pageNumber: number) => void
    currentPage: number

    //cнизу такая же типизация как в юзерредусере в конце
    toggleFollowingProgress:(isFetching: boolean, userId: number)=>void

    followingInProgress:number[]
}

let Users = (props: UsersProps) => {

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
                    <NavLink to={'./../profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}
                         alt={''}/>
                      </NavLink>
                  </div>
                  <div>
                      {u.followed
                          ? <button disabled={props.followingInProgress.some(id=>id ===u.id)} onClick={() => {
                              props.toggleFollowingProgress(true,u.id)
                              instance.delete(`follow/${u.id}`)
                                  .then(response => {
                                      if (response.data.resultCode === 0) {
                                          props.unfollow(u.id)
                                      }
                                      props.toggleFollowingProgress(false,u.id)
                                  })
                          }}>Unfollow</button>

                          : <button disabled={props.followingInProgress.some(id=>id ===u.id)}  onClick={() => {
                              props.toggleFollowingProgress(true,u.id)
                              instance.post(`follow/${u.id}`, {})
                                  .then(response => {
                                      if (response.data.resultCode === 0) {
                                          props.follow(u.id)
                                      }
                                      props.toggleFollowingProgress(false,u.id)
                                  })


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
