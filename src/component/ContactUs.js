import React from "react";

const Contact = () => {
  return (
    <section className="site-section contact-us-container" id="contact-us">
      <div className="container-fluid">
        <div className="row contact-us-row">
          <div className="col-12 col-md-9">
            <div className="display-4 text-center mb-5">Contact Us</div>
            <p className="lead-contact-us-text">If you would like us to add your charging station to our ever growing network, feel free to drop us an email with a brief description along with your contact details and we will get back to you.</p>
          </div>
          <div className="col-121 col-md-9">
            <div className="card px-3 py-4">
              <form>
                <div className="form-group">
                  <input type="text" name="name" id="fullname" className="form-control" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" id="emailaddress" className="form-control" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <textarea rows="5" name="comment" id="comment" className="form-control" placeholder="Details" required></textarea>
                </div>
                <div className="form-row text-center">
                  <div className="col">
                    <button type="submit" className="btn btn-secondary btn-contact-submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
