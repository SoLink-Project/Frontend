import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Counter from "./components/Counter"
import Footer from "./components/Footer"

import { HSStaticMethods } from "preline";

function Index() {
  HSStaticMethods.autoInit();

  const observer = new MutationObserver((mutationsList) => {
    for (const _ of mutationsList) {
      HSStaticMethods.autoInit();
    }
  });

  observer.observe(document.body, {
    attributes: true,
    subtree: true,
    childList: true,
    characterData: true,
  });

  return (
    <>
      <div className="relative bg-[#111228]">
        <div id="ab-full-width-with-dismiss-button-on-blue-bg" className="hs-removing:-translate-y-full bg-[#16183a] backdrop-blur-3xl">
          <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
            <div className="flex">
              <p className="text-white">
                The site is currently in beta version. You can <button type="button" className="decoration-2 underline font-medium hover:text-white/80 focus:outline-none focus:text-white/80" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-scale-animation-modal" data-hs-overlay="#hs-scale-animation-modal">read more</button> here!
              </p>

              <div className="ps-3 ms-auto">
                <button type="button" className="inline-flex rounded-lg p-1.5 text-white/80 hover:bg-white/10 focus:outline-none focus:bg-white/10" data-hs-remove-element="#ab-full-width-with-dismiss-button-on-blue-bg">
                  <span className="sr-only">Dismiss</span>
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="hs-scale-animation-modal" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabIndex={-1} aria-labelledby="hs-scale-animation-modal-label">
          <div className="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
            <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
              <div className="flex justify-between items-center py-3 px-4 border-b">
                <h3 id="hs-scale-animation-modal-label" className="font-bold text-gray-800">
                  Beta version
                </h3>
                <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none" aria-label="Close" data-hs-overlay="#hs-scale-animation-modal">
                  <span className="sr-only">Close</span>
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="p-4 overflow-y-auto">
                <p className="mt-1 text-gray-800">
                Thank you for being an early adopter of our application. We are excited to have you on board during this beta phase of our development. Please note that as we are in the beta stage, the application is still under active development and may undergo significant changes.
                </p>
                <p className="mt-1 text-gray-800">
                During this period, some features and functionalities may not perform as expected or may be subject to modifications. Specifically:
                </p>
                  <ul className="mt-1 text-gray-800">
                    <li>
                    <strong>Link Functionality</strong>: Links created while the application is in beta may experience issues over time. Due to ongoing updates and changes, some links may become inactive or broken. We are working diligently to minimize these issues, but your patience is appreciated as we refine the system.
                    </li>
                    <li>
                    <strong>Feature Changes</strong>: Certain features that are currently available at no cost may be transitioned to a paid model in the future. This transition will be communicated well in advance, and we will strive to provide value and improvements to justify any future costs.
                    </li>
                  </ul>
                <p className="mt-1 text-gray-800">
                We value your feedback and encourage you to share your experiences with us. Your input is crucial in helping us enhance the application and ensure it meets your needs. Please reach out with any suggestions, issues, or concerns you may have.
                </p>
                <p className="mt-1 text-gray-800">
                Thank you for your understanding and continued support as we work towards delivering a robust and fully-featured application.
                </p>
              </div>
              <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-scale-animation-modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <Navbar />
        <Hero />
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500 opacity-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500 opacity-50 rounded-full blur-3xl"></div>
      </div>
      <Counter />
      <Footer />
    </>
  )
}

export default Index