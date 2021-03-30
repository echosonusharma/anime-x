import Navbar from "./navbar"

const Layout = ({ children }) => {

    return (
        <div className="font-poppins">
            <main>
                <Navbar />
                {children}
            </main>
        </div>
    )
};

export default Layout;