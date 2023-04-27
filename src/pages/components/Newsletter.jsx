import React from "react";

function Newsletter() {
  return (
    <>
      <section className="division">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6">
              <h2 className="text-white">Subscribe to our newsletter</h2>
              <p className=" new text-white ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </div>
            <div className="col-md-6 ">
              <div className="input-group mt-5 w-75">
                <input
                  type="text"
                  className="form-control inp-new "
                  placeholder="Your email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn bg-white"
                  type="button"
                  id="button-addon2"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
