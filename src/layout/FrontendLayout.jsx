import { NavLink, Outlet } from "react-router"
function FrontendLayout() {
  return (
    <>
      <header>
        <ul className="nav bg-warning-subtle justify-content-center py-3 fs-5">
          <li className="nav-item">
            <NavLink className={({isActive}) => { return isActive ? "nav-link text-primary fw-bold" : "nav-link text-success fw-bold"}} to="/">首頁</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => { return isActive ? "nav-link text-primary fw-bold" : "nav-link text-success fw-bold"}} to="/product">商品列表</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => { return isActive ? "nav-link text-primary fw-bold" : "nav-link text-success fw-bold"}} to="/cart">購物車</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="text-center bg-warning-subtle py-3">© 2026 六角學院. All rights reserved.</footer>
    </>
  )
}
export default FrontendLayout