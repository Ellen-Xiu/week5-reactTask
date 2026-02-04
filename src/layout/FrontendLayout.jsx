import { Link, Outlet } from "react-router"
function FrontendLayout() {
  return (
    <>
      <header>
        <ul className="nav bg-warning-subtle justify-content-center fw-bold py-3 fs-5">
          <li className="nav-item">
            <Link className="nav-link text-success" to="/">首頁</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-success" to="/product">商品列表</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-success" to="/cart">購物車</Link>
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