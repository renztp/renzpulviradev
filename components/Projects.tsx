import { WindowContainer } from './WindowContainer'
import Image from 'next/image';
import pokeApiIcon from '../assets/pokeapi_256.png'
import reactIcon from '../assets/react.webp'
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

interface Item {
  logo: any;
  projectTitle: string;
  techStack: string;
  projectDesc: string;
  url: Url;
}

const JobItem = (props: Item) => {
  return (
    <Link target='_blank' href={props.url} className='rounded-md border-[1px] border-b-[3px] border-neutral-800 mb-2 last:mb-0 p-3 text-center grid grid-cols-[60px_1fr] gap-2 items-center'>
      <Image className='mx-auto my-3' src={props.logo} alt={''} width={60} />
      <div>
        <h3 className='font-bold text-xl'>{props.projectTitle}</h3>
        <p className='font-medium text-md'>{props.projectDesc}</p>
        <span className='text-sm'>{props.techStack}</span>
      </div>
    </Link>
  )
}

export const Projects = (props: {}) => {
  const projects = [
    {
      projectTitle: 'Vue PokeApi',
      techStack: 'Vuejs, PokeApi, ChartsJs',
      projectDesc: 'A Pokedex made with Vue  PokeApi',
      logo: pokeApiIcon,
      url: 'https://renztp.github.io/vue-pokemonApi/'
    },
    {
      projectTitle: 'React Weather App',
      techStack: 'React, Google Places API, OpenWeather',
      projectDesc: 'A Simple React Weather App',
      logo: reactIcon,
      url: 'https://renztp.github.io/react-weather/'
    },
  ]

  return (
    <WindowContainer title={'Projects'} bodyStyles="p-4" windowStyles='mb-6 flex-1'>
      {projects.map((project, i) => <JobItem key={i} projectTitle={project.projectTitle} techStack={project.techStack} projectDesc={project.projectDesc} logo={project.logo} url={project.url} />)}
    </WindowContainer>
  )
}
