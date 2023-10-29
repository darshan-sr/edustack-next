
import './HomePage.css'



const SigninSignupForm = () => {

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-500 to-red-400">
      <div className="box bg-white rounded-3xl shadow-xl w-full max-w-xl">
        <div className="inner-box relative w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="forms-wrap absolute h-full w-45 top-0 left-0 grid grid-cols-1 grid-rows-1 transition duration-800 ease-in-out">
            <form
              autoComplete="off"
              className="sign-in-form max-w-260 w-full mx-auto h-full flex flex-col justify-evenly"
            >
              <div className="logo flex items-center">
                <img src="./logo.png" alt="easyclass" className="w-6 mr-1" />
                <h4 className="text-base text-gray-700">EduStack</h4>
              </div>

              <div className="heading">
                <h2 className="text-2xl font-semibold text-gray-700">Welcome Back</h2>
                <h6 className="text-xs text-gray-500">Not registered yet?</h6>
                <a href="#" className="toggle text-sm text-gray-700">
                  Sign up
                </a>
              </div>

              <div className="actual-form">
                <div className="input-wrap relative h-37 mb-8">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field w-full h-full bg-none border-none outline-none border-b-1 border-gray-300 px-0 text-0.95rem text-gray-700 transition duration-400"
                    autoComplete="off"
                    required
                  />
                  <label className="absolute left-0 transform -translate-y-1/2 text-0.95rem text-gray-300 transition duration-400">
                    Name
                  </label>
                </div>

                <div className="input-wrap relative h-37 mb-8">
                  <input
                    type="password"
                    minLength="4"
                    className="input-field w-full h-full bg-none border-none outline-none border-b-1 border-gray-300 px-0 text-0.95rem text-gray-700 transition duration-400"
                    autoComplete="off"
                    required
                  />
                  <label className="absolute left-0 transform -translate-y-1/2 text-0.95rem text-gray-300 transition duration-400">
                    Password
                  </label>
                </div>

                <input
                  type="submit"
                  value="Sign In"
                  className="sign-btn inline-block w-full h-43 bg-gray-700 text-white border-none cursor-pointer rounded-0.8rem text-0.8rem mb-8 transition duration-300 hover:bg-indigo-700"
                />

                <p className="text text-xs text-gray-300">
                  Forgotten your password or your login details?{' '}
                  <a href="#" className="text-indigo-700 hover:text-indigo-500">
                    Get help
                  </a>{' '}
                  signing in.
                </p>
              </div>
            </form>


          </div>

          <div className="carousel absolute h-full w-55 left-45 top-0 bg-orange-200 rounded-2rem grid grid-rows-auto grid-cols-1 pb-8 overflow-hidden transition duration-800 ease-in-out">
            <div className="images-wrapper grid grid-rows-1 grid-cols-1">
              <img src="image1.png" className="image img-1 w-full" alt="" />
              <img src="image2.png" className="image img-2 w-full" alt="" />
              <img src="image3.png" className="image img-3 w-full" alt="" />
            </div>

            <div className="text-slider flex flex-col items-center justify-center">
              <div className="text-wrap overflow-hidden max-h-2.2rem mb-10">
                <div className="text-group flex flex-col text-center transform translate-y-0 transition duration-500">
                  <h2 className="text-1.6rem font-semibold line-h-2.2rem">Create your own courses</h2>
                  <h2 className="text-1.6rem font-semibold line-h-2.2rem">Customize as you like</h2>
                  <h2 className="text-1.6rem font-semibold line-h-2.2rem">Invite students to your class</h2>
                </div>
              </div>

              <div className="bullets flex items-center justify-center">
                <span className="active w-1.1rem h-1.1rem bg-gray-700 rounded-1rem mx-0.25rem cursor-pointer transition duration-300"></span>
                <span className="w-0.5rem h-0.5rem bg-gray-700 rounded-0.5rem mx-0.25rem cursor-pointer transition duration-300"></span>
                <span className="w-0.5rem h-0.5rem bg-gray-700 rounded-0.5rem mx-0.25rem cursor-pointer transition duration-300"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SigninSignupForm;
