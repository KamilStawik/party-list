import React, { useState } from 'react';
import List from './components/List';
import Form from './components/Form';
import TypeScriptSyntax from './TypeScriptSyntax';
import './App.css';

interface IState {
  invitedPeople: {
    name: string,
    url: string,
    age: number,
    note?: string,
  }[],
};

function App() {

  const [invitedPeople, setInvitedPeople] = useState<IState["invitedPeople"]>([
    {
      name: "Mark Zuckerberg",
      url: "https://pyxis.nymag.com/v1/imgs/fcd/8a3/1b6a5a50521557429a406518ae8e1d25c0-31-mark-zuckerberg.rsquare.w330.jpg",
      age: 37,
      note: "ten od Facebooka",
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List invitedPeople={invitedPeople} />
      <Form />
      <TypeScriptSyntax />
    </div>
  );
}

export default App;
