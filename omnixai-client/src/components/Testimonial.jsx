import { assets } from "../assets/assets";
import { Sparkles, Star } from 'lucide-react';

const Testimonial = () => {
    const dummyTestimonialData = [
        {
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
            name: 'Anish Jaiswal',
            title: 'Marketing Manager, TechCorp',
            content: 'OmnixAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.',
            rating: 5,
        },
        {
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
            name: 'Ravneesh Gaur',
            title: 'Content Creator, Firetube',
            content: 'OmnixAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.',
            rating: 5,
        },
        {
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
            name: 'Ravina Sharma',
            title: 'Content Writer, InfoCube',
            content: 'OmnixAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.',
            rating: 4,
        },
    ]

    return (
        <div className='w-full bg-gradient-to-b from-green-50 via-emerald-50 to-teal-50'>
            <div className='px-4 sm:px-20 xl:px-32 py-24'>
                <div className='text-center mb-16'>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Sparkles className="w-6 h-6 text-green-500" />
                        <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
                    </div>
                    <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6'>
                        Loved by <span className="gradient-text">Creators</span>
                    </h2>
                    <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                        Don't just take our word for it. Here's what our users are saying about OmnixAI.
                    </p>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                    {dummyTestimonialData.map((testimonial, index) => (
                        <div key={index} className='p-8 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-green-100 hover:border-green-300 hover:-translate-y-2 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl'>
                            <div className="flex items-center gap-1 mb-4">
                                {Array(5).fill(0).map((_, starIndex) => (
                                    <Star 
                                        key={starIndex} 
                                        className={`w-5 h-5 ${starIndex < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                    />
                                ))}
                            </div>
                            <p className='text-gray-600 text-sm mb-6 leading-relaxed'>"{testimonial.content}"</p>
                            <hr className='mb-6 border-gray-200' />
                            <div className='flex items-center gap-4'>
                                <img src={testimonial.image} className='w-12 h-12 object-cover rounded-full border-2 border-green-100' alt={testimonial.name} />
                                <div className='text-sm'>
                                    <h3 className='font-semibold text-gray-900'>{testimonial.name}</h3>
                                    <p className='text-gray-500'>{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonial;