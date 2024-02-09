import { FC } from "react";
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephoneForward } from 'react-icons/bs'
import { SlSocialLinkedin } from 'react-icons/sl'
import { RxGithubLogo } from 'react-icons/rx'
import { FiFacebook } from 'react-icons/fi'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'

const Who: FC = () => {
  return (
    <div id="About" className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          Who am I?
        </h1>
        <div className="containerAbout transition-[0.5s] relative grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center w-full md:w-3/4 mx-auto">
          <div className="w-full md:w-[450px] mx-auto">
            <Image src="/Images/Moi.png" data-scroll data-scroll-speed="2" width={250} height={350} alt="Moi" className="mx-auto rounded-xl border-red-800" />
          </div>
          <div className="mt-6 text-white text-[12px] md:text-[16px] sm:text-[14px] md:w-3/3 md:text-left">
            <h5 className="text-white">Je suis actuellement étudiant L3 Informatique à l'ESTI. Je suis une personne déterminée qui se consacre à ses études et qui travaille dur pour atteindre ses objectifs. Je suis motivé et passionné par les nouvelles technologies, l'informatique et la programmation.</h5>
            <div className="mt-4">
              <div className="flex items-center justify-center md:justify-start">
                <AiOutlineMail className="w-[29px] h-[15px] pr-[15px] sm:w-[32px] sm:h-[17px] sm:pr-[17px] md:w-[39px] md:h-[20px] md:pr-[20px]" />
                <h5>tolotraranarison@gmail.com</h5>
              </div>
              <div className="flex items-center justify-center mt-2 md:justify-start">
              <BsTelephoneForward className="w-[29px] h-[15px] pr-[15px] sm:w-[32px] sm:h-[17px] sm:pr-[17px] md:w-[39px] md:h-[20px] md:pr-[20px]"/>
                <h5>034 52 211 78 / 032 48 114 49</h5>
              </div>
              <div className="flex items-center justify-center mt-2 md:justify-start">
              <SlSocialLinkedin className="w-[29px] h-[15px] pr-[15px] sm:w-[32px] sm:h-[17px] sm:pr-[17px] md:w-[39px] md:h-[20px] md:pr-[20px]"/>
                <h5>RANARISON Tolotra</h5>
              </div>
              <div className="flex items-center justify-center mt-2 md:justify-start">
              <RxGithubLogo className="w-[29px] h-[15px] pr-[15px] sm:w-[32px] sm:h-[17px] sm:pr-[17px] md:w-[39px] md:h-[20px] md:pr-[20px]"/>
                <h5>tolotraRan</h5>
              </div>
              <div className="flex items-center justify-center mt-2 md:justify-start">
              <FiFacebook className="w-[29px] h-[15px] pr-[15px] sm:w-[32px] sm:h-[17px] sm:pr-[17px] md:w-[39px] md:h-[20px] md:pr-[20px]"/>
                <h5>Ranari's tolotra</h5>
              </div>
            </div>
            <div className="mt-6">
              <ul className="flex justify-center">
              <li className="mx-2">
                  <a href="https://www.facebook.com/tolotrass" target="_blank"><FiFacebook className="w-[40px] h-[20px] hover:text-blue-800" /></a>
                </li>
                <li className="mx-2">
                  <a href="https://www.github/tolotra1S" target="_blank"><FaGithub className="w-[40px] h-[20px] hover:text-black" /></a>
                </li>
                <li className="mx-2">
                  <a href="https://www.instagram.com/RNTolotra/?hl=en" target="_blank"><BsInstagram className="w-[40px] h-[20px] hover:text-pink-600" /></a>
                </li>
                <li className="mx-2">
                  <a href="https://www.gmail.com/"><SiGmail className="w-[40px] h-[20px] hover:text-orange-900" /></a>
                </li>
                <li className="mx-2">
                  <a href="https://www.linkedin.com/in/tolotra-ranarison-402b19268/" target="_blank"><CiLinkedin className="w-[40px] h-[20px] hover:text-blue-500" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;