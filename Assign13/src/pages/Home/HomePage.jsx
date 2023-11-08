import React from "react";

function HomePage() {
  return (
    <div className="mt-3 container  pt-5 text-dark" style={{ height: "400px" }}>
      <h2>This is Home Page</h2>

      <footer className=" bg-dark pb-4 foot">
        <div className="left d-flex justify-content-evenly p-4">
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">You tube</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
          <div className="quick-links text-white">
            <h4 className="quick">Quick links</h4>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">You tube</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <h4 className="text-white text-center mb-3 copy">
          All right reserved &copy; 2023
        </h4>
      </footer>
    </div>
  );
}

export default HomePage;
