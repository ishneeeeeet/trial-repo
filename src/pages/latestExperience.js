import { Alert, Textarea } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Table from "./Table";
import React from "react";

function LatestExperience(props) {
  const [experience, setexperience] = useState(null);
  const { state } = useLocation();

  async function get() {
    try {
      const response = await fetch(
        "https://saitspace-service.onrender.com/get",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = await response.json();
      console.log("respone", res);
      if (state && state.detail) {
        setexperience(state.detail);
      } else setexperience(res.result);
    } catch (e) {
      console.log(e, "eee");
    }
  }

  useEffect(() => {
    get();
  }, []);

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
      {
        Header: "Vote",
        accessor: "vote",
      },
    ],
    []
  );

  const data = React.useMemo(() => experience, []);

  console.log(experience);
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">Hiring Experiences</h1>
        </div>
        {experience ? (
          experience.length <= 0 ? (
            <p>Not Found </p>
          ) : (
            <div className="mt-4">
              <Table columns={columns} data={experience} />
            </div>
          )
        ) : (
          <p>Loading... </p>
        )}
      </main>
    </div>
  );
}

export default LatestExperience;
