import React from 'react'
import { WindowContainer } from './WindowContainer'
import Image from 'next/image'


import jsIcon from '../assets/javascript.png'
import htmlIcon from '../assets/html5.png'
import cssIcon from '../assets/css3.png'
import reactIcon from '../assets/react.webp';
import mongodbIcon from '../assets/mongodb.png';
import typescriptIcon from '../assets/typescript.png';
import wordpressIcon from '../assets/wordpress.png';
import phpIcon from '../assets/php_icon.png';
import mysqlIcon from '../assets/mysql.png'
import sassIcon from '../assets/sass.png'
import nodeIcon from '../assets/nodejs.png'
import nextIcon from '../assets/nextjs-icon.svg'

export const Skills = (props : {}) => {
  return (
    <WindowContainer title="Skills" windowStyles="" bodyStyles="flex items-center flex-wrap gap-y-2">
      <Image src={jsIcon} className="mr-1 text-center" alt="js icon" width={34} />
      <Image src={htmlIcon} className="mr-0 text-center" alt="html icon" width={34} />
      <Image src={cssIcon} className="mr-1 text-center" alt="css icon" width={34} />
      <Image src={sassIcon} className="mr-1 text-center" alt="css icon" width={34} />

      <Image src={nextIcon} className="mr-1 text-center" alt="css icon" width={34} />
      <Image src={nodeIcon} className="mr-1 text-center" alt="css icon" width={34} />
      <Image src={reactIcon} className="mr-1 text-center" alt="css icon" width={34} />
      <Image src={mongodbIcon} className="mr-1 text-center" alt="css icon" width={34} />
      <Image src={mysqlIcon} className="mr-1 text-center" alt="css icon" width={34} />
      <Image src={typescriptIcon} className="mr-1 text-center" alt="css icon" width={34} />
      <Image src={wordpressIcon} className="mr-1 text-center" alt="css icon" width={34} />
      <Image src={phpIcon} className="mr-1 text-center" alt="css icon" width={34} />
    </WindowContainer>
  )
}
