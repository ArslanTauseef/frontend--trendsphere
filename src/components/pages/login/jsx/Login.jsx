import "./../style/ts-login-window/ts-login/ts-login.css";
import "./../style/ts-login-window/ts-login-sign-in/ts-login-sign-in.css";
import "./../style/ts-login-window/ts-login-sign-up/ts-login-sign-up.css";
import "./../style/ts-login-overlay/ts-overlay/ts-overlay.css";
import "./../style/ts-login-overlay/ts-overlay-left/ts-overlay-left.css";
import "./../style/ts-login-overlay/ts-overlay-right/ts-overlay-right.css";

export const Login = () => {
  return (
    // This is background section
    <section className="ts-login-main-background">
      {/* This is first border glassy container */}
      <div className="ts-login-bordered-container">
        {/* This is what is holding the form elements */}
        <div className="ts-login-main-container">
          {/* Registration form */}
          <div className="ts-form-container sign-in">
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
          <div className="ts-form-container sign-up">
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
          <div className="ts-login-overlay-container">
            <div className="ts-shadow-overlay">
              {/* OVERLAY PANEL LEFT */}

              <div className="ts-overlay-panels ts-panel-left">
                <h1>Hello...</h1>
                <h3>Already signed up?</h3>
                <p>Click Login to get redirected to login session.</p>
                <div>
                  <button>Sign Up</button>
                </div>
              </div>
              {/* OVERLAY PANEL RIGHT */}
              <div className="ts-overlay-panels ts-panel-right">
                <h1>Hello...</h1>
                <h3>Haven't signed up yet?</h3>
                <p>Head to sign up form by clicking the button below.</p>
                <div>
                  <button>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
