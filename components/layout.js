import Meta from "./meta";
import Navbar from "./navbar"

const Layout = ({ children }) => {

    return (
        <div className="font-poppins">
            <main>
                <Meta />
                <Navbar />
                {children}
            </main>
        </div>
    )
};

export default Layout;