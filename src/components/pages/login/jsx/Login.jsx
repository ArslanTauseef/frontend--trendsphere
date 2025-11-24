import "./../style/ts-login-window/ts-login/ts-login.css";
import "./../style/ts-login-window/ts-login-sign-in/ts-login-sign-in.css";
import "./../style/ts-login-window/ts-login-sign-up/ts-login-sign-up.css";
import "./../style/ts-login-overlay/ts-overlay/ts-overlay.css";
import "./../style/ts-login-overlay/ts-overlay-left/ts-overlay-left.css";
import "./../style/ts-login-overlay/ts-overlay-right/ts-overlay-right.css";
import { useState, useEffect } from "react";

export const Login = () => {
  const [overlaySignUp, setOverlaySignUp] = useState(false);

  const handleOverLaySignUp = () => {
    setOverlaySignUp((prev) => !prev);
    console.log("Overlay state changed:", overlaySignUp);
  };

  useEffect(() => {
  }, [overlaySignUp]);

  return (
    // This is background section
    <section className="ts-login-main-background">
      {/* This is first border glassy container */}
      <div className="ts-login-bordered-container">
        {/* This is what is holding the form elements */}
        <div className="ts-login-main-container">
          {/* Registration form */}
          <div className={overlaySignUp? "ts-form-container sign-in ts-form-container-shift" : "ts-form-container sign-in" }>
            <form action="">
              <div>
                <label htmlFor="">User name</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input type="text" />
              </div>
              <div>
                <button>Login</button>
              </div>
            </form>
          </div>
          <div className={overlaySignUp? "ts-form-container sign-up ts-form-container-shift" : "ts-form-container sign-up"}>
            <form action="">
              <div>
                <label htmlFor="">First name</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Last name</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Confirm Password</label>
                <input type="text" />
              </div>
              <div>
                <button>Login</button>
              </div>
            </form>
          </div>
          {/* 
          ////////////////////
          
          SEPERATOR

          ////////////////////
          */}
          {/* Overlay */}
          <div className={overlaySignUp? "ts-login-overlay-container ts-login-overlay-container-shift" : "ts-login-overlay-container"}>
            <div className={overlaySignUp? "ts-shadow-overlay ts-shadow-overlay-shift": "ts-shadow-overlay"}>
              {/* OVERLAY PANEL LEFT */}

              <div className="ts-overlay-panels ts-panel-left">
                <h1>Hello...</h1>
                <h3>Already have an account?</h3>
                <p>Click <strong>Sign In</strong> to switch to the login form.</p>
                <div>
                  <button onClick={handleOverLaySignUp}>Sign In</button>
                </div>
              </div>
              {/* OVERLAY PANEL RIGHT */}
              <div className="ts-overlay-panels ts-panel-right">
                <h1>Hello...</h1>
                <h3>Haven't signed up yet?</h3>
                <p>Head to <strong>Sign Up</strong> form by clicking the button below.</p>
                <div>
                  <button onClick={handleOverLaySignUp}>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
