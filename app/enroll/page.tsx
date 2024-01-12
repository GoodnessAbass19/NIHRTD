import React from "react";

const page = () => {
  return (
    <div className="py-10 max-w-3xl mx-auto p-5">
      <h3 className="uppercase text-4xl font-bold">biodata</h3>

      <div className="py-5">
        <span className="text-black text-xl font-normal">
          Fill in your details correctly
        </span>

        <form action="post" className="py-7 grid gap-y-10">
          <div className="shadow-md shadow-gray-300 rounded-lg p-5">
            <label className="text-xl font-normal">Name</label>
            <div className=" flex flex-row items-center gap-y-3 border-b-2 border-gray-300 py-2 w-full">
              <input
                type="text"
                className=" bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0"
                name="name"
              />
            </div>
          </div>
          <div className="shadow-md shadow-gray-300 rounded-lg p-5">
            <label className="text-xl font-normal">Email</label>
            <div className=" flex flex-row items-center gap-y-3 border-b-2 border-gray-300 py-2 w-full">
              <input
                type="email"
                className=" bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0"
                name="email"
              />
            </div>
          </div>
          <div className="shadow-md shadow-gray-300 rounded-lg p-5">
            <label className="text-xl font-normal">Phone</label>
            <div className=" flex flex-row items-center gap-y-3 border-b-2 border-gray-300 py-2 w-full">
              <input
                type="number"
                className=" bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0"
                name="phone"
              />
            </div>
          </div>
          <div className="shadow-md shadow-gray-300 rounded-lg p-5">
            <label className="text-xl font-normal">
              How did you hear about us
            </label>
            <div className=" flex flex-row items-center gap-y-3 border-b-2 border-gray-300 py-2 w-full">
              <input
                type="text"
                className=" bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0"
                name="about"
              />
            </div>
          </div>
          <div className="shadow-md shadow-gray-300 rounded-lg p-5">
            <label className="text-xl font-normal">Office Address</label>
            <div className=" flex flex-row items-center gap-y-3 border-b-2 border-gray-300 py-2 w-full">
              <input
                type="text"
                className=" bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0"
                name="office"
              />
            </div>
          </div>

          <div className="shadow-md shadow-gray-300 rounded-lg p-5">
            <label className="text-xl font-normal">Home Address</label>
            <div className=" flex flex-row items-center gap-y-3 border-b-2 border-gray-300 py-2 w-full">
              <input
                type="text"
                className=" bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0"
                name="address"
              />
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-2xl font-bold uppercase">
              upload your credentials
            </span>
            <div className="shadow-md shadow-gray-300 rounded-lg p-5">
              <label className="text-xl font-normal">
                Your Highest Credentials
              </label>
              <div className=" flex flex-row items-center gap-y-3 border-b-2 border-gray-300 py-2 w-full">
                <input
                  type="text"
                  className=" bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0"
                  name="address"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
