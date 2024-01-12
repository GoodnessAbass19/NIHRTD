import Image from "next/image";

const page = () => {
  return (
    <div className="max-w-full mx-auto py-10">
      <div className="space-y-10">
        <h3 className="text-3xl md:text-5xl text-[#2F6790] font-bold uppercase mx-auto max-w-screen-md text-center">
          NIGERIA INSTITUTE OF HUMAN RESOURCES AND TECHNICAL DEVELOPMENT
        </h3>
        <div className="h-[60vh] max-w-7xl mx-auto">
          <Image
            src={"/Rectangle 14.png"}
            alt="about"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-5 grid md:grid-cols-2 gap-10 py-20 items-center">
        <div>
          <Image
            src={"/Rectangle 8.png"}
            alt="img"
            width={500}
            height={500}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
        <div className="space-y-10">
          <p className="text-xl font-medium">
            NIHRTD is an institute that guides and provides a medium of exposure
            as regards the acquisition of technical skills through a structured
            learning and working system that will expose graduates to
            opportunities for hands-on experience with organizations where the
            technical skills learnt will be put to work. It also provides
            advocacy for best practices in organisations.
          </p>
          <p className="text-xl font-medium">
            The programmes are practical, participants will just have to
            complete a series of syllabuses and exchange programmes as required.
            It is a confirmation of KSA (Knowledge, Skill and Ability), and fit
            for deployment. This will be iniline their registered course and
            skillset as identified in their specialized industry, and afterwards
            are expected to go through an assessment programme to evaluate
            comprehension and ability of the concept before receiving a
            certificate of attendance and/or taking international certification
            examinations.v
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
