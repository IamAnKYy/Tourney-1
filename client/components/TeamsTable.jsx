import React from 'react'
const TeamsTable = ({ teams }) => {
    return (
        <>
        <div className="text-2xl font-bold text-gray-100">Teams</div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Name</th>
                                        <th scope="col" className="px-6 py-4">Member</th>
                              
                                    </tr>
                                </thead>
                                <tbody>
                                    {teams?.map((el,i) => {
                                        return (
                                            <tr key={i} className="border-b dark:border-neutral-500 bg-white/25">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">{el.name}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{el.team.length}/10</td>
                                                
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div classNameName="text-1xl text-white font-bold ">Teams</div>
        <table className="table-fixed">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Leader</th>
                    <th>Members</th>
                </tr>
            </thead>
            <tbody>
                {teams?.map(el => {
                    return(
                    <tr classNameName='w-full'>
                    <td>{el.name}</td>
                    <td>{el.team.length}</td>
                    <td>{el.team.length}</td>
                </tr> )
                })}
              
            </tbody>
        </table> */}
        </>
    )
}

export default TeamsTable