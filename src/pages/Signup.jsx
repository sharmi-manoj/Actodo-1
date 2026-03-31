import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const navigate = useNavigate();
  const users = props.users;
  const setUsers = props.setUsers;

  const [euserName, setenterUsername] = useState();
  const [epassword, setenterPassword] = useState();

  function handleUserInput(evt) {
    setenterUsername(evt.target.value);
  }

  function handlePassInput(evt) {
    setenterPassword(evt.target.value);
  }

  function addUser() {
    setUsers([...users, { username: euserName, password: epassword }]);
    navigate("/");
  }

  return (
    <div className="bg-black p-10 ">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        <p>Signup Here :)</p>

        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            onChange={handleUserInput}
            placeholder="Username"
          />
          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            onChange={handlePassInput}
            placeholder="Password"
          />
          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Confirm Password"
          />

          <button
            className="bg-[#FCA201] w-24 p-1 rounded-md"
            onClick={addUser}
          >
            SignUp
          </button>
          <p>
            Already Have an Account?{" "}
            <Link to={"/"} className="underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
