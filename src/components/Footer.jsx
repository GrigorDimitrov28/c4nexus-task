import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">
          <h4>Silhouette</h4>
        </div>
        <nav class="footer-links">
          <ul>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="footer-copyright">
        <p>&copy; 2023 Silhouette. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
