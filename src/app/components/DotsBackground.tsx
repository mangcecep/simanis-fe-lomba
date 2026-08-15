import React from 'react'

const DotsBackgroundComponents = () => {
  const dots = Array.from({ length: 4000 })

  return (
    <div className="pointer-events-none absolute inset-0 justify-center items-center overflow-hidden grid grid-cols-[repeat(auto-fill,20px)] auto-rows-[20px]">
      {dots.map((_, index) => (
        <span
          key={index}
          className="h-1 w-1 rounded-full bg-[#ffffffec]"
        />
      ))}
    </div>
  )
}

export default DotsBackgroundComponents