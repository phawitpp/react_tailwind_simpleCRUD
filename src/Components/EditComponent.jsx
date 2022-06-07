import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const EditComponent = () => {
  let { id } = useParams();
  const [data, setData] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    avatar: "",
  });
  useEffect(() => {
    axios
      .get("https://www.mecallapi.com/api/users/" + id)
      .then((res) => {
        console.log(res.data.user);
        setData(res.data.user);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let updateData = data;
    axios
      .put("https://www.mecallapi.com/api/users/update", updateData)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        if (res.data.status === "ok") {
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      {data != null && (
        <div className="container mx-auto my-10 py-32">
          <div className="flex flex-col justify-center align-middle items-center">
            <div className="flex flex-row gap-3">
              <span className=" font-sans text-center text-4xl font-bold text-gray-700 mb-6">
                Edit User
              </span>
            </div>

            <form
              className="flex flex-col gap-4 w-1/2"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 row-auto gap-4">
                <fieldset className="border border-solid border-gray-300 p-3">
                  <legend className="block text-slate-700" htmlFor="email1">
                    Firstname *
                  </legend>
                  <input
                    className="border-transparent focus:border-transparent focus:ring-0"
                    id="email1"
                    type="text"
                    placeholder="Your firstname"
                    required={true}
                    name="fname"
                    value={data.fname}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </fieldset>
                <fieldset className="border border-solid border-gray-300 p-3">
                  <legend className="block text-slate-700" htmlFor="email1">
                    Lastname *
                  </legend>
                  <input
                    className="border-transparent focus:border-transparent focus:ring-0"
                    id="email1"
                    type="text"
                    placeholder="Your Lastname"
                    required={true}
                    name="lname"
                    value={data.lname}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </fieldset>
              </div>
              <div className="grid grid-cols-1 row-auto gap-4">
                <fieldset className="border border-solid border-gray-300 p-3">
                  <legend className="block text-slate-700" htmlFor="email1">
                    Username *
                  </legend>
                  <input
                    className="border-transparent focus:border-transparent focus:ring-0 w-full"
                    id="email1"
                    type="text"
                    placeholder="username"
                    required={true}
                    name="username"
                    value={data.username}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </fieldset>
                <fieldset className="border border-solid border-gray-300 p-3 ">
                  <legend className="block text-slate-700" htmlFor="email1">
                    Email *
                  </legend>
                  <input
                    className="border-transparent focus:border-transparent focus:ring-0 w-full"
                    id="email1"
                    type="email"
                    placeholder="example@mail.com"
                    required={true}
                    name="email"
                    value={data.email}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </fieldset>
                <fieldset className="border border-solid border-gray-300 p-3">
                  <legend className="block text-slate-700" htmlFor="email1">
                    Avatar *
                  </legend>
                  <input
                    className="border-transparent focus:border-transparent focus:ring-0 w-full"
                    id="email1"
                    type="text"
                    placeholder="Your avatar"
                    required={true}
                    name="avatar"
                    value={data.avatar}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </fieldset>
              </div>
              <div className="w-full text-center justify-center items-center align-middle">
                <button className="btn-submit w-full">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default EditComponent;
