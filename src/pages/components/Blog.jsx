import Image from 'next/image'
import React from 'react'
import p9 from '../../../public/img/9.png'
import p10 from '../../../public/img/10.png'
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';


function Blog() {
    return (
        <>
            <div className='d-flex justify-content-evenly align-items-center py-5' >
                <h2 className=' style-style '>Trusted by the best in the business </h2>
                <div className="">
                    <button className='icons-btn me-2'><FaArrowLeft className='icon text-black-50' /></button> <button className='icons-btn me-1'><FaArrowRight /></button>
                </div>

            </div>
            <div className="container">
                <div class="row row-cols-1 row-cols-md-2 g-4 mx-5">
                    <div class="col-md-6 ">
                        <div className="card position-relative Small shadow">
                            <Image className='position-absolute top-0 start-0 ms-5 translate-middle img' src={p9} width={75} height={75} alt={p9} />
                            <p class="card-text mx-4 mt-5">``Ut enim ad minima veniam ,quis nostrum exercitationem ullam corporis suscipit laboriosam,nisi ut aliquid ex ea commodi consequatur?Quisi autem vel eum iure reprehenderit qui in ea voluplate velit esse quam nihil molestiae consequatur,vel illum. ``</p>
                            <h5 className="card-title mx-4"> Alex Bern</h5>
                            <p className='mx-4'> COE by PixelPerfect</p>
                        </div>
                    </div>
                    <div class="col-md-6 ">
                        <div className="card position-relative Small shadow">
                            <Image className='position-absolute top-0 start-0 ms-5 translate-middle img' src={p10} width={75} height={75} alt={p9} />
                            <p class="card-text mx-4 mt-5">``Ut enim ad minima veniam ,quis nostrum exercitationem ullam corporis suscipit laboriosam,nisi ut aliquid ex ea commodi consequatur?Quisi autem vel eum iure reprehenderit qui in ea voluplate velit esse quam nihil molestiae consequatur,vel illum. ``</p>
                            <h5 className="card-title mx-4"> Alex Bern</h5>
                            <p className='mx-4'> COE by PixelPerfect</p>
                        </div>
                    </div>
                </div>
            </div >
            <section className='division   mt-5  '>
                <div className=' container  w-100 m-auto'>
                    <div className='d-flex justify-content-center align-items-center ' >
                        <div className="col-md-3   border-end">
                            <h2 className='text-white mx-5'>1830+</h2>
                            <p className='text-white mx-5'>Project executed</p>
                        </div>
                        <div className='col-md-3  border-end' >
                            <h2 className='text-white mx-5'>220</h2>
                            <p className='text-white mx-5'>Data analytics</p>
                        </div>
                        <div className='col-md-3 border-end' >
                            <h2 className='text-white mx-5'>390</h2>
                            <p className='text-white mx-5'>Data management</p>
                        </div>
                        <div className='col-md-3 mt-3 ' >
                            <h2 className=' text-white pt-3 mx-5'>834+</h2>
                            <p className='text-white mx-5'>Satisfied customers</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog