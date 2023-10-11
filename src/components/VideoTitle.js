import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pb-12 md:pb-0  pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className=" text-2xl md:text-3xl font-bold">{title}</h1>
        <p className="hidden md:inline-block md:py-6 text-lg w-full">{overview}</p>

        <div className='mt-4'>
            <button className="bg-white py-3 md:py-4 text-black mr-2 px-4 md:px-12 text-md md:text-xl rounded-lg hover:bg-opacity-80">▶️Play</button>
            <button className=" hidden md:inline-block mx-2 bg-gray-500 py-4 text-white px-6 md:px-12 text-xl rounded-lg opacity-50">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle