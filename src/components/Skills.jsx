import React from 'react'
import  {BsInfoCircleFill} from 'react-icons/bs'
import HeaderContentPage from './HeaderContentPage'
import { Animate } from 'react-simple-animate'
import { Line } from 'rc-progress'

const skillsData = [
  {
    label: "FRONTEND",
    data: [
      {
        skillsName: "HTML",
        percentage: "90"

      },
      {
        skillsName: "Css",
        percentage: "80"

      },

      {
        skillsName: "JAVASCRIPT",
        percentage: "90"

      },

      {
        skillsName: "TAILWINDCSS",
        percentage: "90"

      },

      {
        skillsName: "REACT.JS",
        percentage: "90"

      },

      {
        skillsName: "TYPESCRIPT",
        percentage: "90"

      },


    ],
  },

  {
    label:"BACKEND",
    data:[
      {
        
          skillsName: "JAVA",
          percentage: "70",
  
        
      },

      {
        skillsName: "PYTHON",
        percentage: "65",

      },

      
    ],

  },

  {
    label:"DATABASE",
    data:[
      {
        skillsName: "SQL",
        percentage: "70"

      },

      {
        skillsName: "MONGO DB",
        percentage: "85"

      },
    ],
  },
]

const Skills = () => {
  return (
    <section id='skills'>
    <HeaderContentPage
     headerText = 'my Skills'
     icon = {<BsInfoCircleFill size={40} />}
    
    />


    <div className=' lg:flex block p-[20px] mx-1.5 '>
      {skillsData.map ((item,i) =>(
        <div key={i} className='lg:flex lg:flex-col block items-center flex-1 mx-5'>
          <Animate
          play
          duration={1}
          delay={0.3}
          start={{
            transform: 'translateX(-200px)'
          }}

          end={{
            transform: 'translateX(0px)'
          }}
          >
          <h3 className='inline-block text-yellow-500 text-[20px] font-bold leading-[1rem] relative uppercase tracking-[0.5px] p-[5px,10px] border-b-2 border-yellow-500'>{item.label}</h3>

          </Animate>
          
          <div className='w-[100%]'>
            {
              item.data.map((skillItem, j) =>(

                <Animate
          play
          duration={1}
          delay={0.3}
          start={{
            transform: 'translateX(500px)'
          }}

          end={{
            transform: 'translateX(0px)'
          }}
                
                >
                  <div key={j} className='p-[50px,0px,0px,0px]'>
                  <p className='text-[1.6rem] m-[0,0,0,10px] font-medium uppercase text-red-500'>
                    {
                      skillItem.skillsName
                    }
                  </p>
                  <Line
                  percent={skillItem.percentage}
                  strokeWidth="2"
                  strokeColor='#181818'
                  trailWidth="2"
                  strokeLinecap="square"
                  />

                  

                </div>

                </Animate>
                
              ))
            }
          </div>

        </div>
      ))}
    </div>

  </section>
  )
}

export default Skills