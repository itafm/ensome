import React from 'react'
import imag from '../../../public/img/imag.png'
import p from '../../../public/img/1.png'
import p2 from '../../../public/img/2.png'
import p3 from '../../../public/img/3.png'
import p4 from '../../../public/img/4.png'
import p5 from '../../../public/img/5.png'
import p6 from '../../../public/img/6.png'

import Image from 'next/image'
import { FaRegPlayCircle } from 'react-icons/fa';

function Banner() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row mx-5 py-5 ">
                        <div className="col-md-6 ">
                            <h2 className='fs-1 '>Find true power in your data with Ensome</h2>
                            <p>set ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam,eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <button className='btn btn-primary '>Learn more </button>
                            <span className='ms-5 '><FaRegPlayCircle /> Watch the demo</span>
                        </div>
                        <div className="col-md-6">
                            <Image className='img' src={imag} width={450} height={300} alt={imag} />
                        </div>
                    </div>
                </div>
                <div className="container-fluid logos">
                    <div className="row row-logo">
                        <div className="col-md-12 ">
                            <Image className='' src={p} width={180} height={130} alt={imag} />

                            <Image src={p2} width={180} height={130} alt={p2} />

                            <Image src={p3} width={180} height={130} alt={p3} />

                            <Image src={p4} width={180} height={130} alt={p4} />

                            <Image src={p5} width={180} height={130} alt={p5} />

                            <Image src={p6} width={180} height={130} alt={p6} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner