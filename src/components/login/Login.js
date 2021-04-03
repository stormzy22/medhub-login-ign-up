import { useState } from "react";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const [email, setEmail] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [eyeone, setEyeOne] = useState(false);

  return (
    <>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <div className="input">
          <input id="email" type="email" placeholder="Email" />
        </div>

        <div className="input">
          <span className="eyeone" onClick={() => setEyeOne(!eyeone)}>
            {eyeone ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}
          </span>
          <input type="password" placeholder="Password" />
        </div>
        {/* ---------------------------- */}
        <div className="confirm">
          <span className="_dot_cover" onClick={() => setToggle(!toggle)}>
            {toggle ? <span className="dot"></span> : ""}
          </span>
          <span className="t_c">
            I accept the terms of <s>MEDHUB</s>
          </span>
        </div>
        {/* -------------------- */}
        <div className="_s-txt">
          <p className="_agree">
            By joining, or logging in, you accept <s> MEDHUB </s>
            <s>Terms of Service </s>and <s>Privacy Policy.</s>
          </p>
        </div>
        {/* --------------------- */}
        <div className="_btn-sub">
          <button>Sign In</button>
        </div>
      </form>
    </>
  );
};

export default Login;
