import { useDispatch } from "react-redux";
import FakeUserData from "../../Api/FakeUserData";
import { addUser } from "../../store/slice/UserSlice";

const Home = () => {
    const dispatch = useDispatch();

    const handleAdd = e =>{
        console.log(e);
        dispatch(addUser(e))
    }
  return (
    <div className="max-w-7xl m-auto">
      <div>
        <h2>Navbar</h2>
      </div>

      <div className="w-full bg-gray-200 p-7">
        {/*  */}
        <div className="max-w-2xl flex justify-between items-center  m-auto ">
          <h2 className="text-3xl font-semibold text-green-600">
            List of users
          </h2>
          <h2>
            <button onClick={()=> handleAdd(FakeUserData())} className="text-2xl px-4 rounded-md py-3 font-bold bg-gradient-to-r from-cyan-500 to-blue-500">
              Add New User
            </button>
          </h2>
        </div>

        <div className="max-w-2xl my-2 flex justify-between items-center  m-auto border-b-2 border-gray-500 ">
          <h2 className="text-xl font-semibold text-gray-400">List of users</h2>
          <h2>
            <button className="text-2xl text-red-600 font-extrabold">X</button>
          </h2>
        </div>

        <div className="max-w-2xl flex items-end justify-end mt-4 m-auto text-end">
          <button className=" text-xl px-4 rounded-md py-3 font-bold bg-gradient-to-r from-yellow-500 to-red-500   ">
            Delete all Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
