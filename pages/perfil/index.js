
import Index from "pages";
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { unstable_getServerSession } from "next-auth/next"

const index = () => {
 
  return (
    <Index >
      <main>
        <div className="container-fluid px-4">
          <h1 className="py-3">Perfil</h1>
          <br />
          <form className="px-4 d-grid gap-3">
            <div className="row">
              <div className="form-group col-md-4">
                <label>Nombres</label>
                <input
        
                  type="email"
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-4">
                <label>Apellidos</label>
                <input
                  type="text"
                  className="form-control"
                  id="apellidos"
                  placeholder="Apellidos"
                />
              </div>
              <div className="form-group col-md-4">
                <label>Celular</label>
                <input
                  type="number"
                  className="form-control"
                  id="celular"
                  placeholder="Celular"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label>Email</label>
                <input

                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group col-md-6">
                <label>Estado</label>
                <input
                  type="text"
                  className="form-control"
                  id="auth"
                  placeholder="Autentificado"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Direccion 2</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Barrio, carrera, numero"
              />
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label>Ciudad</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="Ciudad"
                />
              </div>
              <div className="form-group col-md-4">
                <label>Departamento</label>

              </div>
              <div className="form-group col-md-2">
                <label>Codigo postal</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
            </div>
            <br />
            <div className="d-grid gap-2 d-md-flex ">
              <button type="submit" className="btn btn-primary ">
                Update
              </button>
            </div>
          </form>
        </div>
      </main>
    </Index>
  );
};

export default index;

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions)


  if (!session) {
    return {
      redirect: {
        destination: '/login',
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
