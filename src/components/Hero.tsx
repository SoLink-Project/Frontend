import React, { useState } from "react";

function Hero() {
    const [longLink, setLongLink] = useState('');
    const [customLink, setCustomLink] = useState('');
    const [upDown, setUpDown] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [backLink, setBackLink] = useState('');
    const [buttonShow, setButtonShow] = useState(false);

    const activate = () => {
        setUpDown(prev => !prev);
    }

    const regex = /^[A-Za-z0-9_-]*$/;

    function copyToClipboard(text: string) {
        const textArea = document.createElement('textarea');
        textArea.value = text; 
        document.body.appendChild(textArea); 
    
        textArea.select();
        textArea.setSelectionRange(0, 99999); 
    
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    
        document.body.removeChild(textArea);
    }

    const getLink = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        copyToClipboard(`${import.meta.env.VITE_DOMAIN_SELF}/${backLink}`);
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const valid = regex.test(customLink);
        
        if (longLink.trim() === '') {
            setErrorMessage("Oops! It seems you left the input field empty. Please enter the required information and try again.");
            setShowInfo(true);
            return;
        }

        if (!valid) {
            setErrorMessage("We encountered an issue while generating your custom link. Please ensure that your text does not contain spaces, uppercase letters, characters from other languages, or any special characters other than '_' or '-'.");
            setShowInfo(true);
            return;
        }
        e.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_DOMAIN}/api/genlink`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    longLink: longLink,
                    customLink: customLink
                })
            })
            const data = await response.json();
            if (data != "") {
                setShowInfo(true);
                setErrorMessage(data.error);
                setBackLink(data.link);
                if (data.exists) setButtonShow(true);
                else setButtonShow(false);
                copyToClipboard(`${import.meta.env.VITE_DOMAIN_SELF}/${data.link}`);
            }
        } catch (error) {
            setErrorMessage("Database error detected! Please contact the administrator at support@s0l1nk.xyz using the provided link.");
            console.error(error)
            setShowInfo(true);
            setButtonShow(false);
        }
    }

    return (
        <>
            {showInfo ? <div className="fixed bottom-0 end-0 z-[60] sm:max-w-xl w-full mx-auto p-6">
                <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-y-3 sm:gap-y-0 sm:gap-x-5">
                        <div className="grow">
                            <h2 className="text-gray-500 dark:text-neutral-500">
                                <span className="font-black text-red-900">!</span> {errorMessage}
                            </h2>
                        </div>
                        <div className="inline-flex gap-x-2">
                            {buttonShow ? (
                                <div>
                                    <button
                                        type="button"
                                        onClick={getLink}
                                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                    >
                                        Copy
                                    </button>
                                </div>
                            ) : null}
                            <div>
                                <button type="button" onClick={() => setShowInfo(false)} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : null}
            <div className="relative overflow-hidden">
                <div className="max-w-[60rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-6xl font-bold text-gray-100">
                            Simplify Your Links, Amplify Your Reach
                        </h1>

                        <p className="mt-3 text-gray-600">
                            Easily shorten and customize your URLs while gaining valuable
                            insights through detailed analytics, perfect for optimizing your
                            online campaigns and tracking user engagement.
                        </p>

                        <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
                            <div className="relative z-10 flex gap-x-3 p-3 bg-[#87878756] rounded-lg shadow-lg">
                                <div className="w-full">
                                    <label htmlFor="hs-search-article-1" className="block text-sm text-gray-700 font-medium"><span className="sr-only"></span></label>
                                    <input type="text" name="hs-search-article-1" id="hs-search-article-1" className="py-2.5 px-4 block text-gray-400 w-full bg-transparent border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 outline-none" placeholder="Paste your long link" value={longLink} onChange={(e) => setLongLink(e.target.value)} />
                                </div>
                                {upDown ? null : <div>
                                    <button className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#B50A4E] text-white hover:bg-[#a1184f] focus:outline-none disabled:opacity-50 disabled:pointer-events-none " onClick={handleSubmit}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                        </svg>
                                    </button>
                                </div>}
                                <div>
                                    <button onClick={activate} className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#B50A4E] text-white hover:bg-[#a1184f] focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                                        {upDown ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                        </svg>
                                            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>}

                                    </button>

                                </div>
                            </div>
                            {upDown ?
                                <div className="mt-2 sm:mt-4 mx-auto max-w-xl relative">
                                    <div>
                                        <div className="relative z-10 flex gap-x-3 p-3 bg-[#87878756] rounded-lg shadow-lg">
                                            <input value={customLink} maxLength={16} onChange={(e) => setCustomLink(e.target.value)} type="text" id="hs-inline-add-on" name="hs-inline-add-on" className="py-3 bg-transparent px-5 ps-[190px] block w-full focus:z-10 text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 rounded-lg disabled:pointer-events-none outline-none" placeholder="Type your unique name" />
                                            <div className="absolute inset-y-0 start-3 flex items-center pointer-events-none z-20 ps-4">
                                                <span className=" text-gray-400">{import.meta.env.VITE_DOMAIN_SELF}/</span>
                                            </div>
                                            {upDown ? <div>
                                                <button className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#B50A4E] text-white hover:bg-[#a1184f] focus:outline-none disabled:opacity-50 disabled:pointer-events-none " onClick={handleSubmit}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                    </svg>
                                                </button>
                                            </div> : null}
                                        </div>
                                    </div>
                                </div> : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;