import React from 'react';
import { useAuth } from '../Store/auth';

function Aboutus() {
    const { user } = useAuth();
    console.log(user);
    return (
        <>
            {/* <Navbar/> */}
            <div className='grid text-2xl gap-20 sm:m-11 max-sm:w-60 mx-auto my-9'>
                <div className='grid sm:grid-cols-2 md:gap-4 text-sm grid-cols-1 items-center max-sm:gap-4'>
                    <img src="https://cdn.pixabay.com/photo/2021/07/02/05/09/paneer-tikka-6380891_1280.jpg" width='500px' className='rounded-md' alt="Image1" />
                    <p> {user} Surbhi Pure Veg restaurant is an unassuming vegetarian restaurant, priding itself on serving everyday dal, rice, paneer dishes, and an array of curries. The restaurant offers various service options including kerbside pickup, no-contact delivery, delivery, drive-through, takeaway, and dine-in facilities.</p>
                </div>
                <div className='grid sm:grid-cols-2  items-center max-sm:gap-4'>

                    <p>For those seeking a hearty meal, Hotel Surbhi Pure Veg provides all-you-can-eat options alongside coffee, late-night food, and small plates for lighter appetites. The dining options cater to all times of the day with breakfast, brunch, lunch, dinner, and dessert offerings available.</p>
                    <img src="https://cdn.pixabay.com/photo/2016/11/12/21/01/curry-1819752_640.jpg" width='500px' className='rounded-md' alt="Image1" />
                </div>

                <div className='grid sm:grid-cols-2 items-center max-sm:gap-4'>

                    <img src="https://cdn.pixabay.com/photo/2021/07/04/13/23/green-curry-6386360_640.jpg" width='500px' className='rounded-md' alt="Image1" />
                    <p>The restaurant boasts amenities such as clean toilets, ensuring a comfortable dining experience. With a casual atmosphere welcoming to all, Hotel Surbhi Pure Veg is often frequented by groups seeking delicious vegetarian fare.</p>
                </div>

                <div className='grid sm:grid-cols-2 items-center max-sm:gap-4'>

                    <p>Planning a visit is made easy as the restaurant accepts reservations, allowing guests to secure their spot in advance. Payment methods include credit cards and mobile wallets for added convenience.
                    </p>
                    <img src="https://cdn.pixabay.com/photo/2021/07/02/05/09/paneer-tikka-6380891_1280.jpg" width='500px' className='rounded-md' alt="Image1" />
                </div>
                <div className='grid sm:grid-cols-2 items-center max-sm:gap-4'>

                    <img src="https://cdn.pixabay.com/photo/2021/07/02/05/09/paneer-tikka-6380891_1280.jpg" width='500px' className='rounded-md' alt="Image1" />
                    <p>Families with children are warmly welcomed, with a dedicated kids' menu available to cater to younger diners. Parking is hassle-free, with both free parking lot and street parking options available nearby.
                    </p>
                </div>



            </div>
        </>
    )
}

export default Aboutus