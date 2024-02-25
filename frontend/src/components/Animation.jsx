import './anim.css'
import React from 'react'

function animation() {
    return (
        <>
            <section className=' flex justify-center items-center h-[100vh] bg-[#042104]'>
                <div className="loder relative h-28 w-28">
                    <span className=' absolute top-0 left-0 w-full h-full before:content-none before:top-0 before:left-0 before:w-4 before:h-4 before:bg-[#00ff0a]'></span>
                </div>
            </section>
        </>

        // <div class="sup_main">
        //     <div class="main bg-white rounded-full">
        //     </div>
        //     <div class="in_main"></div>
        // </div>
    )
}

export default animation

