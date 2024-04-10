import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, Outlet } from "react-router-dom";

function GithubUserList() {
  useEffect(() => {
    fetchAPI();
  }, []);

  const [dataUser, setDataUser] = useState([]);

  async function fetchAPI() {
    const fetchURL = await fetch(`https://api.github.com/users`);
    const data = await fetchURL.json();
    if (!data) {
      return <h1>Loading...</h1>;
    } else {
      setDataUser(data);
    }
    console.log(data);
  }

  return (
    <>
      <Outlet />
      
      <div className="list-users">
        <h1 className="text-danger bg-dark bg-gradient p-3">
          Lista utenti Github
        </h1>
        <ListGroup>
          {dataUser.map((user) => (
            <ListGroup.Item key={user.id}>
              <Link to={`/users/${user.login}`}>{user.login}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <Link className="text-primary bg-dark bg-gradient p-2 rounded" to="/">
        Go to Home
      </Link>
    </>
  );
}

export default GithubUserList;
