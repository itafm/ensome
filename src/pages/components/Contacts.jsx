import React from 'react'

function Contacts() {
    return (
        <>
            <section className='contact py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h2>Left question ? Contacts us now for a free consultation and free trial!</h2>
                            <p>Ut enim ad minima veniam,quis nostrum exercitationem ullam corporis suscipit laboriosam,nisi ut aliquid ex ea commodi</p>

                            <p>Email adress</p>
                            <h6 className='fw-bold'>ensome@info.co.us</h6>
                            <p>Phone number</p>
                            <h6 className='fw-bold'>+1601-201-5580</h6>
                            <p>Adress</p>
                            <h6 className='fw-bold'>1642 Washington Avenue,jackson,MS,Mississippi,39201</h6>
                        </div>
                        <div className="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="card-title py-3">Contact Us</h3>
                                    <p class="card-text">Name</p>
                                    <h6>Andrea</h6>
                                    <hr></hr>
                                    <p class="card-text">Email</p>
                                    <h6>ensome@info.co.us</h6>
                                    <hr></hr>
                                    <p class="card-text">Theme</p>
                                    <h6>job</h6>
                                    <hr></hr>

                                    <p class="card-text">Message</p>
                                    <h6>your message    </h6>
                                    <a href="#" class="btn btn-primary">Send</a>
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