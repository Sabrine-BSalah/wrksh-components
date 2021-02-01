import React from 'react'
import usersImage from '../assets/users.png'


const Users = () => {

  const users = [
    {
      name: "Mohamed",
      age: 25,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!"
    },
    {
      name: "Ahmed",
      age: 28,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!"
    },
    {
      name: "Ali",
      age: 30,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!"
    }
  ]

  return (
    <div>
      <img src={usersImage} alt="users" />
      {/* list of users */}
      <div>
        <h2>list of users </h2>
        {users.map(user => (
          <div>
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
            <p>{user.desc}</p>
          </div>
        ))}
      </div>

      {/* list of users where age >25 */}
      <div>
        <h2>list of users where age greater than 25</h2>
        {users.filter(user => user.age > 25).map(user => (
          <div>
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
            <p>{user.desc}</p>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />

      {/* sum of ages of users */}
      <div>
        <h2>Sum og ages</h2>
        <h2>
          {users.reduce((s, user) => s + user.age, 0)}
        </h2>
      </div>
    </div>
  )
}

export default Users
