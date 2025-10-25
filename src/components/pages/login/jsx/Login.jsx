import "./../style/ts-login/ts-login.css";
import "./../style/ts-login-sign-in/ts-login-sign-in.css";
import "./../style/ts-login-sign-up/ts-login-sign-up.css";

export const Login = () => {
  return (
    // This is background section
    <section className="ts-login-main-background">
      {/* This is first border glassy container */}
      <div className="ts-login-bordered-container">
        {/* This is what is holding the form elements */}
        <div className="ts-login-main-container">
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
        </div>
      </div>
    </section>
  );
};
