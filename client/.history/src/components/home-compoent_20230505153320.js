import React from "react";

const HomeComponent = () => {
  return (
    <main>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Learning System</h1>
            <p className="col-md-8 fs-4">
              This Learning System consists of React.js as a Font-End Framework,
              And Node.js, MongoDB Atlas as a Back-End Server. It's a web
              application built by MERN
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              To see How it work
            </button>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>As a Student</h2>
              <p>
                Student can register the course they are interested in
              </p>
              <button className="btn btn-outline-light" type="button">
                Register or login an account
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>As an Instructor</h2>
              <p>
                Instructors are able to create courses online
              </p>
              <button className="btn btn-outline-secondary" type="button">
                今天開始開設課程
              </button>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; 2023 Wilson Ren
        </footer>
      </div>
    </main>
  );
};

export default HomeComponent;
