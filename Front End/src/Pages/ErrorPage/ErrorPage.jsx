import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./error.css";
export default function ErrorPage({ logOut }) {
  return (
    <Fragment>
      <div className="row card-container justify-content-center">
        <div className="col-md-12 col-sm-12">
          <div className="card-err shadow-lg border-0 rounded-lg mt-5 mx-auto">
            <h3 className="card-header display-1 text-muted text-center">
              Oops ㋡
            </h3>
            <span className="card-subtitle mb-2 text-muted text-center">
              {" "}
              Something went wrong!
            </span>

            <h5>You Are {localStorage.getItem("name")} .</h5>
            <span className="card-subtitle mb-2 text-muted text-center">
              You Can Login Or Back To Home..
            </span>
            <div className="card-body mx-auto">
              <Link
                type="button"
                to="/home"
                style={{ margin: "5px" }}
                className="btn btn-sm btn-info text-white"
              >
                {" "}
                Back To Home{" "}
              </Link>
              <Link
                type="button"
                onClick={() => {
                  logOut();
                }}
                style={{ margin: "5px" }}
                to="/"
                className="btn btn-sm btn-danger text-white"
              >
                {" "}
                Login{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
