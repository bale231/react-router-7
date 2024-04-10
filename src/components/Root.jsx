import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import "bootstrap/dist/css/bootstrap.min.css";
import GithubUserList from "./GithubUserList";
import ShowGithubUser from "./ShowGithubUser";
import Welcome from "./Welcome";

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <h5>
              <App />
            </h5>
          }
        />
        <Route path="users" element={<GithubUserList />}>
          <Route index element={<Welcome />} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route
          path="*"
          element={
            <>
              <h1>404</h1>
              <p>Page not found.</p>
              <button>
                <Link className="bg-danger text-white p-2 rounded" to="/">
                  Go back to Home
                </Link>
              </button>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
