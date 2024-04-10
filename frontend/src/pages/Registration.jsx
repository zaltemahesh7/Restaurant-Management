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
        console.log('Success...', user);

        // Make fields empty
        setUser({ username: '', phone: '', email: '', password: '' })
    }

    try {
        
        
    } catch (error) {
        console.log('Error: ', error);
    }

    return (
        <>
            <section className='mt-9 bg-transparent' >
                <main className='bg-transparent'>
                    <div className="section-registration bg-transparent">
                        <div className="container w-full text-center m-auto grid items-center bg-transparent" >
                            <div className="registration-image bg-transparent">
                                {/* <img src="/images/img_rectangle150.png" width='500' height='700' alt="Registration Image" /> */}
                            </div>
                            <div className="registration-form bg-transparent">
                                <h1 className='text-6xl my-9 bg-transparent'>Registration</h1>
                                <br />

                                {/* Registration form */}

                                <form action="" method='post' onSubmit={getData} className='grid gap-3 md:gap-9 sm:gap-4 bg-transparent'>
                                    <div className='flex flex-col text-left text-xl bg-transparent'>
                                        {/* <label htmlFor="username">UserName</label> */}
                                        <input
                                            type="text"
                                            placeholder='username'
                                            className='border p-4 rounded bg-transparent'
                                            name='username'
                                            id='username'
                                            required
                                            autoComplete='off'
                                            value={user.username}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='flex flex-col text-left text-xl bg-transparent'>
                                        {/* <label htmlFor="phone">phone</label> */}
                                        <input
                                            type="number"
                                            className='border p-4 rounded bg-transparent'
                                            placeholder='Phone'
                                            name='phone'
                                            id='phone'
                                            required
                                            autoComplete='off'
                                            value={user.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='flex flex-col text-left text-xl bg-transparent'>
                                        {/* <label htmlFor="email">email</label> */}
                                        <input
                                            type="email"
                                            className='border p-4 rounded bg-transparent'
                                            placeholder='email'
                                            name='email'
                                            id='email'
                                            required
                                            autoComplete='off'
                                            value={user.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='flex flex-col text-left text-xl bg-transparent'>
                                        {/* <label htmlFor="password">password</label> */}
                                        <input
                                            type="password"
                                            className='border p-4 rounded bg-transparent'
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
                                    <button type='submit' className=' bg-pink-500 py-3 px-5 rounded m-auto' > Submit</button>
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