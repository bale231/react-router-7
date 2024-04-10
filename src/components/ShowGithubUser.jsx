import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function ShowGithubUser() {
  const [user, setUser] = useState("");
  const { username } = useParams();

  async function fetchUsers() {
    try {
      const fetchURL = await fetch(`https://api.github.com/users/${username}`);
      const jsonData = await fetchURL.json();
      if (!jsonData) {
        return <h1>Loading...</h1>;
      } else {
        setUser(jsonData);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [username]);

  return (
    <Card className="shadow-lg p-3 mb-5 bg-body rounded w-100">
      <Card.Img variant="top" src={user.avatar_url} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Title>{user.login}</Card.Title>
        <Card.Text>{user.bio}</Card.Text>
        <Link
          className="rounded bg-success bg-gradient p-2 text-white"
          to="/users"
        >
          Go Back
        </Link>
      </Card.Body>
    </Card>
  );
}
export default ShowGithubUser;
