import { WindowContainer } from "@/components/WindowContainer";
import Image from 'next/image';

// Icon group
import linkedInIcon from '../assets/ant-design_linkedin-filled.svg'
import githubIcon from '../assets/ant-design_github-filled.svg'
import gmailIcon from '../assets/ant-design_google-plus-square-filled.svg'
import twitterIcon from '../assets/ant-design_twitter-outlined.svg'
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <WindowContainer title={'Introduction'} windowStyles="mb-6" bodyStyles="grid grid-cols-[1fr_225px] items-center p-4">
        <div className="">
          <span className="bg-neutral-800 text-white py-1 px-3 rounded-full inline-flex items-center mb-3">
            <span className="inline-block h-[11px] w-[11px] mr-2 bg-paper rounded-full"></span>
            Available for work
          </span>
          <h1 className="text-4xl font-black mb-2 text-neutral-800">Renz Tullao Pulvira</h1>
          <p className="text-base mb-2">I’m a <u>Software developer</u> based on Pampanga, Philippines<br />focused on full-stack web development.</p>
          <div className="icon-group flex">
            <a href="/" className="mr-2"><Image src={linkedInIcon} alt={''} width={34} height={34} /></a>
            <a href="/" className="mr-2"><Image src={githubIcon} alt={''} width={34} height={34} /></a>
            <a href="/" className="mr-2"><Image src={gmailIcon} alt={''} width={34} height={34} /></a>
            <a href="/" className="mr-2"><Image src={twitterIcon} alt={''} width={34} height={34} /></a>
          </div>
        </div>
        <div className=""><div className="inner border-2 border-neutral-800 profile-bg h-[169px] w-full bg-[url('../assets/profile.jpg')] rounded-lg"></div></div>
      </WindowContainer>

      <div className="grid grid-cols-[400px_1fr] gap-6 mb-6">
        <div className="flex flex-col">
          <Projects />
          <Skills />
        </div>

        <Experience />
      </div>

      <WindowContainer title={'Github contributions'} windowStyles="mb-6" bodyStyles="p-4">
        <Image className="relative" src="http://ghchart.rshah.org/renztp" alt="renztp's Github chart" width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}}></Image>
      </WindowContainer>
    </>
  );
}
