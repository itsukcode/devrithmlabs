import React from 'react'
import "./header.css"
import Image from 'next/image'

function header() {
    return (

        <>
            <div className="main-head">

                <div className="main-inside-box-primary">
                    <div className="inside-box-1">
                        <p className="catagory text-xs"> • 39 minutes ago</p>
                        <h1 className='primary-heading'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, corrupti!</h1>
                        <p className="summary pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, nobis atque officia perferendis vitae quaerat eaque magni. Atque alias fugit possimus eaque! Nemo magni perferendis veritatis dolores possimus optio magnam quaerat totam, expedita nesciunt, quos accusamus cumque. Maiores veniam vel nostrum ipsa neque quidem pariatur nam accusamus, fugit quas sit?</p>
                        <div className="btn-inside pt-5">
                            <button className='btn-primary text-s'>devritmslabs.com •&nbsp;</button>
                            <button className='btn-primary text-s'>read more →</button>
                        </div>

                    </div>
                </div>


                <div className="verticle-line"></div>


                <div className="main-inside-box-secondary">
                    <div className="inside-box-2">
                        <p className="catagory text-xs"> • 39 minutes ago</p>
                        <h1 className='font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, corrupti!</h1>
                        <p className="summary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, nobis atque officia perferendis vitae quaerat eaque magni.</p>
                        <div className="btn-inside">
                            <button className='btn-primary text-s'>devritmslabs.com •&nbsp;</button>
                            <button className='btn-primary text-s'>read more →</button>
                        </div>
                    </div>

                    <hr />

                    <div className="inside-box-3">
                        <p className="catagory text-xs"> • 39 minutes ago</p>
                        <h1 className='font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, corrupti!</h1>
                        <p className="summary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, nobis atque officia perferendis vitae quaerat eaque magni.</p>
                        <div className="btn-inside">
                            <button className='btn-primary text-s'>devritmslabs.com •&nbsp;</button>
                            <button className='btn-primary text-s'>read more →</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="main-head-secondary">
                <div className="box-1">
                    <h1 className='font-bold text-xl pt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, corrupti!</h1>
                    <p className="summary pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, nobis atque officia </p>
                    <div className="btn-inside">
                        <button className='btn-primary text-s'>devritmslabs.com •&nbsp;</button>
                        <button className='btn-primary text-s'>read more →</button>
                    </div>
                </div>

                <div className="verticle-line"></div>

                <div className="box-1">
                    <h1 className='font-bold text-xl pt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, corrupti!</h1>
                    <p className="summary pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, nobis atque officia </p>
                    <div className="btn-inside">
                        <button className='btn-primary text-s'>devritmslabs.com •&nbsp;</button>
                        <button className='btn-primary text-s'>read more →</button>
                    </div>
                </div>

                <div className="verticle-line"></div>

                <div className="box-1">
                    <h1 className='font-bold text-xl pt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, corrupti!</h1>
                    <p className="summary pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, nobis atque officia </p>
                    <div className="btn-inside">
                        <button className='btn-primary text-s'>devritmslabs.com •&nbsp;</button>
                        <button className='btn-primary text-s'>read more →</button>
                    </div>
                </div>

            </div>

        </>

        /* <Image
            src="https://img.freepik.com/free-photo/regular-human-job-performed-by-anthropomorphic-futuristic-robot_23-2151043466.jpg?t=st=1715620277~exp=1715623877~hmac=a26aae3c783a90d3413cd5903492369c194802e45d3a02b1d3af0794efd7b6f9&w=826"
            width={550}
            height={400}
            alt="Picture of the author"
            className='rounded'
        /> */

    )
}

export default header