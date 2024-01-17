import React from "react";

const page = () => {
  return (
    <div className="py-10 max-w-3xl mx-auto p-5">
      <h3 className="uppercase text-xl font-bold md:text-2xl">biodata</h3>

      <div className="py-5">
        <span className="text-black font-normal md:text-lg">
          Fill in your details correctly
        </span>

        <form action="post" className="py-7 grid gap-y-10">
          <div className="shadow-md shadow-gray-300 rounded-lg p-5">
            <label className=" md:text-lg font-normal">Name</label>
            <div className=" flex flex-row items-center gap-y-3 border-b-2 border-gray-300 py-2 w-full">
              <input
                type="text"
                className=" bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0"
                name="name"
              />
            </div>
          </div>
          <div className="shadow-md shadow-gray-300 rounded-lg p-5">
            <label className="md:text-lg font-normal">Email</label>
            <div className=" flex flex-row items-center gap-y-3 border-b-2 border-gray-300 py-2 w-full">
              <input
                type="email"
                className=" bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0"
                name="email"
              />
            </div>
          </div>
          <div className="shadow-md shadow-gray-300 rounded-lg p-5">
            <label className="md:text-lg font-normal">Phone</label>
            <div className=" flex flex-row items-center gap-y-3 border-b-2 border-gray-300 py-2 w-full">
              <input
                type="number"
                className=" bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0"
                name="phone"
              />
            </div>
          </div>
          <div className="shadow-md shadow-gray-300 rounded-lg p-5">
            <label className="md:text-lg font-normal">
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
            <label className="md:text-lg font-normal">Office Address</label>
            <div className=" flex flex-row items-center gap-y-3 border-b-2 border-gray-300 py-2 w-full">
              <input
                type="text"
                className=" bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0"
                name="office"
              />
            </div>
          </div>

          <div className="shadow-md shadow-gray-300 rounded-lg p-5">
            <label className="md:text-lg font-normal">Home Address</label>
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
              <label className="md:text-lg font-normal">
                Upload Your Highest Qualification Certificate
              </label>
              <div className=" flex flex-row items-center gap-y-3 border-b-2 border-gray-300 py-2 w-full">
                <input
                  type="file"
                  className=" bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0"
                  name="certificate"
                  id="certificate"
                  accept=".pdf, .doc, .docx"
                />
              </div>
            </div>
            <div className="shadow-md shadow-gray-300 rounded-lg p-5">
              <label className="md:text-lg font-normal">
                Upload Your Passport Photograph
              </label>
              <div className=" flex flex-row items-center gap-y-3 border-b-2 border-gray-300 py-2 w-full">
                <input
                  type="file"
                  className=" bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0"
                  name="photo"
                  id="photo"
                  accept="image/*"
                />
              </div>
            </div>
            <div className="shadow-md shadow-gray-300 rounded-lg p-5">
              <label className="md:text-lg font-normal">Upload your CV</label>
              <div className=" flex flex-row items-center gap-y-3 border-b-2 border-gray-300 py-2 w-full">
                <input
                  type="file"
                  className=" bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0"
                  name="cv"
                  id="cv"
                  accept=".pdf, .doc, .docx"
                />
              </div>
            </div>
          </div>

          <button className="text-sm uppercase tracking-[0.5em] font-bold bg-[#2F6790]/90 py-2 px-5 rounded-md text-white lg:text-base xl:text-lg hover:bg-[#2F6790] hover:shadow-lg">
            Sumbit
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
