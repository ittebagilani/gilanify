import React from 'react'

interface TwoLineMenuIconProps {
  className?: string
}

const TwoLineMenuIcon: React.FC<TwoLineMenuIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M4 8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default TwoLineMenuIcon
