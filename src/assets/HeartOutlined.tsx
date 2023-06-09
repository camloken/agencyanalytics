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
        <path d="M21.996,3.413c1.299,1.299 2.009,3.024 2.004,4.86c-0,1.835 -0.716,3.56 -2.014,4.859l-9.177,9.142c-0.223,0.223 -0.524,0.336 -0.816,0.336c-0.292,0 -0.594,-0.118 -0.817,-0.341l-9.157,-9.157c-1.299,-1.299 -2.019,-3.019 -2.019,-4.854c-0.005,-1.835 0.71,-3.56 2.009,-4.859c1.294,-1.294 3.019,-2.009 4.849,-2.009c1.835,-0 3.565,0.72 4.864,2.018c0,0 0.285,0.286 0.285,0.286l0.276,-0.276c1.299,-1.299 3.023,-2.014 4.859,-2.014c1.835,0 3.555,0.71 4.854,2.009Zm-1.643,8.08c0.86,-0.861 1.335,-2.003 1.33,-3.219l0,-0.002c0,-1.216 -0.469,-2.359 -1.33,-3.22c-0.861,-0.856 -2.004,-1.331 -3.216,-1.331c-1.213,-0 -2.36,0.474 -3.221,1.336l-1.092,1.092c-0.455,0.455 -1.184,0.455 -1.638,-0l-1.102,-1.102c-0.862,-0.861 -2.008,-1.336 -3.226,-1.336c-1.212,0 -2.354,0.475 -3.211,1.331c-0.861,0.857 -1.33,1.999 -1.33,3.216c-0,1.217 0.474,2.359 1.335,3.22c0,0 8.341,8.341 8.341,8.341l8.36,-8.326Z" />
      </g>
    </svg>
  )
}

export default HeartFilled