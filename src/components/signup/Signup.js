import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [toggle, setToggle] = useState(false);
  const [eyeone, setEyeOne] = useState(false);
  const [eyetwo, setEyeTwo] = useState(false);
  return (
    <>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <div className="input">
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="input">
          <input type="email" placeholder="Email" />
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
        <div className="input">
          <span className="eyeone" onClick={() => setEyeTwo(!eyetwo)}>
            {eyetwo ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}
          </span>
          <input type="password" placeholder="Confirm Password" />
        </div>

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
        {toggle && (
          <div className="_btn-sub">
            <button>Sign Up</button>
          </div>
        )}
      </form>
    </>
  );
};

export default Signup;
