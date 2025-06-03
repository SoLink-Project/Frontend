import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import Footer from "./components/Footer";
import Logo from "./assets/Logo.svg";

function Banner() {
    const { dynamicLink } = useParams();
    const [link, setLink] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [countdown, setCountdown] = useState(5);


    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_DOMAIN}/data`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    link: dynamicLink,
                })
            })
            const data = await response.json();
            if (data != "") {
               window.location.href = link;
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        const checkLink = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_DOMAIN}/api/${dynamicLink}`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({})
                });
                if (!response.ok) {
                    window.location.href = `${import.meta.env.VITE_DOMAIN_SELF}/`;
                }
                const data = await response.json();
                setLink(data.goLink);
            } catch (error) {
                console.error('Error fetching link:', error);
            }
        };

        if (dynamicLink) {
            checkLink();
        }

        timer = setInterval(() => {
            setCountdown(prevCountdown => {
                if (prevCountdown > 1) {
                    return prevCountdown - 1;
                } else {
                    clearInterval(timer);
                    setIsButtonDisabled(false);
                    return 0;
                }
            });
        }, 1000);
        
        return () => {
            clearInterval(timer);
        };
    }, [dynamicLink]);


    return (
        <div>
            <div className="relative">
                <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-2">
                    <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
                        <div className="flex">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="flex justify-center py-4">
                            <button type="button" onClick={handleSubmit} disabled={isButtonDisabled} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#B50A4E] text-white hover:bg-[#a1184f] focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none">
                                {isButtonDisabled ? `Please wait... (${countdown})` : 'Navigate to link'}
                            </button>
                        </div>
                    </nav>
                </header>
            </div>
            <div className="bg-white h-[800px]">

            </div>
            <Footer></Footer>
        </div>
    );
}

export default Banner;