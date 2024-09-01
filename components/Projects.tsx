import { WindowContainer } from './WindowContainer'
import Image from 'next/image';
import pokeApiIcon from '../assets/pokeapi_256.png'
import reactIcon from '../assets/react.webp'

interface Item {
  logo: any;
  projectTitle: string;
  techStack: string;
  projectDesc: string;
}

const JobItem = (props: Item) => {
  return (
    <div className='rounded-md border-[1px] border-b-[3px] border-neutral-800 mb-2 last:mb-0 p-3 text-center grid grid-cols-[60px_1fr] gap-2 items-center'>
      <Image className='mx-auto my-3' src={props.logo} alt={''} width={60} />
      <div>
        <h3 className='font-bold text-xl'>{props.projectTitle}</h3>
        <p className='font-medium text-md'>{props.projectDesc}</p>
        <span className='text-sm'>{props.techStack}</span>
      </div>
    </div>
  )
}

export const Projects = (props: {}) => {
  const projects = [
    {
      projectTitle: 'Vue PokeApi',
      techStack: 'Vuejs, PokeApi, ChartsJs',
      projectDesc: 'A Pokedex made with Vue  PokeApi',
      logo: pokeApiIcon
    },
    {
      projectTitle: 'React Weather App',
      techStack: 'React, Google Places API, OpenWeather',
      projectDesc: 'A Simple React Weather App',
      logo: reactIcon
    },
  ]

  return (
    <WindowContainer title={'Projects'} bodyStyles="p-4" windowStyles='mb-6 flex-1'>
      {projects.map((project, i) => <JobItem key={i} projectTitle={project.projectTitle} techStack={project.techStack} projectDesc={project.projectDesc} logo={project.logo} />)}
    </WindowContainer>
  )
}
