import "./Footer.css";
export function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-heading">Get In Touch</div>

        <div className="footer-details">
          <div className="footer-details-note">
            <i className="fa-solid fa-envelope"></i>
            <a
              className="address-link"
              href="mailto:olanrewajushokanbi@gmail.com"
            >
              olanrewajushokanbi@gmail.com
            </a>
          </div>

          <div className="footer-details-note">
            <i className="fa-solid fa-phone"></i>
            <a className="address-link" href="tel:08121907072">
              +2348121907072
            </a>
          </div>

          <div className="footer-details-note">
            <i className="fa-solid fa-house"></i>{" "}
            <div className="address-link">Lagos Nigeria</div>
          </div>
        </div>
      </div>
    </>
  );
}
