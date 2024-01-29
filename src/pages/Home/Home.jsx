
const Home = () => {
  return (
    <div className="max-w-7xl m-auto">
      <div>
        <h2>Navbar</h2>
      </div>

      <div className="w-full bg-gray-200 p-7">
        <div className="max-w-2xl flex justify-between items-center  m-auto ">
          <h2 className="text-3xl font-semibold text-green-600">
            List of users
          </h2>
          <h2>
           
            <button className="text-2xl px-4 rounded-md py-3 font-bold bg-gradient-to-r from-cyan-500 to-blue-500">
              
              Add New User
            </button>
          </h2>
        </div>

        
      </div>
    </div>
  );
};

export default Home;
