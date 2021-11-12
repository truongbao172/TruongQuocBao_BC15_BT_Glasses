import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="col-lg-4 col-xxl-4 mb-5">
        <div className="card bg-light border-0 h-100">
          <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
              <i className="bi bi-cloud-download" />
            </div>
            <h2 className="fs-4 fw-bold">Free to download</h2>
            <p className="mb-0">
              As always, Start Bootstrap has a powerful collectin of free
              templates.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
