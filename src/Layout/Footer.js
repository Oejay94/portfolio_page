import React from "react";

const Footer = () => (
  <footer className="bg-dark text-center text-white">
    <div className="container p-4">
      <section className="mb-4">
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="https://www.facebook.com/joe.brown.12327"
          target="_blank"
          rel="noopener noreferrer"
          role="button"
        >
          <i className="bi bi-facebook"></i>
        </a>

        <a
          className="btn btn-outline-light btn-floating m-1"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
          role="button"
        >
          <i className="bi bi-twitter"></i>
        </a>

        <a
          className="btn btn-outline-light btn-floating m-1"
          href="https://www.instagram.com/oejay1994/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          role="button"
        >
          <i className="bi bi-instagram"></i>
        </a>

        <a
          className="btn btn-outline-light btn-floating m-1"
          href="https://www.linkedin.com/in/joseph-d-brown/"
          target="_blank"
          rel="noopener noreferrer"
          role="button"
        >
          <i className="bi bi-linkedin"></i>
        </a>

        <a
          className="btn btn-outline-light btn-floating m-1"
          href="https://github.com/Oejay94"
          target="_blank"
          rel="noopener noreferrer"
          role="button"
        >
          <i className="bi bi-github"></i>
        </a>
      </section>

      <section className="">
        <form action="">
          <div className="row d-flex justify-content-center">
            <div className="col-auto">
              <p className="pt-2">
                <strong>Send me an Email!</strong>
              </p>
            </div>

            <div className="col-md-5 col-12">
              <div className="form-outline form-white mb-4">
                <input
                  type="email"
                  id="form5Example21"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form5Example21">
                  Email address
                </label>
              </div>
            </div>

            <div className="col-auto">
              <button type="submit" className="btn btn-outline-light mb-4">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </section>

      <section className="mb-4">
        <p>
            If you have any questions feel free to shoot me an email using the option provided
            and feel free to add me on Social Media as well!
        </p>
      </section>
    </div>

    {/* <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      © 2022 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">
        MDBootstrap.com
      </a>
    </div> */}
  </footer>
);

export default Footer;
