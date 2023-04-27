import React from 'react'

function Contacts() {
    return (
        <>
            <section className="form">
          <div className="container py-5  ">
            <div className="row">
              <div className="col-md-7 ">
                <h1 className="title">
                  Left questions? Contacts us now for a free consultation and
                  free trial!
                </h1>
                <p className="par pb-3">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
                </p>
                  <div className="mb-3">
                  <p className="contact-style">Email address</p>
                  <span className="email-tel">ensome@info.co.us</span>
                  </div>
                  <div className="mb-3">
                    <p className="contact-style">Phone number</p>
                    <span className="email-tel">+1601-201-5580</span>
                  </div>
                  <div className="mb-3">
                    <p className="contact-style">Address</p>
                    <span className="email-tel">
                      1642 Washington Avenue, Jackson, MS, Mississippi, 39201
                    </span>
                  </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div class="card-body">
                    <h5 class="card-title mb-4">Contact Us</h5>
                    <form>
                      <div className="form-division">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Andrea" />
                      </div>
                      <div className="form-division">
                        <label htmlFor="Email"> Email </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="andrea@gmaol.com"
                        />
                      </div>
                      <div className="form-division">
                        <label htmlFor="job"> Theme </label>
                        <input type="text" id="job" placeholder="Job" />
                      </div>
                      <div className="form-division">
                        <label htmlFor="message">Message </label>
                        <input
                          type="text"
                          id="message"
                          placeholder="Your message "
                        />
                      </div>
                      <div className="form-group mb-4 pt-5">
                        <input
                          type="submit"
                          value="Send"
                          className="btn btn-primary inp"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default Contacts