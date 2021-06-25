/* 
  Implement a button which makes a get request to https://reqres.in/ to get a list of users and display them.
  100% free reign to accomplish this goal however you wish, within the context of react.

  apiMethods.js file has already been stubbed out for you. Feel free to use it or not.

  ****Make any changes to this boilerplate that you want to.*****
  ****The included code is only provided as a convienence.****
*/

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { getUsers } from "./apiMethods";

import "./styles.css";

function App(props) {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      if (data.status === 200) {
        setPerson([...data.data.data]);
      }
    });
  }, []);

  return (
    <div className="App">
      <h2>Users from API:</h2>

      <ul>
        {console.log(person)}
        {person.map((person) => (
          <li key={person.id}>
            <div class="card">
              <img src={person.avatar} alt="Avatar" />

              <div class="container">
                <h4>
                  <b>
                    <label> {person.first_name} </label>
                    <label> {person.last_name} </label>
                  </b>
                </h4>
                {person.email}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
