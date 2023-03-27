import React from 'react'

type Props = {
  className: string,
  size: number | string,
}

function HeartFilled(props: Props) {
  const { className, size } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} height={`${size}px`} viewBox="0 0 24 24">
      <g fill="currentColor">
        <path d="M21.996,3.413c1.299,1.299 2.009,3.024 2.004,4.86c-0,1.835 -0.716,3.56 -2.014,4.859l-9.177,9.142c-0.223,0.223 -0.524,0.336 -0.816,0.336c-0.292,0 -0.594,-0.118 -0.817,-0.341l-9.157,-9.157c-1.299,-1.299 -2.019,-3.019 -2.019,-4.854c-0.005,-1.835 0.71,-3.56 2.009,-4.859c1.294,-1.294 3.019,-2.009 4.849,-2.009c1.835,-0 3.565,0.72 4.864,2.018c0,0 0.285,0.286 0.285,0.286l0.276,-0.276c1.299,-1.299 3.023,-2.014 4.859,-2.014c1.835,0 3.555,0.71 4.854,2.009Z" />
      </g>
    </svg>
  )
}

export default HeartFilled