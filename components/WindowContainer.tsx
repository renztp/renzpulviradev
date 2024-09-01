import React from 'react'

type Props = {
  title: string,
  windowStyles?: string,
  bodyStyles?: string,
  children: string | JSX.Element | JSX.Element[]
}

export const WindowContainer = ({title, windowStyles, bodyStyles, children}: Props) => {
  return (
    <div className={`window-wrapper border-[3px] border-neutral-800 rounded-lg w-shadow ${windowStyles}`}>
      <div className="title-bar uppercase bg-neutral-800 text-paper py-1 px-2 font-medium">
        {title}
      </div>
      <div className={`window-wrapper-body ${bodyStyles}`}>
        {children}
      </div>
    </div>
  )
}
