import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import { Sparkles, ArrowRight } from 'lucide-react'

const AiTools = () => {
    const navigate = useNavigate()
    const {user} = useUser()
  return (
    <div className='w-full bg-gradient-to-b from-green-50 via-emerald-50 to-teal-50'>
      <div className='px-4 sm:px-20 xl:px-32 py-24'>
        <div className='text-center mb-16'>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-green-500" />
            <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">AI Tools</span>
          </div>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6'>
            Powerful <span className="gradient-text">AI Tools</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Everything you need to create, enhance, and optimize your content with cutting-edge AI technology
          </p>
        </div>

        <div className='flex flex-wrap mt-10 justify-center'>
          {AiToolsData.map((tool, index)=> (
              <div 
                key={index} 
                className='p-8 m-4 max-w-xs rounded-lg bg-white/80 backdrop-blur-sm shadow-lg border border-green-100 hover:border-green-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer' 
                onClick={()=> user && navigate(tool.path)}
              >
                  <tool.Icon  
                    className='w-12 h-12 p-3 text-white rounded-xl' 
                    style={{background : `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`}}
                  />
                  <h3 className = 'mt-6 mb-3 text-lg font-semibold text-gray-900'>{tool.title}</h3>
                  <p className = 'text-gray-600 text-sm max-w-[95%]'>{tool.description}</p>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AiTools;