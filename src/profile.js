import React from 'react'
import { Link } from 'react-router-dom'

const Profile = ({users}) => {
  
  return (
    <div><p>Profile name</p>
      <div>
        {users.map((user) => (
          <li key={user.id}>
          {user.firstName}{" "}{user.lastName}
            <Link to={user.id}>
              <button>Click to view</button>
            </Link>
          </li>
        ))}
      </div>
    </div>
  )
}

export default Profile
