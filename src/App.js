import Calendar from "./components/Calendar";

const App = () => {
  return <Calendar currentDate={new Date()} />;
};

export default App;

//userlist
/*
import UserList from "./components/UserList";
import SelectedUsers from "./components/SelectedUsers";

const dbUsers = [
  {
    id: 1,
    fName: "firstName1",
    lName: "lastName1",
  },
  {
    id: 2,
    fName: "firstName2",
    lName: "lastName2",
  },
  {
    id: 3,
    fName: "firstName3",
    lName: "lastName3",
  },
  {
    id: 4,
    fName: "firstName4",
    lName: "lastName4",
  },
  {
    id: 5,
    fName: "firstName5",
    lName: "lastName5",
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: dbUsers.map((u) => ({ ...u, isSelected: false })),
    };
  }
  setUsers = (newUsers) => {
    this.setState({ users: newUsers });
  };
  render() {
    const { users } = this.state;
    return (
      <>
        <UserList users={users} setUsers={this.setUsers} />
        <SelectedUsers users={users} />
      </>
    );
  }
}
export default App;
*/

//loginform
/*
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default App;
*/
