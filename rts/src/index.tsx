import ReactDOM from 'react-dom'
import UserSearch from './classes/UserSearch'

const users = [
  {name: "mlxb", age: 21},
  {name: "brjm", age: 10},
  {name: "mjyj", age: 5},
  {name: "mjyd", age: 3},
]

const App = () => {
  return <div>
    <UserSearch users={users} />
  </div>
}

ReactDOM.render(<App />, document.querySelector("#root"))