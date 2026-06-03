import React from 'react'

const SSR = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const result = await data.json()
    console.log(result, "result")
    return (
        <>
            <div>users</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {result.map((data) => (
                    <div
                        key={data.id}
                        className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {data.name}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    @{data.username}
                                </p>
                            </div>

                            <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full">
                                #{data.id}
                            </span>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <p className="text-xs font-medium text-gray-400 uppercase">
                                    Email
                                </p>
                                <p className="text-sm text-gray-700">
                                    {data.email}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-medium text-gray-400 uppercase">
                                    Phone
                                </p>
                                <p className="text-sm text-gray-700">
                                    {data.phone}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-medium text-gray-400 uppercase">
                                    Website
                                </p>
                                <a
                                    href={`https://${data.website}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm text-purple-600 hover:underline"
                                >
                                    {data.website}
                                </a>
                            </div>

                            <div>
                                <p className="text-xs font-medium text-gray-400 uppercase">
                                    Company
                                </p>
                                <p className="text-sm font-medium text-gray-900">
                                    {data.company.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {data.company.catchPhrase}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-medium text-gray-400 uppercase">
                                    Address
                                </p>
                                <p className="text-sm text-gray-700">
                                    {data.address.street}, {data.address.suite}
                                </p>
                                <p className="text-sm text-gray-700">
                                    {data.address.city}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {data.address.zipcode}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SSR
