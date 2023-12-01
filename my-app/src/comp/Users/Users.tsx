import React from "react";
import {UsersType} from "../../redux/store";
import styles from './Users.module.css'

interface UsersProps {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

const Users: React.FC<UsersProps> = ({
                                         users,
                                         follow,
                                         unfollow,
                                         setUsers
                                     }) => {
    if (users.length === 0) {
        setUsers([
            {
                id: 1,
                photoUrl: 'https://sun1-87.userapi.com/s/v1/ig2/CIQPJ2npWfSGtjUQvaYMSmI1rCRPby-J4WO3_IpjjBRkjLdGrhqa2fBiMsrn4o37q6c_LjbyqeC2GZmZ7vdrWHPC.jpg?size=200x200&quality=96&crop=26,64,697,697&ava=1',
                followed: true,
                fullName: 'Gleb',
                status: 'suck mA cOkC',
                location: {city: 'Vitebsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://sun1-87.userapi.com/s/v1/ig2/CIQPJ2npWfSGtjUQvaYMSmI1rCRPby-J4WO3_IpjjBRkjLdGrhqa2fBiMsrn4o37q6c_LjbyqeC2GZmZ7vdrWHPC.jpg?size=200x200&quality=96&crop=26,64,697,697&ava=1',
                followed: false,
                fullName: 'Kyok',
                status: 'LiCk mY bAlLs',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://sun1-87.userapi.com/s/v1/ig2/CIQPJ2npWfSGtjUQvaYMSmI1rCRPby-J4WO3_IpjjBRkjLdGrhqa2fBiMsrn4o37q6c_LjbyqeC2GZmZ7vdrWHPC.jpg?size=200x200&quality=96&crop=26,64,697,697&ava=1',
                followed: true,
                fullName: 'Slave',
                status: 'Suck`em rock`em',
                location: {city: 'Bamberg', country: 'Germany'}
            },
        ])
    }

    return <div>
        {
            users.map(u => <div key={u.id}>
              <span>
                  <div>
                    <img src={u.photoUrl} className={styles.userPhoto} alt={''}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users