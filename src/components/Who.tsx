import { FC } from "react";
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephoneForward } from 'react-icons/bs'
import { SlSocialLinkedin } from 'react-icons/sl'
import { RxGithubLogo } from 'react-icons/rx'
import { FiFacebook } from 'react-icons/fi'
import { CiFacebook } from 'react-icons/ci'
import { BsFacebook } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { CiLinkedin } from 'react-icons/ci'
const Who: FC = () => {
  return (
    <div id="About" className="h-screen">
      <h1 className="text-[#285F67] items-center justify-center flex-col text-center text-4xl md:text-6xl sm:text-5xl font-bold mb-5">About me</h1>
      <div className="containerAbout transition-[0.5s]  relative flex text-center justify-center items-center  ml-[15%] mr-[15%] w-3/4 h-[380px] sm:w-3/4 sm:h-[420px] md:w-[1000px] md:h-[470px]">
        <div className="absolute flex translate-x-[-50%] left-2/4 top-[5%] w-[1050px] h-[500px]">
          <div className="w-[100px] h-[125px] sm:w-[200px] sm:h-[250px] md:w-[450px] md:h-[500px]">
          <Image src="/Images/Moi.png" width={250} height={350} alt="Moi" className="md:mt-[30px] w-[170px] sm:w-[120px] md:w-[250px] ml-[370px] md:ml-[100px] sm:ml-[305px] rounded-xl border-red-800"/>
          </div>

          <div className="md:mt-[40px] sm:mt-[20px] w-1/5 h-[100px] ml-[380px] md:ml-[0px] sm:ml-[280px] md:w-2/4 md:h-[500px] sm:w-1/4 sm:h-[250px] text-justify text-white text-[12px] md:text-[16px] sm:text-[14px]">
            <h5 className="text-white">Je suis actuellement étudiant L2 Informatique à l'ESTI. Je suis une personne déterminée qui se consacre à ses études et qui travaille dur pour atteindre ses objectifs. Je suis motivé et passionné par les nouvelles technologies, l'informatique et la programmation.</h5>
            <div className="mt-4 -ml-10 md:ml-0">
              <div className="flex pt-3"><AiOutlineMail className="w-[29px] h-[15px] pr-[15px] sm:w-[32px] sm:h-[17px] sm:pr-[17px] md:w-[39px] md:h-[20px] md:pr-[20px]"/>
                <h5 className="mt-[-3px]">tolotraranarison@gmail.com</h5>
              </div>  
              <div className="flex pt-3"><BsTelephoneForward className="w-[29px] h-[15px] pr-[15px] sm:w-[32px] sm:h-[17px] sm:pr-[17px] md:w-[39px] md:h-[20px] md:pr-[20px]"/>
                <h5 className="mt-[-3px]">034 52 211 78</h5>
              </div>
              <div className="flex pt-3"><SlSocialLinkedin className="w-[29px] h-[15px] pr-[15px] sm:w-[32px] sm:h-[17px] sm:pr-[17px] md:w-[39px] md:h-[20px] md:pr-[20px]"/>
                <h5 className="mt-[-1px]">RANARISON Tolotra</h5>
              </div>
              <div className="flex pt-3"><RxGithubLogo className="w-[29px] h-[15px] pr-[15px] sm:w-[32px] sm:h-[17px] sm:pr-[17px] md:w-[39px] md:h-[20px] md:pr-[20px]"/>
                <h5 className="mt-[-3px]">tolotra1S</h5>
              </div>
              <div className="flex pt-3"><FiFacebook className="w-[29px] h-[15px] pr-[15px] sm:w-[32px] sm:h-[17px] sm:pr-[17px] md:w-[39px] md:h-[20px] md:pr-[20px]"/>
                <h5 className="mt-[-3px]">Ranarison tolotras</h5>
              </div>
              <div className="flex align-items items-center justify-center mr-20 md:mr-0 sm:mr-28">
                <ul className="flex mt-9 md:mt-14 sm:mt-7">
                  <li><a href="https://www.facebook.com/tolotrass" target="_blank"><BsFacebook className="md:w-[50px] md:h-[30px] sm:w-[41px] sm:h-[21px] w-[40px] h-[20px] hover:text-blue-800"/></a></li>
                  <li><a href="https://www.github/tolotra1S" target="_blank"><FaGithub className="md:w-[50px] md:h-[30px] sm:w-[41px] sm:h-[21px] w-[40px] h-[20px] hover:text-black"/></a></li>
                  <li><a href="https://www.instagram.com/RNTolotra/?hl=en" target="_blank"><BsInstagram className="md:w-[50px] md:h-[30px] sm:w-[41px] sm:h-[21px] w-[40px] h-[20px] hover:text-pink-600"/></a></li>
                  <li><a href="https://www.gmail.com/"><SiGmail className="md:w-[50px] md:h-[30px] sm:w-[41px] sm:h-[21px] w-[40px] h-[20px] hover:text-orange-900"/></a></li>
                  <li><a href="https://www.linkedin.com/in/tolotra-ranarison-402b19268/" target="_blank"><CiLinkedin className="md:w-[50px] md:h-[30px] sm:w-[41px] sm:h-[21px] w-[40px] h-[20px] hover:text-blue-500"/></a></li>
                
                </ul>
              </div> 
            </div> 
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Who;
