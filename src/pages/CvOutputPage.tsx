import { useGetCv } from "@/api/cv.apis";
import { useParams } from "react-router-dom";
import { SiHyperskill } from "react-icons/si";
import { FaBriefcase } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { BiSolidBriefcase } from "react-icons/bi";
import { GraduationCap, Mail, MapPinned, Phone} from "lucide-react";
import { MdSchool } from "react-icons/md";
import ShowVerifications from "@/components/ShowVerifications";
import { ShowAnimatedVerifications } from "@/components/ShowAnimatedVerifications";
const CvOutputPage = () => {
  const { id } = useParams();

  if (!id) {
    return;
  }

  const { cvData, isLoading } = useGetCv(id);
  console.log(cvData);
  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (!cvData) {
    return <h1>No cv found</h1>;
  }
  console.log(cvData.experienceVerifications);
  return (
    <div className="px-1 mt-5 md:mt-0 md:px-10 mb-10 overflow-hidden">
      {/* <div className="border flex">
        <div className="mx-auto">
          <HyperText
            text="POWERED BY EDUBUK"
            className="text-xl md:text-4xl self-center  font-semibold text-[#006666]"
          />
        </div>
      </div> */}
      {/* <div className="flex items-center justify-center  px-10 py-2">
        <img
          src="/edubuklogo.png"
          alt="logo"
          className="md:h-16 md:w-16 h-10 w-10 object-cover"
          draggable={false}
        />
        <div className="ml-5">
          <HyperText
            text="POWERED BY EDUBUK"
            className="text-xl md:text-4xl font-semibold text-[#006666]"
          />
        </div>
      </div> */}
       <div className="flex justify-center items-center gap-4">
      <h1 className="text-md md:text-2xl text-center font-semibold text-[#006666]">
        Verified Curriculum Vitae (CV) on the Blockchain
      </h1>
      <a className="border border-gray-500 p-2 rounded-lg hover:text-[#006666]" href={`https://www.edubukcvonchain.com/new-cv/${id}`} target="_blank">View Other Template</a>
      </div>
      <div className="mt-2 max-w-6xl mx-auto w-full border  border-l-0 shadow-lg   rounded-md overflow-x-scroll xl:overflow-x-clip">
        {/* main */}
        <div className="flex gap-3 md:gap-7">
          {/* left sidebar */}
          <div className="w-72  h-auto  bg-[#006666] rounded-ss-2xl px-2 md:px-5 text-white py-2 space-y-20 md:space-y-10">
            {/* image */}
            <div className="mt-5">
              <img
                src={cvData.personalDetails.imageUrl}
                alt="image"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 mx-auto border-[#449298] object-cover"
              />
              <ShowVerifications
                isAttested={
                  cvData.personalDetailsVerification.imageUrl.isSelfAttested
                }
                className="flex justify-center mt-2"
                onlySelfAttest
                textClass="text-white"
                fillCheck
                fillcheckClass="mt-1"
              />
            </div>

            {/* Education */}
            <div >
              <div className="flex items-center gap-3 px-1">
                <div className="h-10 w-10 bg-[#FB980E] rounded-full text-white flex items-center justify-center">
                  <GraduationCap size={20} />
                </div>
                <h1 className="text-black-500 text-sm md:text-xl lg:text-2xl font-semibold tracking-tight uppercase">
                  Education
                </h1>
              </div>

              {/* showcasing education higher to lower*/}
              <div className="flex flex-col gap-10 md:gap-5 mt-3">
                {/* postgraduation */}
                {cvData.education.postGraduateCollege &&
                  cvData.education.postGraduateDegree &&
                  cvData.education.postGraduateGPA && (
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-sm md:text-base">
                        {cvData.education.postGraduateCollege}
                      </h1>
                      <ShowVerifications
                        isAttested={
                          cvData.educationVerifications.postgraduation
                            .isSelfAttested || false
                        }
                        mailStatus={cvData.educationVerifications.postgraduation.mailStatus}
                        hash={cvData.educationVerifications.postgraduation.proof}
                        className="my-2"
                        textClass="text-white"
                        fillCheck
                        fillcheckClass="mt-1"
                        linkClass="text-[#FB980E] font-semibold text-md mt-2"
                      />
                      <div className="flex justify-end text-nowrap">
                        <span className="font-normal text-sm">
                          - Degree ({cvData.education.postGraduateDegree})
                        </span>
                        <span className="font-normal text-sm">
                          , GPA{" "}
                          {JSON.stringify(cvData.education.postGraduateGPA)}
                        </span>
                      </div>
                    </div>
                  )}
                {/* undergraduation */}
                {cvData.education.underGraduateCollege &&
                  cvData.education.underGraduateDegree &&
                  cvData.education.underGraduateGPA && (
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-sm md:text-base">
                        {cvData.education.underGraduateCollege}
                      </h1>
                      <ShowVerifications
                        isAttested={
                          cvData.educationVerifications.undergraduation
                            .isSelfAttested || false
                        }
                        mailStatus={cvData.educationVerifications.undergraduation.mailStatus}
                        hash={cvData.educationVerifications.undergraduation.proof}
                        className="my-2"
                        textClass="text-white"
                        fillCheck
                        fillcheckClass="mt-2"
                        linkClass="text-[#FB980E] font-semibold text-md mt-2"
                      />
                      <div className="flex justify-end text-nowrap">
                        <span className="font-normal text-sm">
                          - Degree ({cvData.education.underGraduateDegree})
                        </span>
                        <span className="font-normal text-sm">
                          , GPA{" "}
                          {JSON.stringify(cvData.education.underGraduateGPA)}
                        </span>
                      </div>
                    </div>
                  )}
                {/* class12 */}
                {cvData.education.class12College &&
                  cvData.education.class12Board &&
                  cvData.education.class12Grade && (
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-sm md:text-base">
                        {cvData.education.class12College}
                      </h1>
                      <ShowVerifications
                        isAttested={
                          cvData.educationVerifications.class12
                            .isSelfAttested || false
                        }
                        mailStatus={cvData.educationVerifications.class12.mailStatus}
                        hash={cvData.educationVerifications.class12.proof}
                        className="my-2"
                        textClass="text-white"
                        fillCheck
                        fillcheckClass="mt-2"
                        linkClass="text-[#FB980E] font-semibold text-md mt-2"
                      />
                      <div className="flex justify-end text-nowrap">
                        <span className="font-normal text-sm">
                          - Board ({cvData.education.class12Board})
                        </span>
                        <span className="font-normal text-sm">
                          , Grade{" "}
                          {JSON.stringify(cvData.education.class12Grade)}
                        </span>
                      </div>
                    </div>
                  )}
                {/* class 10 */}
                {cvData.education.class10School &&
                  cvData.education.class10Board &&
                  cvData.education.class10Grade && (
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-sm md:text-base">
                        {cvData.education.class10School}
                      </h1>
                      <ShowVerifications
                        isAttested={
                          cvData.educationVerifications.class10
                            .isSelfAttested || false
                        }
                        mailStatus={cvData.educationVerifications.class10.mailStatus}
                        hash={cvData.educationVerifications.class10.proof}
                        className="my-2"
                        textClass="text-white"
                        fillCheck
                        fillcheckClass="mt-2"
                        linkClass="text-[#FB980E] font-semibold text-md mt-2"
                      />
                      <div className="flex justify-end text-nowrap">
                        <span className="font-normal text-sm">
                          - Board ({cvData.education.class10Board})
                        </span>
                        <span className="font-normal text-sm">
                          , Grade{" "}
                          {JSON.stringify(cvData.education.class10Grade)}
                        </span>
                      </div>
                    </div>
                  )}
              </div>
            </div>

            {/*  */}
          </div>

          {/* right bar */}
          <div className="flex-1">
            <div className="mt-5 px-2 flex flex-col gap-3">
              <div className="flex items-center gap-5">
                <h1
                  className="text-4xl text-[#333B4D] tracking-wide capitalize 
                max-w-[500px] lg:max-w-[600px]  line-clamp-1 "
                >
                  {cvData.personalDetails.name}
                </h1>

                <ShowVerifications
                  isAttested={
                    cvData.personalDetailsVerification.name.isSelfAttested
                  }
                  onlySelfAttest
                />
              </div>
              {/* personal details */}
              <div className="bg-[#006666] rounded-md text-white px-5 py-1 flex md:max-w-3xl w-full gap-2">
                {/* email and location */}
                <div className="w-full">
                  <div className="flex flex-col gap-2">
                    {/* email */}
                    <div className="flex items-center gap-3">
                      <div className="self-start">
                        <Mail
                          size={26}
                          className="h-4 w-4 md:h-5 md:w-5 mt-1"
                        />
                      </div>
                      <h1 className="text-sm md:text-base tracking-wider font-normal">
                        {cvData.personalDetails.email}
                      </h1>
                      <ShowVerifications
                        isAttested={
                          cvData.personalDetailsVerification.email
                            .isSelfAttested
                        }
                        className="self-start"
                        onlySelfAttest
                        textClass="text-white"
                        badge
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="self-start">
                        <MapPinned
                          size={26}
                          className="h-4 w-4 md:h-5 md:w-5 mt-1"
                        />
                      </div>
                      <h1 className="text-sm md:text-base tracking-wider font-normal">
                        {cvData.personalDetails.location}
                      </h1>
                      <ShowVerifications
                        isAttested={
                          cvData.personalDetailsVerification.location
                            .isSelfAttested
                        }
                        className="self-start mt-2"
                        onlySelfAttest
                        textClass="text-white"
                        badge
                      />
                    </div>
                  </div>
                </div>
                {/* phoneNumber and profesion */}
                <div className="w-full">
                  <div className="flex flex-col gap-2">
                    {/* email */}
                    <div className="flex items-center gap-3">
                      <div className="self-start">
                        <Phone
                          size={24}
                          className="h-4 w-4 md:h-5 md:w-5 mt-1"
                        />
                      </div>
                      <h1 className="text-sm md:text-base tracking-wider font-normal">
                        {cvData.personalDetails.phoneNumber}
                      </h1>
                      <ShowVerifications
                        isAttested={
                          cvData.personalDetailsVerification.phoneNumber
                            .isSelfAttested
                        }
                        // className="self-start mt-2"
                        onlySelfAttest
                        textClass="text-white"
                        badge
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="self-start">
                        {cvData.personalDetails.profession === "student" ? (
                          <MdSchool
                            size={26}
                            className="h-4 w-4 md:h-5 md:w-5 mt-1"
                          />
                        ) : (
                          <FaBriefcase
                            size={26}
                            className="h-4 w-4 md:h-5 md:w-5 mt-1"
                          />
                        )}
                      </div>
                      <h1 className="text-sm md:text-base tracking-wider font-normal">
                        {cvData.personalDetails.profession}
                      </h1>
                      <ShowVerifications
                        isAttested={
                          cvData.personalDetailsVerification.phoneNumber
                            .isSelfAttested
                        }
                        // className="self-start mt-2"
                        onlySelfAttest
                        textClass="text-white"
                        badge
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* profile summary */}
              <div className="flex gap-5 items-center  overflow-hidden">
                <p className="text-sm md:text-base font-semibold  max-w-md lg:max-w-2xl">
                  {cvData.profile_summary}
                </p>
                <ShowVerifications
                  isAttested={
                    cvData.profileSummaryVerification.profile_summary
                      .isSelfAttested
                  }
                  className="self-start mt-2"
                  onlySelfAttest
                  // textClass="text-white"
                />
              </div>

              {/* skill section */}
              {/* skills */}
              <div className="mt-2">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-[#FB980E] rounded-full text-white flex items-center justify-center">
                    <SiHyperskill size={20} />
                  </div>
                  <h1 className="text-2xl font-semibold tracking-wider uppercase">
                    Skills
                  </h1>
                </div>

                {/* showcasing skills */}
                <div className="">
                  <div className="flex flex-col  mt-2 gap-5 md:gap-3 ">
                    {cvData.skills.length > 0 &&
                      cvData.skills.map((skill) => {
                        const isSelfAttested =
                          cvData.skillsVerifications[skill].isSelfAttested ||
                          false;
                        const mailStatus=cvData.skillsVerifications[skill].mailStatus;
                        const hash= cvData.skillsVerifications[skill].proof;
                        return (
                          <div>
                            {/* <div
                          key={index}
                          className="px-2 py-1  text-sm tracking-wide font-semibold rounded-sm bg-[#006666] text-white w-fit"
                        >
                          {skill}
                        </div> */}
                            <ShowAnimatedVerifications
                              firstButtonText={skill}
                              // buttonClass="text-sm lg:text-base"
                              isSelfAttested={isSelfAttested}
                              mailStatus={mailStatus}
                              hash={hash}
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>

              {/* experience */}
              <div className="mt-5">
                {/* title */}
                <div className="flex items-center gap-5">
                  <div className="h-10 w-10 bg-[#FB980E] rounded-full text-white flex items-center justify-center">
                    <BiSolidBriefcase size={20} />
                  </div>
                  <h1 className="text-2xl font-semibold tracking-wider uppercase">
                    Work Experience
                  </h1>
                </div>

                {/* experience cards */}
                <div className="relative">
                  <div className="absolute inset-y-2  h-auto w-[3px]  bg-[#FB980E] rounded-full"></div>

                  {cvData.experience.map((exp, index) => {
                    const verificationKey = exp.company_name;
                    const isSeflAtetsted =
                      cvData.experienceVerifications[verificationKey]
                        .isSelfAttested || false;
                    const mailStatus= cvData.experienceVerifications[verificationKey].mailStatus
                    const hash= cvData.experienceVerifications[verificationKey].proof
                    return (
                      <div
                        key={index}
                        className="flex flex-col mt-3  px-3 ml-1"
                      >
                        <div className="flex justify-between">
                          {/* job role,company name  */}
                          <div className="max-w-xl w-full relative">
                            {/* bulletdot */}
                            <div
                              className={`absolute bg-[#FB980E] h-3 w-3 rounded-full top-2 -left-[21px]`}
                            ></div>
                            <h1 className="text-md md:text-xl font-semibold tracking-tight line-clamp-1">
                              {exp.job_role}
                            </h1>
                            <div className="flex flex-col">
                              <p className="text-sm md:text-lg capitalize line-clamp-1">
                                {exp.company_name}
                              </p>{" "}
                              <ShowVerifications
                                isAttested={isSeflAtetsted}
                                mailStatus={mailStatus}
                                hash={hash}
                                className="ml-5 mt-1"
                              />
                            </div>
                          </div>
                          {/* duration */}
                          <div className="">
                            <p className="text-[#006666] italic text-xs md:text-base text-nowrap">
                              <>
                                {exp.duration.from} - {exp.duration.to}
                              </>
                            </p>
                          </div>
                        </div>
                        {/* description of work */}
                        <div className="mt-3">
                          <p>{exp.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Achievements */}
              {(cvData.achievements.awards.length > 0 ||
                cvData.achievements.courses.length > 0 ||
                cvData.achievements.projects.length > 0) && (
                <div className="my-10 space-y-5">
                  {/* title */}
                  <div className="flex items-center gap-5">
                    <div className="h-10 w-10 bg-[#FB980E] rounded-full text-white flex items-center justify-center">
                      <GiAchievement size={27} />
                    </div>
                    <h1 className="text-2xl font-semibold tracking-wider uppercase">
                      Achievements and Certifications
                    </h1>
                  </div>

                  {/* Awards */}
                  {cvData.achievements?.awards &&
                    cvData.achievements.awards.length > 0 && (
                      // award container
                      <div className="px-3 mt-2">
                        <h1 className="text-xl font-semibold text-[#44949C] mb-2">
                          Awards
                        </h1>
                        {/* award cards */}
                        <div className="flex flex-col gap-3  relative">
                          <div className="absolute inset-y-2  h-auto w-[3px]  bg-[#FB980E] rounded-full"></div>
                          {cvData.achievements.awards.map((award, index) => {
                            const verificationKey = award.award_name;
                            const isSelfAttetsted =
                              cvData.awardVerifications[verificationKey]
                                .isSelfAttested || false;
                            const hash=cvData.awardVerifications[verificationKey].proof
                            const mailStatus=cvData.awardVerifications[verificationKey].mailStatus
                            return (
                              <div key={index} className="flex flex-col ml-3">
                                <div className="flex justify-between">
                                  {/* job role,company name  */}
                                  <div className="max-w-xl w-full relative">
                                    {/* bulletdot */}
                                    <div
                                      className={`absolute bg-[#FB980E] h-3 w-3 rounded-full top-2 left-[-17px]`}
                                    ></div>
                                    <h1 className="text-md md:text-xl font-semibold tracking-tight line-clamp-1">
                                      {award.award_name}
                                    </h1>
                                    <div className="flex flex-col">
                                      <p className="text-sm md:text-lg capitalize line-clamp-1 mb-1">
                                        {award.awarding_organization}
                                      </p>
                                      <ShowVerifications
                                        isAttested={isSelfAttetsted}
                                        mailStatus={mailStatus}
                                        hash={hash}
                                        className="ml-5 mt-1"
                                      />
                                    </div>
                                  </div>
                                  {/* duration */}
                                  <div className="">
                                    <p className="text-[#006666] italic text-xs md:text-base">
                                      {award.date_of_achievement}
                                    </p>
                                  </div>
                                </div>
                                {/* description of work */}
                                <div className="mt-1">
                                  <p className="text-base">
                                    {award.description}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                  {/* Projects */}
                  {cvData.achievements?.projects &&
                    cvData.achievements.projects.length > 0 && (
                      // award container
                      <div className="px-3 mt-2">
                        <h1 className="text-xl font-semibold text-[#44949C] mb-3">
                          Projects
                        </h1>
                        {/* project cards */}
                        <div className="flex flex-col gap-3  relative">
                          <div className="absolute inset-y-2  h-auto w-[3px]  bg-[#FB980E] rounded-full"></div>
                          {cvData.achievements.projects.map(
                            (project, index) => {
                              const verificationKey = project.project_name;
                              const isSelfAttested =
                                cvData.projectsVerifications[verificationKey]
                                  .isSelfAttested || false;
                              return (
                                <div key={index} className="flex flex-col ml-3">
                                  <div className="flex justify-between">
                                    {/* job role,company name  */}
                                    <div className="max-w-xl w-full flex flex-col md:flex-row md:gap-10 md:items-center relative">
                                      {/* bulletdot */}
                                      <div
                                        className={`absolute bg-[#FB980E] h-3 w-3 rounded-full top-2 -left-[17px]`}
                                      ></div>
                                      <div className="flex flex-col">
                                        <h1 className="text-md md:text-xl font-semibold tracking-tight line-clamp-2">
                                          {project.project_name}
                                        </h1>
                                        <ShowVerifications
                                          isAttested={isSelfAttested}
                                          className="ml-5 mt-1"
                                        />
                                      </div>
                                      {project.project_url && (
                                        <a
                                          href={project.project_url}
                                          target="_blank"
                                          className="hover:underline text-blue-600 cursor-pointer text-sm font-medium text-nowrap mt-5 lg:mt-0"
                                        >
                                          Live link
                                        </a>
                                      )}
                                    </div>
                                    {/* duration */}
                                    <div className="">
                                      <p className="text-[#006666] italic text-xs md:text-base text-nowrap">
                                        {
                                          <>
                                            {project.duration.from} -{" "}
                                            {project.duration.to}
                                          </>
                                        }
                                      </p>
                                    </div>
                                  </div>
                                  {/* description of work */}
                                  <div className="mt-1">
                                    <p className="text-base">
                                      {project.description}
                                    </p>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    )}

                  {/* courses */}
                  {cvData.achievements?.courses &&
                    cvData.achievements.courses.length > 0 && (
                      // award container
                      <div className="px-3 mt-2">
                        <h1 className="text-xl font-semibold text-[#44949C] mb-2">
                          Courses
                        </h1>
                        {/* course cards */}
                        <div className="flex flex-col gap-3 relative">
                          <div className="absolute inset-y-2.5  h-auto w-[3px]  bg-[#FB980E] rounded-full -left-0.5"></div>
                          {cvData.achievements.courses.map((course, index) => {
                            const verificationKey = course.course_name;
                            const isSelfAttested =
                              cvData.courseVerifications[verificationKey]
                                .isSelfAttested || false;
                            const mailStatus=cvData.courseVerifications[verificationKey].mailStatus
                            const hash=cvData.courseVerifications[verificationKey].proof
                            return (
                              <div key={index} className="flex flex-col ml-3">
                                <div className="flex justify-between">
                                  {/* job role,company name  */}
                                  <div className="max-w-xl w-full relative">
                                    {/* bulletdot */}
                                    <div
                                      className={`absolute bg-[#FB980E] h-3 w-3 rounded-full top-2 -left-[19px]`}
                                    ></div>
                                    <h1 className="text-md md:text-xl font-semibold tracking-tight line-clamp-1">
                                      {course.course_name}
                                    </h1>
                                    <div className="flex flex-col mb-1">
                                      <p className="text-sm md:text-lg capitalize line-clamp-1">
                                        {course.organization}
                                      </p>
                                      <ShowVerifications
                                        isAttested={isSelfAttested}
                                        mailStatus={mailStatus}
                                        hash={hash}
                                        className="ml-5 mt-1"
                                      />
                                    </div>
                                  </div>
                                  {/* duration */}
                                  <div className="">
                                    <p className="text-[#006666] italic text-xs md:text-base text-nowrap">
                                      {
                                        <>
                                          {course.duration.from} -{" "}
                                          {course.duration.to}
                                        </>
                                      }
                                    </p>
                                  </div>
                                </div>
                                {/* description of work */}
                                <div className="mt-1">
                                  <p className="text-base">
                                    {course.description}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvOutputPage;
