import Image from 'next/image'

export default function Veranda() {
  return (
    <div className="bg-green-50 min-h-screen">
      <div className="p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 2xl:p-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 xs:mb-10 sm:mb-12">
            <p className="text-green-600 font-semibold mb-2 text-sm xs:text-base">Services</p>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-800 mb-2 xs:mb-4">Garden landscaping</h1>
            <h2 className="text-xl xs:text-2xl text-gray-600">services for every need</h2>
          </div>
          <p className="text-gray-600 text-center mb-8 xs:mb-10 sm:mb-12 max-w-2xl mx-auto text-sm xs:text-base">
            Enhance your outdoor space with our professional garden landscaping services,
            customized to suit every need and preference. From design to installation, we
            create beautiful, functional gardens that reflect your style.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
            {[
              { title: 'Landscape Design', image: '/placeholder.svg?height=300&width=300' },
              { title: 'Garden Installation', image: '/placeholder.svg?height=300&width=300' },
              { title: 'Lawn Care & Maintenance', image: '/placeholder.svg?height=300&width=300' }
              
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={300}
                  className="w-full h-40 xs:h-48 sm:h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg xs:text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}