import React from 'react'

const Showcase = () => {
    return (
        <>
            <section className="showcase">
               
                <div className="overlay px-5 flex flex-col items-center justify-center text-center">
                    <h1 className="font-bold text-white text-4xl mb-4 md:text-5xl xl:text-6xl 2xl:text-7xl"> A modern publishing platform</h1>
                    <p className="text-white">  Grow your audience and build your online brand</p>
                <ul className="flex items-center">
                    <li className="mx-1 my-5"><button className="btn-light bg-white px-4 py-2 rounded-full">Start for Free</button></li>
                    <li className="mx-1 my-5"><button className="border border-white px-4 py-2 text-white rounded-full">Learn More</button></li>
                </ul>
                </div>
            </section>
        </>
    )
}

export default Showcase
