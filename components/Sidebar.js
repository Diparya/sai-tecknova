import { useState } from "react";
import {
    HomeIcon,
    DocumentTextIcon,
    MenuIcon,
    UserGroupIcon,
    UsersIcon,
    LightBulbIcon,
    OfficeBuildingIcon,
    BookOpenIcon,
    GiftIcon,
    QuestionMarkCircleIcon,
    PhoneIcon,
    ThumbUpIcon,
    SpeakerphoneIcon,
    MusicNoteIcon,
    AcademicCapIcon,
    IdentificationIcon
} from '@heroicons/react/outline'
import { Link } from "react-scroll";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="lg:hidden">
      {showSidebar ? (
        <button
          className="flex text-2xl text-white items-center cursor-pointer fixed left-10 top-5 z-50 md:top-6"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <div>
          <MenuIcon
            onClick={() => setShowSidebar(!showSidebar)}
            className="absolute w-7 z-30 flex items-center cursor-pointer left-8 top-5 md:top-6"
          />  
        </div>
        
      )}

      <div
        className={`top-0 left-0 w-screen bg-blue-600  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      > 
        <div className="pb-10 h-screen scrollbar-hide overflow-y-scroll">
            <h1 className="mt-16 mb-4 text-4xl font-bold flex items-center">SAI Tecknova</h1>
            <h3 className="text-xl pl-4 py-3 font-semibold bg-blue-400 rounded-lg flex text-white"><HomeIcon className="w-6 mr-4"/>Home</h3>
            <div className="p-2 bg-blue-700 rounded-lg">
              <Link onClick={() => setShowSidebar(!showSidebar)} to="about" spy={true} smooth={true} offset={50} duration={500} className="text-xl hover:bg-blue-400 rounded-lg pl-2 py-1 font-semibold text-white flex">
                <DocumentTextIcon className="w-6 mr-4"/>About
              </Link>
              <Link onClick={() => setShowSidebar(!showSidebar)} to="courses" spy={true} smooth={true} offset={50} duration={500} className="text-xl hover:bg-blue-400 rounded-lg pl-2 py-1 font-semibold text-white flex">
                <BookOpenIcon className="w-6 mr-4"/>Courses
              </Link>
              <Link onClick={() => setShowSidebar(!showSidebar)} to="highlights" spy={true} smooth={true} offset={50} duration={500} className="text-xl hover:bg-blue-400 rounded-lg pl-2 py-1 font-semibold text-white flex">
                <SpeakerphoneIcon className="w-6 mr-4"/>Highlights
              </Link>
              <Link onClick={() => setShowSidebar(!showSidebar)} to="events" spy={true} smooth={true} offset={50} duration={500} className="text-xl hover:bg-blue-400 rounded-lg pl-2 py-1 font-semibold text-white flex">
                <MusicNoteIcon className="w-6 mr-4"/>Event
              </Link>
              <Link onClick={() => setShowSidebar(!showSidebar)} to="industry" spy={true} smooth={true} offset={50} duration={500} className="text-xl hover:bg-blue-400 rounded-lg pl-2 py-1 font-semibold text-white flex">
                <OfficeBuildingIcon className="w-6 mr-4"/>Industry Partners
              </Link> 
              <Link onClick={() => setShowSidebar(!showSidebar)} to="awards" spy={true} smooth={true} offset={50} duration={500} className="text-xl hover:bg-blue-400 rounded-lg pl-2 py-1 font-semibold text-white flex">
                <GiftIcon className="w-6 mr-4"/>Awards
              </Link>
              <Link onClick={() => setShowSidebar(!showSidebar)} to="contact" spy={true} smooth={true} offset={50} duration={500} className="text-xl hover:bg-blue-400 rounded-lg pl-2 py-1 font-semibold text-white flex">
                <PhoneIcon className="w-6 mr-4"/>Contact Us
              </Link>  
            </div>
            <div className="space-y-2 pl-3 border-t border-white pt-3 mt-3">
              <h3 className="text-xl font-semibold text-white flex"><AcademicCapIcon className="w-6 mr-4"/>Placement</h3>
              <h3 className="text-xl font-semibold text-white flex"><LightBulbIcon className="w-6 mr-4"/>Advisory</h3>
              <h3 className="text-xl font-semibold text-white flex"><UsersIcon className="w-6 mr-4"/>Committee</h3>
              <h3 className="text-xl font-semibold text-white flex mb-2 pb-2 border-b border-white"><UserGroupIcon className="w-6 mr-4"/>Members</h3>
              <h3 className="text-xl font-semibold text-white flex"><QuestionMarkCircleIcon className="w-6 mr-4"/>FAQ</h3>
              <h3 className="text-xl font-semibold text-white flex"><ThumbUpIcon className="w-6 mr-4"/>Careers</h3>
              <h3 className="text-xl font-semibold text-white flex"><IdentificationIcon className="w-6 mr-4 mb-16"/>For Recruiters</h3>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;