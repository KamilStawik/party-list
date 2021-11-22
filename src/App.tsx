import React, { useState } from 'react';
import List from "./components/List"
import TypeScriptSyntax from './TypeScriptSyntax';

interface IState {
  invitedPeople: {
    name: string,
    url: string,
    age: number,
    note?: "string",
  }[],
};

function App() {

  const [invitedPeople, setInvitedPeople] = useState<IState["invitedPeople"]>([
    {
      name: "Tomasz",
      url: "",
      age: 31,
    }
  ]);

  // const changeNumber = () => {
  //   setNumber(50);
  // };


  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List invitedPeople={invitedPeople} />
      <TypeScriptSyntax />
    </div>
  );
}

export default App;
