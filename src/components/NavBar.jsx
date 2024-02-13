import{ Link, Outlet } from "react-router-dom";

function NavBar() {
    return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        <main>
            <Outlet />
        </main>            
    </div>  
    );
};
export default NavBar;