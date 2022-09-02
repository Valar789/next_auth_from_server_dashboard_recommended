
import {  signIn,  } from "next-auth/react";
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { unstable_getServerSession } from "next-auth/next"



const login = () => {

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header">
                <h3 className="text-center font-weight-light my-4">
                  Iniciar Sesion
                </h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="d-flex d-flex justify-content-center gap-3">
                    {/* <input
                      className="form-control"
                      id="inputEmail"
                      type="email"
                      placeholder="name@example.com"
                    />

                    <label>Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="inputPassword"
                      type="password"
                      placeholder="Password"
                      autoComplete="off"
                    />

                    <label>Password</label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      id="inputRememberPassword"
                      type="checkbox"
                      value=""
                    />

                    <label className="form-check-label">
                      Remember Password
                    </label>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                    <a className="small" href="password.html">
                      Forgot Password?
                    </a> */}

                    <a type="submit" href="/api/auth/signin/credentials" className="btn btn-primary">
                      Usar Password y contraseña
                    </a>
                  </div>
                </form>
                <div className="row text-center py-3">
                  <p>Login with</p>
                  <div className="d-flex d-flex justify-content-center gap-3">
                    <a onClick={() => signIn('github')} href="#!">
                      <img className="icon" src="/github.png" alt="github" />
                    </a>
                    <a onClick={() => signIn('facebook')} href="#!">
                      <img
                        className="icon"
                        src="/facebook.png"
                        alt="facebook"
                      />
                    </a>
                    <a onClick={() => signIn("google")} href="#!">
                      <img className="icon" src="/google.png" alt="google" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-footer text-center py-3">
                <div className="small">
                  <a href="register.html">Need an account? Sign up!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
};

export default login;

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions)


  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}