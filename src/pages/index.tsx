import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';

const HomePage = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  const texts = ["MERN Stack Developer", "Full Stack Developer", "Web Enthusiast"];

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1000); // Pause before start deleting
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? texts[index].substring(0, prev.length - 1)
          : texts[index].substring(0, prev.length + 1)
      );
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, 150); // Speed of the typing/deleting

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);
  return (
    <div className="relative h-screen overflow-auto bg-cover bg-forest-pattern">
      <div className='mt-[16rem] md:mt-0 flex flex-col-reverse md:flex-row w-full h-full'>
          <div className='w-full md:w-[39%]'>
          <div 
              className="relative  w-full h-full  bg-opacity-0 flex items-center justify-center transition-all duration-300 ease-in-out  hover:scale-105 hover:bg-opacity-0 transform"
              >
              <div className='w-[90%] h-[90%] md:w-[62%] md:h-[62%] cursor-pointer bg-forest-primary hover:bg-forest-secondary rounded-3xl flex justify-center items-center transition-all duration-2000 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]'>
                <Image
                  src="/ProfileImage3.jpg" 
                  alt="Profile"
                  width={300}
                  height={150}
                  className="w-[99%] h-[99%] hover:w-[97%] hover:h-[97%] rounded-2xl transition-all duration-2000 hover:shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className='w-full md:w-[59%] p-6 flex flex-col justify-center items-start'>
              <h2 className="text-3xl font-bold mb-4 font-serif leading-relaxed">Hi, I am <span className='text-emerald-50 glow'>Yashdeep Saini</span></h2>
              <h3 className="text-white md:text-earth-secondary text-2xl font-bold mb-4 font-serif leading-relaxed">
              {text}
              <span className={`blinking-cursor ${blink ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </h3>
              <p className="text-emerald-200 text-xl text-justify font-serif leading-relaxed hover:text-white">
              I am a dedicated and innovative full-stack developer with a strong foundation in both front-end and back-end technologies. My portfolio showcases a range of projects where I’ve applied my skills in modern web development to build dynamic, responsive, and user-centric applications. Explore my work to see how I leverage the latest technologies to deliver high-quality solutions.
              </p>
          </div>
      </div>
    </div>
  );
};

export default HomePage;
 {/* <div className="relative flex flex-col md:flex-row space-y-8 md:space-x-8 justify-center items-center">
       <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-s w-full h-auto bg-opacity-80">
          

        </div>
      </div> */}