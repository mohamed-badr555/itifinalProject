import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-3 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Your Store</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#007bff", height: "2px" }} />
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </p>
          </div>

          <div className="col-md-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Products</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#007bff", height: "2px" }} />
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="#!" className="text-white text-decoration-none">Product 1</Link></li>
              <li className="mb-2"><Link to="#!" className="text-white text-decoration-none">Product 2</Link></li>
              <li className="mb-2"><Link to="#!" className="text-white text-decoration-none">Product 3</Link></li>
              <li className="mb-2"><Link to="#!" className="text-white text-decoration-none">Product 4</Link></li>
            </ul>
          </div>

          <div className="col-md-3 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Contact</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#007bff", height: "2px" }} />
            <address>
              <ul className="list-unstyled">
                <li className="mb-2"><i className="bi bi-geo-alt"></i> New York, NY 2333, US</li>
                <li className="mb-2"><i className="bi bi-envelope"></i> info@example.com</li>
                <li className="mb-2"><i className="bi bi-phone"></i> + 01 234 567 88</li>
                <li className="mb-2"><i className="bi bi-printer"></i> + 01 234 567 89</li>
              </ul>
            </address>
          </div>

          <div className="col-md-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Follow Us</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#007bff", height: "2px" }} />
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="#!" className="text-decoration-none text-white"><i className="bi bi-facebook me-1"></i> Facebook</Link></li>
              <li className="mb-2"><Link to="#!" className="text-decoration-none text-white"><i className="bi bi-twitter"></i> Twitter</Link></li>
              <li className="mb-2"><Link to="#!" className="text-decoration-none text-white"><i className="bi bi-instagram"></i> Instagram</Link></li>
              <li className="mb-2"><Link to="#!" className="text-decoration-none text-white"><i className="bi bi-linkedin"></i> LinkedIn</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
