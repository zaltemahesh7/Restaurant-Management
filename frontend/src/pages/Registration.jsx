import React from 'react'

function Registration() {
    return (
        <>
            <section className='mt-9'>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-cols-2">
                            <div className="registration-image">
                                <img src="/images/img_rectangle150.png" width='500' height='700' alt="Registration Image" />
                            </div>
                            <div className="registration-form">
                                <h1 className='text-6xl my-9'>Registration form</h1>
                                <br />
                                <form action="">
                                    <div className=''>
                                        <label htmlFor="username">UserName</label>
                                        <input type="text" placeholder='username' name='username' id='username' required autoComplete='off' />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">phone</label>
                                        <input type="text" placeholder='Phone' name='phone' id='phone' required autoComplete='off' />
                                    </div>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input type="email" placeholder='email' name='email' id='email' required autoComplete='off' />
                                    </div>
                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input type="password" placeholder='password' name='password' id='password' required autoComplete='off' />
                                    </div>
                                    <br />
                                    <button type='submit' className=''>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Registration