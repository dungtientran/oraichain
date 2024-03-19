import React, { FC, ReactNode } from 'react'

interface Props {
  className?: string;
  isPaddingTop?: boolean;
  children: ReactNode
}


const Section: FC<Props> = ({ className, isPaddingTop, children }) => {
  return (
    <section className={`${!isPaddingTop ? "section-container" : 'section-container-notp'} ${className}`}>
      {children}
    </section>
  )
}

export default Section
