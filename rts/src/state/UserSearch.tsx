import { useState } from "react"

const users = [
  {name: "mlxb", age: 21},
  {name: "brjm", age: 10},
  {name: "mjyj", age: 5},
  {name: "mjyd", age: 3},
]

interface UserProps {name: string; age: number;}

const UserSearch: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [user, setUser] = useState<UserProps|undefined>()

  const onClick = () => {
    const foundUser = users.find(user => user.name === name)
    setUser(foundUser)
  }

  return <div>
    User Search
    <input value={name} onChange={e => setName(e.target.value)} />
    <button onClick={onClick}>Search</button>

    {user && user.name}
    {user && user.age}
  </div>
}

export default UserSearch