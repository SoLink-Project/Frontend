import Logo from "../assets/Logo.svg";

function Footer() {
    return (
        <div className="bg-[#111228] mt-12 sm:mt-8">
            <footer className="mx-auto p-8 max-w-[85rem]">
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
                    <div>

                    </div>
                    <div className="items-center justify-center text-center">
                        <img className="mx-auto" src={Logo} alt="" />
                        <p className="text-white my-2 text-center"><a href="/policy">Privacy Policy</a> / <a href="/terms">Terms of Service</a></p>
                        <p className="text-center my-2"><a className="mx-auto text-white" href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg></a></p>
                        <div className="text-slate-400 text-center text-sm">
                        <p>Solink | {new Date().getFullYear()} © All rights reserved</p>
                        <p>Created by <a href="https://github.com/SaboIch">Sabolch</a></p>
                        </div>
                    </div>
                    <div className="">

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;