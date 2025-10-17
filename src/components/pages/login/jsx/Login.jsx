import "./../style/ts-login.css";

export const Login = () => {
  return (
    <section className="ts-login-main-background">
      <div className="ts-login-bordered-container">
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
              <button>Login</button>
            </form> {/* Sign In Form */}
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
              <button>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
