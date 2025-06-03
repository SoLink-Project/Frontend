import Navbar from "./components/Navbar"

function Policy() {
    return (
        <>
            <Navbar></Navbar>
            <div className="max-w-[85em] mx-auto p-5">
                <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
                    <div className="container mx-auto px-4 py-8">
                        <header className="text-center mb-8">
                            <h1 className="text-3xl font-bold">Privacy Policy</h1>
                            <p className="text-gray-600">Effective Date: 2025.06.01</p>
                        </header>

                        <main className="space-y-6">
                            <section>
                                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                                <p className="text-gray-700">
                                    Welcome to <a href="https://frontend-38ms.onrender.com" className="text-blue-500 underline">Solink</a> (hereinafter referred to as the "Website"). This Privacy Policy explains how we handle your data when you use our link shortening service. We are committed to protecting your privacy and ensuring that your experience with our Website is secure.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">2. Data Collection and Use</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">2.1. Personal Data</h3>
                                        <p className="text-gray-700">
                                            The Website does not collect personal data directly from users. You do not need to log in or provide any personal information to use our link shortening service. Users simply input a long URL and receive a shortened URL in return.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">2.2. Non-Personal Data</h3>
                                        <p className="text-gray-700">
                                            While using the Website, we collect certain non-personal data to improve our service. This includes:
                                        </p>
                                        <ul className="list-disc pl-5 text-gray-700">
                                            <li><strong>Link Usage Data:</strong> We track the number of times a shortened link is used and the time of the last use. This data helps us understand how our service is used and identify any potential issues.</li>
                                            <li><strong>Technical Data:</strong> Our server may automatically log basic technical data such as IP addresses for operational and security purposes. This data is not used to identify individual users.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">3. Cookies and Similar Technologies</h2>
                                <p className="text-gray-700">
                                    The Website does not use cookies or similar technologies. Cookies are not necessary to maintain the functionality of the site.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
                                <p className="text-gray-700">
                                    Since we do not collect personal data, we do not share any personal data with third parties. We may share non-personal data with third-party service providers to assist with the operation and maintenance of our Website, but this data will not identify individuals.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">5.1. Security Measures</h3>
                                        <p className="text-gray-700">
                                            We use general security measures to protect our Website and the data we collect. This includes safeguarding against unauthorized access, alterations, or deletions.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">5.2. Data Breaches</h3>
                                        <p className="text-gray-700">
                                            In the unlikely event of a data breach, we will take appropriate measures to address the situation. Since we do not handle personal data, there are no specific notification requirements for data breaches.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">6. User Rights</h2>
                                <p className="text-gray-700">
                                    As we do not collect personal data, users do not have specific rights related to personal data under data protection laws. However, you can always contact us if you have questions or concerns about our data practices.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
                                <p className="text-gray-700">
                                    We retain non-personal data, such as link usage statistics and IP addresses, for as long as necessary to provide and improve our service. We may delete this data periodically as part of our routine maintenance.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
                                <p className="text-gray-700">
                                    We reserve the right to update this Privacy Policy at any time. Changes will be posted on the Website and will become effective immediately upon posting. We encourage you to review this policy periodically.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
                                <p className="text-gray-700">
                                    If you have any questions or concerns about this Privacy Policy, please contact us at: <a href="mailto:sabolch.dev@gmail.com" className="text-blue-500 underline">sabolch.dev@gmail.com</a>.
                                </p>
                            </section>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Policy