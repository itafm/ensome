import React from "react";
import Logo from "../../../public/img/logo.png";
import Image from "next/image";
import fac from "../../../public/img/fac.png";
import twi from "../../../public/img/twiter.png";
import lin from "../../../public/img/in.png";
import vid from "../../../public/img/vid.png";
import ball from "../../../public/img/ball.png";
import be from "../../../public/img/be.png";

function Footer() {
  return (
    <>
      <div className="container py-5">
        <div className="d-flex  justify-content-around">
          <div>
            <Image className="" src={Logo} width={141} height={42} alt="tt" />
          </div>
          <div className="">
            <div class="row gap-3">
              <div class="col foot">
                About
                <div>
                  <h6>Home</h6>
                  <h6>AboutUs</h6>
                  <h6>Services</h6>
                  <h6>Solutions</h6>
                </div>
              </div>
              <div class="col foot">
                Information
                <div>
                  <h6>Contacts</h6>
                  <h6>Our team</h6>
                  <h6>Blog</h6>
                  <h6>FAQ</h6>
                </div>
              </div>
              <div class="col foot">
                Service
                <div>
                  <h6>Pages</h6>
                  <h6>Elements</h6>
                  <h6>Site map</h6>
                  <h6>Pricing</h6>
                  <h6>FAQ</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8 foot">
              Contacts
              <div className="d-flex gap-5">
                <div>
                  <p className="footer">+1601-201-5580</p>
                  <p className="footer">ensome@info.co.us →</p>
                </div>
                <div>
                  <p className="footer">
                    1642 Washington Avenue, Jackson, MS, Mississippi, 39201 
                  </p>
                  <p className="footer">Driving directions →</p>
                </div>
              </div>
            </div>

            <div class="col foot ">
              Social
              <div className="mt-3 d-flex gap-2">
                <Image className="" src={fac} width={30} height={30} alt="tt" />
                <Image className="" src={twi} width={30} height={30} alt="tt" />
                <Image className="" src={lin} width={30} height={30} alt="tt" />
                <Image className="" src={vid} width={30} height={30} alt="tt" />
                <Image
                  className=""
                  src={ball}
                  width={30}
                  height={30}
                  alt="tt"
                />
                <Image className="" src={be} width={30} height={30} alt="tt" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-4">
            <p>Privacy policy → </p>
            <p>Terms of us → </p>
          </div>
          <div>
            <p>&copy; 2022 Ensome. All Rights Reserves</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
