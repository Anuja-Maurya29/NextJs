import React from 'react'

const page = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-flex items-center rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-700">
                        Customer Engagement Platform
                    </span>

                    <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
                        Turn Visitors Into Qualified Leads
                    </h1>

                    <p className="mt-6 text-lg text-gray-600">
                        Capture, nurture, and convert prospects with powerful marketing
                        automation, AI-driven engagement, and real-time analytics from a
                        single platform.
                    </p>

                    <div className="mt-8 flex items-center justify-center gap-4">
                        <button className="rounded-lg bg-purple-600 px-6 py-3 text-white font-medium hover:bg-purple-700">
                            Start Free Trial
                        </button>

                        <button className="rounded-lg border border-gray-300 px-6 py-3 text-gray-700 font-medium hover:bg-gray-50">
                            Book Demo
                        </button>
                    </div>
                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-3">
                    <div className="rounded-xl border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Lead Management
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Organize contacts, segment audiences, and track every interaction
                            across your customer journey.
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Marketing Automation
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Build automated workflows that nurture leads and increase
                            conversions without manual effort.
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Advanced Analytics
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Measure campaign performance, identify opportunities, and make
                            data-driven decisions.
                        </p>
                    </div>
                </div>

                <div className="mt-20 rounded-2xl bg-gray-50 p-10 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Trusted by Growing Businesses
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Thousands of marketers and sales teams use our platform to streamline
                        customer engagement and accelerate growth.
                    </p>

                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                            <p className="text-3xl font-bold text-purple-600">50K+</p>
                            <p className="text-sm text-gray-500">Leads Managed</p>
                        </div>

                        <div>
                            <p className="text-3xl font-bold text-purple-600">120%</p>
                            <p className="text-sm text-gray-500">Average ROI</p>
                        </div>

                        <div>
                            <p className="text-3xl font-bold text-purple-600">500+</p>
                            <p className="text-sm text-gray-500">Active Companies</p>
                        </div>

                        <div>
                            <p className="text-3xl font-bold text-purple-600">99.9%</p>
                            <p className="text-sm text-gray-500">Platform Uptime</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page