import axios from "axios";
import { outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import AuthService from "../services/auth.service";
import { useGlobalState } from "../context/GlobalState";
import jwtDecode from "jwt-decode";

const Login = () => {
  let navigate = useNavigate();

  const [state, dispatch] = useGlobalState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = (e) => {
    e.preventDefault();

    AuthService.login(username, password).then(async (resp) => {
      let data = jwtDecode(resp.access);

      await dispatch({
        currentUserToken: resp.access,
        currentUser: data,
      });
      navigate("dashboard/");
    });
  };
  return (
    <div className="c-form">
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            name="password"
            minLength="8"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
};

//   return (
//     <div className="text-center col col-4">
//       <main className="form-signin w-100 m-auto">
//         <form>
//           <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

//           <div className="form-floating">
//             <input
//               type="email"
//               className="form-control"
//               id="floatingInput"
//               placeholder="name@example.com"
//             />
//             <label htmlFor="floatingInput">Email address</label>
//           </div>
//           <div className="form-floating">
//             <input
//               type="password"
//               className="form-control"
//               id="floatingPassword"
//               placeholder="Password"
//             />
//             <label htmlFor="floatingPassword">Password</label>
//           </div>

//           <div className="checkbox mb-3">
//             <label>
//               <input type="checkbox" value="remember-me" /> Remember me
//             </label>
//           </div>
//           <button
//             onClick={postApiCall}
//             className="w-100 btn btn-lg btn-primary"
//             type="submit"
//           >
//             Sign in
//           </button>
//         </form>
//       </main>
//     </div>
//   );
// }

// export default Login;
//============================================================================================================================
//given code is below

// const Login = () => {
//   let navigate = useNavigate();

//   const [state, dispatch] = useGlobalState();

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     AuthService.login(username, password).then(async (resp) => {
//       let data = jwtDecode(resp.access);
//       await dispatch({
//         currentUserToken: resp.access,
//         currentUser: data,
//       });
//       navigate("/profile");
//     });
//   };

//   return (
//     <div className="c-form">
//       <form onSubmit={handleLogin}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="pass">Password</label>
//           <input
//             type="password"
//             id="pass"
//             name="password"
//             minLength="8"
//             required
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <input type="submit" value="Sign in" />
//       </form>
//     </div>
//   );
// };

export default Login;
