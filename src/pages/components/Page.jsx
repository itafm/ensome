import React from "react";
import Image from "next/image";
import p7 from "../../../public/img/7.png";
import p8 from "../../../public/img/8.png";

function Page() {
  return (
    <>
      <section className="Page">
        <div className="container">
          <div className="row py-5 ">
            <div className="col-md-6 ">
              <h2 className="fs-1 ">
                Find true power in your data with Ensome
              </h2>
              <p>
                set ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium,totam rem aperiam,eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <button className="btn btn-primary ">Learn more </button>
            </div>
            <div className="col-md-6">
              <Image
                className="img"
                src={p7}
                width={450}
                height={300}
                alt={p7}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6">
              <Image
                className="img"
                src={p8}
                width={450}
                height={300}
                alt={p8}
              />
            </div>
            <div className="col-md-6 ">
              <h2 className="fs-1 ">
                Find true power in your data with Ensome
              </h2>
              <p>
                set ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium,totam rem aperiam,eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <button className="btn btn-primary ">Learn more </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
