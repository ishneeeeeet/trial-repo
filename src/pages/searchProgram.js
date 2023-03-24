import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
function SearchProgram() {
    const [experience, setexperience] = useState([])
    const [search, setSearch] = useState('')
    const history = useNavigate()
    async function get() {
        try {
            if(search) {
                const response = await fetch('https://saitspace-service.onrender.com/get?program=' + search, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const res = await response.json()
                console.log("respone", res)
                setexperience(res.result)
                history('/latestexperience', {
                         state: { detail: res.result }
                })
            }
        } catch (e) {
            console.log(e, "eee")
        }
    }

    useEffect(() => {
    }, [])

    const columns = React.useMemo(
        () => [
            {
                Header: "Name",
                accessor: "name",
            },
            {
                Header: "Profile",
                accessor: "profile",
            },
            {
                Header: "Company",
                accessor: "company",
            },
            {
                Header: "Salary",
                accessor: "salary",
            },
            {
                Header: "Hiring Experience",
                accessor: "programExperience",
            },
        ],
        []
    );

    const data = React.useMemo(() => experience, []);

    return (
        <div className="mt-5 lg:m-20 items-center align-middle">
            <div className="justify-between items-center grid  grid-cols-1">
                <div className="px-4 py-5 lg:mb-4 lg:mr-0 mr-4">
                    <h3 className="text-lg text-center text-gray-800">
					SAIT recent graduate or a final year student? Have
					skills but no job? Want to build connections within the
					industry? "Say it no more!" With the help of our search
					algorithm, which will gather information from the
					results of a certain program's Linkedln search, our
					web application will assist you in connecting with
					individuals who were hired following their program.
					The student's name, the company they were placed
					with, their annual salary, and the year they were hired
					will all be included in the search results on our
					website. Through their Linkedln profile links, students
					can connect with one another. This application's major
					goal is to connect current students and recent
					graduates while showcasing the best salaries offered	
					to graduates upon completion of the program.
					</h3>
                </div>
                <div className="px-4 py-5 lg:ml-0 ml-4 flex justify-center">
                    <div className="max-w-fit  py-10 px-5 border shadow-md rounded-md bg-white ">
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-xl mb-4 text-gray-800">Search your program</h3>
                            <div className="mb-3 xl:w-96">
                                <div className="input-group relative flex items-stretch w-full mb-4">
                                <select
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      onSelect={(e) => setSearch(e.target.value)}
                      id="program"
                      name="program"
                      autoComplete="program-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-red-800 focus:outline-none focus:ring-red-700 sm:text-sm"
                    >
                      <option value="">Select Program</option>
                      <option value="Software Development">Software Development</option>
                      <option value="Business Management">Business Management</option>
                    </select>
                                    {/* <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" onChange={(e) => setSearch(e.target.value)} /> */}
                                    <button className="btn inline-block px-6 py-2.5 bg-red-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2" disabled={search === ""} onClick={() => get()}>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchProgram