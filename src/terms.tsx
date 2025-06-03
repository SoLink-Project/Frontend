import Navbar from "./components/Navbar"

function Terms() {
    return (
        <>
            <Navbar></Navbar>
            <div className="max-w-[85em] mx-auto p-5">
                <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
                    <div className="container mx-auto px-4 py-8">
                        <header className="text-center mb-8">
                            <h1 className="text-3xl font-bold">Terms of Service</h1>
                            <p className="text-gray-600">Effective Date: 2025.06.01</p>
                        </header>

                        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Introduction</h2>
                        <p>Welcome to Solink (the "Website"). By using the Website, you (the "User") agree to the following Terms of Service (the "Terms"). If you do not agree with these Terms, please do not use the Website.</p>

                        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Service Description</h2>
                        <p>The Website provides a service that allows users to shorten long URLs into shorter links. The Service includes Google Browsing Security API and other filtering mechanisms, such as duplicate detection. Users must wait 5 seconds before the link is redirected.</p>

                        <h2 className="text-2xl font-semibold mt-6 mb-2">3. User Obligations</h2>
                        <h3 className="text-xl font-semibold mt-4 mb-2">3.1. General Use</h3>
                        <p>Users agree to use the Website only for lawful and legitimate purposes. It is prohibited to use the Website for any activities that violate the law or infringe on the rights of others.</p>

                        <h3 className="text-xl font-semibold mt-4 mb-2">3.2. Content and Conduct</h3>
                        <p>Users are responsible for any content they create or share on the Website. Posting content that infringes on copyright, or that is obscene, defamatory, or otherwise illegal is prohibited.</p>

                        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
                        <h3 className="text-xl font-semibold mt-4 mb-2">4.1. Ownership</h3>
                        <p>The Website and all of its content, including but not limited to text, graphics, logos, and other materials, are owned by Sabolch and are protected by copyright and intellectual property laws.</p>

                        <h3 className="text-xl font-semibold mt-4 mb-2">4.2. Usage Rights</h3>
                        <p>Users are not permitted to copy, distribute, modify, or reproduce any content from the Website without prior written permission from Sabolch.</p>

                        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Limitation of Liability</h2>
                        <h3 className="text-xl font-semibold mt-4 mb-2">5.1. General Liability</h3>
                        <p>Sabolch shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages arising from the use of the Website, even if Sabolch was advised of the possibility of such damages.</p>

                        <h3 className="text-xl font-semibold mt-4 mb-2">5.2. "As Is" Service</h3>
                        <p>The Service is provided "as is" and Sabolch does not guarantee that it will be uninterrupted, secure, or error-free.</p>

                        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Privacy</h2>
                        <h3 className="text-xl font-semibold mt-4 mb-2">6.1. Data Practices</h3>
                        <p>For information on how we handle user data, please refer to our Privacy Policy available at: <a className="text-sky-700" href="https://frontend-38ms.onrender.com/policy">Privacy Policy Link</a>.</p>

                        <h3 className="text-xl font-semibold mt-4 mb-2">6.2. Data Security</h3>
                        <p>Sabolch uses reasonable technical and organizational measures to protect user data, but cannot guarantee absolute security.</p>

                        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Modifications</h2>
                        <p>Sabolch reserves the right to modify these Terms at any time. Changes will be effective immediately upon posting on the Website. Users are responsible for reviewing the Terms periodically.</p>

                        <h2 className="text-2xl font-semibold mt-6 mb-2">8. Dispute Resolution</h2>
                        <p>Any disputes arising from these Terms shall be governed by the laws of Hungary. Disputes shall be resolved in the competent courts of Hungary.</p>

                        <h2 className="text-2xl font-semibold mt-6 mb-2">9. Contact</h2>
                        <p>If you have any questions about these Terms, please contact us at: <a href="mailto:sabolch.dev@gmail.com" className="text-blue-500 underline">sabolch.dev@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Terms