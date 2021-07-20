import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[]
}

interface UserSearchStateProps {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchStateProps = {
    name: '',
    user: undefined,
  }

  onClick = () => {
    const foundUser = this.props.users.find(user => user.name === this.state.name)
    this.setState({user: foundUser})
  }

  render(){
    const {name, user} = this.state;

    return <div>
    User Search
    <input value={name} onChange={e => this.setState({name: e.target.value})} />
    <button onClick={this.onClick}>Search</button>

    {user && user.name}
    {user && user.age}
  </div>
  }
}

export default UserSearch