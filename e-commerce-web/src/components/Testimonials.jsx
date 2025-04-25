import React from 'react';

const TestimonialCard = ({ image, quote, name }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="relative flex-shrink-0">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden">
          <img 
            src={image} 
            alt={`${name}'s testimonial`} 
            className="w-full h-full object-cover"
          />
        </div>
        {/* <div className="absolute -top-2 -left-2 bg-blue-500 rounded-full p-2"> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3m4 0h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3"></path>
            <path d="M4 15v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8"></path>
          </svg> */}
        {/* </div> */}
      </div>
      <div className="flex-1 text-center md:text-left">
        <p className="text-gray-700 italic mb-4">{quote}</p>
        <p className="font-bold text-blue-600">{name}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: "src/assets/testimonials (3).png",
      quote: "Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.",
      name: "Stacy"
    },
    {
      id: 2,
      image: "src/assets/testimonials (1).png",
      quote: "I ordered 5 shirts from them and received them in no time. The customer support was awesome!",
      name: "Tiffany"
    },
    {
      id: 3,
      image: "src/assets/testimonials (2).png",
      quote: "I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.",
      name: "James"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Testimonials</h2>
        
        <div className="grid grid-cols-1 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              image={testimonial.image}
              quote={testimonial.quote}
              name={testimonial.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;