import React from 'react'
import { Link } from 'react-router-dom'
import img from '../images/sun.jpg'

const Intro = () => {
//   const myStyle = {
//     backgroundImage: `url(${img})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   }

  return (
    <div
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-xl text-white space-y-6">
        <p className="text-lg leading-relaxed">
          I quit smoking over 5 years ago, and one thing that really kept me motivated was calculating how much money I was saving every day, week, or month. Back then, I never imagined I’d one day build a tool like this — but here it is. <strong className="text-green-300">AshToCash</strong> instantly calculates how much you’ve saved by quitting, and hopefully, gives you the same motivation it once gave me.
        </p>
        <Link
          to="/home"
          className="inline-block bg-green-500 hover:bg-green-600 transition text-white text-lg px-6 py-3 rounded shadow"
        >
          Calculate Your Savings
        </Link>
      </div>
    </div>
  )
}

export default Intro


// import React from 'react'
// import { Link } from 'react-router-dom'
// import img from '../images/sun.jpg'

// const Intro = () => {
//   const myStyle = {
//     backgroundImage: `url(${img})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//   }

//   return (
//     <div
//       className="relative min-h-screen flex items-center justify-center text-center overflow-y-hidden"
//       style={myStyle}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-xl text-white space-y-6 px-4">
//         <p className="text-lg leading-relaxed">
//           I quit smoking over 5 years ago, and one thing that really kept me motivated was calculating how much money I was saving every day, week, or month. Back then, I never imagined I’d one day build a tool like this — but here it is. <strong className="text-green-300">AshToCash</strong> instantly calculates how much you’ve saved by quitting, and hopefully, gives you the same motivation it once gave me.
//         </p>
//         <Link
//           to="/home"
//           className="inline-block bg-green-500 hover:bg-green-600 transition text-white text-lg px-6 py-3 rounded shadow"
//         >
//           Calculate Your Savings
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Intro


