import React from 'react'
import { FaKey } from 'react-icons/fa';
import { FaBrain } from 'react-icons/fa';
import { FaCompressArrowsAlt} from 'react-icons/fa';

function Solutions() {
    return (
        <>
            <section className='style py-4'>
                <h2 className='style-h2'>Why our clients chosse Ensome? </h2>
                <p className='style-p  '>Doloremque landantium,totam rem aperiam,eaque ipsa quae ab illo inventor veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                <div className="container">
                    <div class="row">
                        <div class="col-sm-4 mb-3 mb-sm-0">
                            <div class="card">
                                <div class="card-body">
                                    <button className=' style-btn text-primary  my-4 ms-3'><FaBrain /></button>
                                    <h3 class="card-title">Machine learning</h3>
                                    <p class="card-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis prasentium voluptatum deleniti atque corrupti quos dolores.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card">
                                <div class="card-body">

                                    <button className=' style-btn text-primary  my-4 ms-3'><FaCompressArrowsAlt /></button>
                                    <h3 class="card-title">Embed analytics</h3>
                                    <p class="card-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis prasentium voluptatum deleniti atque corrupti quos dolores..</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card">
                                <div class="card-body">
                                    <button className=' style-btn text-primary  my-4 ms-3'><FaKey /></button>
                                    <h3 class="card-title">Access control</h3>
                                    <p class="card-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis prasentium voluptatum deleniti atque corrupti quos dolores.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Solutions