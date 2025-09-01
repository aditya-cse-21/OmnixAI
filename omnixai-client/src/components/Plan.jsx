import React from 'react'
import { Sparkles, Check, Crown, Zap } from 'lucide-react'
import { useClerk } from '@clerk/clerk-react'

const Plan = () => {
  const { openUserProfile } = useClerk()

  const handleFreePlanClick = () => {
    openUserProfile()
  }

  const handlePremiumPlanClick = () => {
    openUserProfile()
  }

  return (
    <div className='w-full bg-gradient-to-b from-teal-50 via-emerald-50 to-green-50'>
        <div className='max-w-6xl mx-auto px-4 sm:px-20 xl:px-32 py-24'>
            <div className='text-center mb-16'>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Crown className="w-6 h-6 text-green-500" />
                  <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">Pricing</span>
                </div>
                <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6'>
                  Choose Your <span className="gradient-text">Plan</span>
                </h2>
                <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                  Start for free and scale up as you grow. Find the perfect plan for your content creation needs.
                </p>
            </div>

            <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
                {/* Free Plan */}
                <div className="relative p-8 rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-500 group">
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <Zap className="w-8 h-8 text-gray-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Plan</h3>
                        <div className="text-4xl font-bold text-gray-900 mb-2">
                            $0<span className="text-lg text-gray-500 font-normal">/month</span>
                        </div>
                        <p className="text-gray-600 mb-8">Perfect for getting started</p>
                        
                        <ul className="space-y-4 mb-8 text-left">
                            <li className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                    <Check className="w-3 h-3 text-green-600" />
                                </div>
                                <span className="text-gray-700">10 AI generations per month</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                    <Check className="w-3 h-3 text-green-600" />
                                </div>
                                <span className="text-gray-700">Article writing</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                    <Check className="w-3 h-3 text-green-600" />
                                </div>
                                <span className="text-gray-700">Blog title generation</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                    <Check className="w-3 h-3 text-green-600" />
                                </div>
                                <span className="text-gray-700">Basic support</span>
                            </li>
                        </ul>
                        
                        <button 
                            onClick={handleFreePlanClick}
                            className="w-full bg-gray-100 text-gray-700 py-4 px-6 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
                        >
                            Current Plan
                        </button>
                    </div>
                </div>

                {/* Premium Plan */}
                <div className="relative p-8 pt-12 rounded-3xl gradient-bg text-white shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 group transform hover:scale-105">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                            <Crown className="w-4 h-4" />
                            Most Popular
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <Crown className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
                        <div className="text-4xl font-bold mb-2 flex items-center justify-center gap-1">
                            <span>$9</span>
                            <span className="text-lg text-white/80 font-normal">/month</span>
                        </div>
                        <p className="text-white/80 mb-8">For power users and professionals</p>
                        
                        <ul className="space-y-4 mb-8 text-left">
                            <li className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span>Unlimited AI generations</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span>Image generation</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span>Background removal</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span>Object removal</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span>Resume review</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span>Priority support</span>
                            </li>
                        </ul>
                        
                        <button 
                            onClick={handlePremiumPlanClick}
                            className="w-full bg-white text-gray-900 py-4 px-6 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg cursor-pointer"
                        >
                            Upgrade to Premium
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Plan
