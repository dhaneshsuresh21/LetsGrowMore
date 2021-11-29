import React from 'react';

import Users from './Users';

function UseEffectApi() {
  const [loading, setLoading] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [Buttonaction, setButtonAction,] = React.useState(false);
  const handleClick = () => {
    setButtonAction(true);

    // fetching data from the third party api
    fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((res) => {

        setUserData(res.data);
        setInterval(() => {
          setLoading(true);
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      { }
      <section>
        <nav className="NavBar">
          <div>
              <ul >
                <button className='flex mt-4 ml-20  pl-6 pr-6 text-lg bg-yellow-500 text-black rounded py-2 px-2 mr-4 hover:bg-gray-900 hover:text-white font-bold'onClick={handleClick}>
                  Get Users
                </button>
              </ul>
          </div>
            
              
        </nav>
      { }

        <div className="">
          <div className="">
            {Buttonaction ? (
              loading ? (
                <Users userData={userData} />
              ) :
               (
                <div className="Loading">
                </div>
              )
            ) : (
              <div  >
                <p className="ml-20 mt-10">Click the GetUsers Button</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default UseEffectApi;
