import React, { useState } from 'react';
import List from "./components/List"

interface IState {
  invitedPeople: {
    name: string,
    url: string,
    age: number,
    note?: "string",
  }[],
};

function App() {

  const [invitedPeople, setInvitedPeople] = useState<IState["invitedPeople"]>(
    []
  );

  // const changeNumber = () => {
  //   setNumber(50);
  // };


  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List invitedPeople={invitedPeople} />
      {invitedPeople.map(person => person.age)}

    </div>
  );
}

export default App;
