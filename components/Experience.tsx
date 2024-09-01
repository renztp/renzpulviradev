import { WindowContainer } from './WindowContainer'
import Image from 'next/image';
import accentureIcon from '../assets/accenture_logo.jpeg'
import suitespotIcon from '../assets/suitespottechnology_logo.jpeg'
import msmIcon from '../assets/MSM-Logo.png'
import virtualCraftersIcon from '../assets/virtual_crafters_logo.jpeg'
import fullstackIcon from '../assets/fullstack_it_solutions_logo.jpeg'

interface Item {
  logo: any;
  companyName: string;
  workDuration: string;
  role: string;
  imageWidth?: number
}

const JobItem = (props: Item) => {
  return (
    <div className='rounded-md border-[1px] border-neutral-500 mb-2 last:mb-0 p-3 text-center items-center bg-[#e2e1e1]'>
      <Image className='mx-auto my-3 max-w-[60px]' src={props.logo} alt={''} width={props?.imageWidth ? props?.imageWidth : 60} />
      <div>
        <h3 className='font-bold text-xl'>{props.companyName}</h3>
        <p className='font-medium text-md'>{props.role}</p>
        <span className='text-sm'>{props.workDuration}</span>
      </div>
    </div>
  )
}

export const Experience = (props: {}) => {
  const jobs = [
    {
      companyName: 'Suitespot Technology',
      workDuration: '2022 - Present',
      role: 'Software Developer',
      logo: suitespotIcon,
    },
    {
      companyName: 'Accenture',
      workDuration: '2021 - 2022',
      role: 'Software Developer',
      logo: accentureIcon
    },
    {
      companyName: 'M Square Media',
      workDuration: '2021 - 2022',
      role: 'Web Developer',
      logo: msmIcon,
      imageWidth: 45
    },
    {
      companyName: 'Virtual Crafters',
      workDuration: '2019 - 2020',
      role: 'Web Developer',
      logo: virtualCraftersIcon
    },
    {
      companyName: 'Fullstack HQ',
      workDuration: '2018-2019',
      role: 'Frontend Developer',
      logo: fullstackIcon
    }
  ]

  return (
    <WindowContainer title={'Experience'} bodyStyles="grid grid-cols-2 gap-x-3 gap-y-1 p-4">
      {jobs.map((job, i) => <JobItem key={i} companyName={job.companyName} workDuration={job.workDuration} role={job.role} logo={job.logo} imageWidth={job.imageWidth} />)}
    </WindowContainer>
  )
}
