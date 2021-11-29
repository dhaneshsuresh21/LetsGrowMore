import React from 'react';
export default function Users(props) {
  return (
    <>
      {props.userData.map((user, index) => {
        return (

            
            

        <div className="Card ml-20 flex justify-center items-center">
            <div className="flex-1">
                <img src={user.avatar} alt='' className='object-center object-cover rounded-full h-24 w-24' />  
                
                <div className='Details'>
                    <h3 className="text-xl text-black font-bold mb-2">
                        {user.first_name} {user.last_name}
                    </h3>
                    <p className="text-xl text-black font-bold mb-2">{user.email}</p>
                </div>
            </div>
        </div>




          
        );
      })}
    </>
  );
}