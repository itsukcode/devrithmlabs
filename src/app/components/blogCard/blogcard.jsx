import "./blogcard.css"
import Image from "next/image"

function blogcard() {
    return (
        <>
                <div className="small-card">

                    <div className="img-small">
                        <Image src="https://img.freepik.com/free-photo/medium-shot-futuristic-romantic-couple_23-2151111304.jpg?t=st=1715700658~exp=1715704258~hmac=5ae4a8fa4f99979a1a701f81c990ac4b1e0ba0039b4436a47ecdce905d0c0bc8&w=740"
                            width={500}
                            height={600}
                            alt="Picture of the author"
                            className='rounded-img'
                            priority={true}
                        />
                    </div>
                    <div className="content">
                        <h1 className="text-xl font-semibold">Lorem ipsum dolor sit amet.</h1>
                        <p >Lorem ipsum dolor sit amet ectetur adipisicing elit. Dignissimos reiciendis vel exercitationem consectetur ullam ducimus.</p>
                        <hr className="text-center relative inset-y-1"/>
                        <div className="btn-inside">
                            <button className='btn-primary text-s'>devritmslabs.com •&nbsp;</button>
                            <button className='btn-primary text-s'>read more →</button>
                        </div>
                    </div>
                </div>

        </>
    )
}

export default blogcard