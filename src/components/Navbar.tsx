import Logo from "../assets/Logomain.svg";

function Navbar() {
    return (
        <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-8">
            <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
                <div className="flex mx-auto items-center justify-center">
                    <img src={Logo} alt="" />
                </div>
            </nav>
        </header>
    )
}

export default Navbar;