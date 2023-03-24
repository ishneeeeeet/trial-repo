import { Alert, Textarea } from "@material-tailwind/react";
import { useState } from "react";

function ShareExperience() {
  const [name, setName] = useState("");
  const [program, setprogram] = useState("Software Development");
  const [year, setyear] = useState("");
  const [company, setcompany] = useState("");
  const [position, setposition] = useState("");
  const [salary, setsalary] = useState("");
  const [image, setImage] = useState("");
  const [profile, setprofile] = useState("");
  const [experience, setexperience] = useState("");
  const [interview, setinterview] = useState("");
  const [file, setFile] = useState("");

  async function submit() {
    console.log(
      name,
      profile,
      program,
      company,
      position,
      salary,
      experience,
      interview
    );
    let data = {
      name,
      profile,
      program,
      company,
      position,
      salary,
      programExperience: experience,
      interviewExperience: interview,
      vote: 0,
      image: file,
    };
    const response = await fetch(
      "https://saitspace-service.onrender.com/create",
      {
        method: "POST",
        body: JSON.stringify(data), // string or object
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await response.JSON();
    console.log(res);
    Alert("Your experience submitted successfully");
  }

  const onFileChange = async (e) => {
    var files = e.target.files;
    console.log(files);
    var filesArr = Array.prototype.slice.call(files);
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
      const res = await uploadFile(e.target.files[0]);
      console.log(res, "res");
      setFile(res.fileName);
    }
  };

  const uploadFile = (formdata) => {
    return new Promise(async (resolve, reject) => {
      try {
        const url = `https://saitspace-service.onrender.com/upload`;
        const formData = new FormData();
        formData.append("file", formdata, formdata.name);
        const response = await fetch(url, {
          method: "POST",
          body: formData,
        });
        const img = await response.json();
        resolve(img);
      } catch (e) {
        reject(e);
      }
    });
  };

  return (
    <div className="my-10 m-10 mt-2">
      <p className="text-lg mb-2 font-semibold text-gray-800">
        Your hiring experience
      </p>
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6  gap-2">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your name
                    </label>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring-red-700 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="program"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Program you graduated in
                    </label>
                    <select
                      value={program}
                      onSelect={(e) => setprogram(e.target.value)}
                      onChange={(e) => setprogram(e.target.value)}
                      id="program"
                      name="program"
                      autoComplete="program-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-red-800 focus:outline-none focus:ring-red-700 sm:text-sm"
                    >
                      <option value="Software Development">
                        Software Development
                      </option>
                      <option value="Business Management">
                        Business Management
                      </option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="year"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Graduation year
                    </label>
                    <input
                      required
                      value={year}
                      onChange={(e) => setyear(e.target.value)}
                      type="text"
                      name="year"
                      id="year"
                      autoComplete="family-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring-red-700 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company placed in
                    </label>
                    <input
                      required
                      value={company}
                      onChange={(e) => setcompany(e.target.value)}
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="company"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring-red-700 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="position"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Position
                    </label>
                    <input
                      required
                      value={position}
                      onChange={(e) => setposition(e.target.value)}
                      type="text"
                      name="position"
                      id="position"
                      autoComplete="position"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring-red-700 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="salary"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Salary
                    </label>
                    <input
                      required
                      value={salary}
                      onChange={(e) => setsalary(e.target.value)}
                      type="text"
                      name="salary"
                      id="salary"
                      autoComplete="salary"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring-red-700 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <input
                      value={image}
                      onChange={(e) => onFileChange(e)}
                      type="file"
                      name="image"
                      id="image"
                      accept=".png, .jpg, .jpeg"
                      autoComplete="image"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring-red-700 sm:text-sm"
                    />
                    {/* <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <button type="button" className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">upload</button>
                    </div> */}
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="profile"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Linkedin profile
                    </label>
                    <input
                      required
                      value={profile}
                      onChange={(e) => setprofile(e.target.value)}
                      type="text"
                      name="profile"
                      id="profile"
                      autoComplete="profile"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring-red-700 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="experience"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Program Experience
                    </label>
                    <Textarea
                      value={experience}
                      onChange={(e) => setexperience(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring-red-700 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6">
                    <p className="text-sm font-medium text-gray-700">
                      Hiring Experience
                    </p>
                    <p className="text-xs font-medium text-gray-700">
                      How did you get an interview?
                    </p>
                    <p className="text-xs font-medium text-gray-700">
                      How did you apply?
                    </p>
                    <label
                      htmlFor="interview"
                      className="block text-xs font-medium text-gray-700"
                    >
                      How was the interview experience?
                    </label>
                    <Textarea
                      value={interview}
                      onChange={(e) => setinterview(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring-red-700 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  onClick={() => submit()}
                  className="inline-flex justify-center rounded-md border border-transparent bg-red-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-900 focus:outline-none focus:ring-2 focus:bg-red-700 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ShareExperience;
