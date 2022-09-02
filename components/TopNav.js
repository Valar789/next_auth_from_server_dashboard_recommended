import { getSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const TopNav = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const session = await getSession();
      session && setUser(session.user);
    })();
  }, []);

  const menuToogle = () => {
    const sidebarToggle = document.body.querySelector("#sidebarToggle");
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
    });
  };

  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <Link href="/general">
        <a className="navbar-brand ps-3">Dashboard</a>
      </Link>

      <button
        onClick={menuToogle}
        className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
        href="#!"
      >
        <img src="/whitemenu.png" alt="" />
      </button>

      <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Search for..."
            aria-label="Search for..."
            aria-describedby="btnNavbarSearch"
          />
          <button
            className="btn btn-primary"
            id="btnNavbarSearch"
            type="button"
          >
            <img src="/lupa.png" alt="buscar" />
          </button>
        </div>
      </form>
      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item dropdown">
          <Link href="/perfil">
            <a>
              <img
                className="imagePerfil"
                src={user !== null ? user.image : ""}
                alt=""
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="#!">
            <a className="nav-link" onClick={() => signOut()}>
              Salir
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
