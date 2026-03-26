import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <span className="logo-p">P</span>
          <span>ERSEUS</span>
        </div>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Refund Policy</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-copy">
          © 2026 PERSEUS. All rights reserved.
        </div>

        <p className="footer-disclaimer">
          Results shown are not typical. Individual results will vary based on effort, commitment, and market conditions.
        </p>
      </div>
    </footer>
  )
}
