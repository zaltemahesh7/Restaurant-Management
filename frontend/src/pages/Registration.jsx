import React, { useState } from 'react'

function Registration() {
    const [user, setUser] = useState({
        username: '',
        phone: '',
        email: '',
        password: ''
    })

    function handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        // console.log(name, value);
        setUser({
            ...user,
            [name]: value
        })
    }

    const getData = (e) => {
        e.preventDefault()
        console.log('Success...', user.username);

        // Make fields empty
        setUser({username: '', phone: '', email: '', password: ''})
    }

    return (
        <>
            <section className='mt-9'>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-cols-1 md:grid-cols-2 md:gap-4">
                            <div className="registration-image">
                                <img src="/images/img_rectangle150.png" width='500' height='700' alt="Registration Image" />
                            </div>
                            <div className="registration-form">
                                <h1 className='text-6xl my-9'>Registration</h1>
                                <br />

                                {/* Registration form */}

                                <form action="" method='post' onSubmit={getData} className='grid gap-3 justify-center md:gap-9 sm:gap-4'>
                                    <div className='flex flex-col text-left text-xl'>
                                        {/* <label htmlFor="username">UserName</label> */}
                                        <input
                                            type="text"
                                            placeholder='username'
                                            className='border p-4 rounded'
                                            name='username'
                                            id='username'
                                            required
                                            autoComplete='off'
                                            value={user.username}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='flex flex-col text-left text-xl'>
                                        {/* <label htmlFor="phone">phone</label> */}
                                        <input
                                            type="number"
                                            className='border p-4 rounded'
                                            placeholder='Phone'
                                            name='phone'
                                            id='phone'
                                            required
                                            autoComplete='off'
                                            value={user.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='flex flex-col text-left text-xl w-96'>
                                        {/* <label htmlFor="email">email</label> */}
                                        <input
                                            type="email"
                                            className='border p-4 rounded'
                                            placeholder='email'
                                            name='email'
                                            id='email'
                                            required
                                            autoComplete='off'
                                            value={user.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='flex flex-col text-left text-xl'>
                                        {/* <label htmlFor="password">password</label> */}
                                        <input
                                            type="password"
                                            className='border p-4 rounded'
                                            placeholder='password'
                                            name='password'
                                            id='password'
                                            required a
                                            utoComplete='off'
                                            value={user.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <br />
                                    <button
                                        type='submit'
                                        className=' bg-pink-500 p-4 rounded'
                                    >Submit</button>
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