import Link from "next/link";
import backgroundImage from "../public/Images/hats.jpg";

export default function Home() {
  return (
    <main className='justify-center items-center'>
     
      <div className=" font-inter">
  
        <section style= {{backgroundImage: `url(${backgroundImage.src})` ,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "90vh",
            display: 'flex',
            alignItems: 'center',}}
            id='home'>


            <div className='m-2 md:mx-auto text-center text-white '>
                <span className='font-bold text-5xl md:text-7xl'>Welcome to <span className=''>Knoxx University</span></span>
                <p className='text-2xl md:font-semibold md:text-3xl'> Where Knowledge Unleashes Boundless Opportunities!</p>

               <Link href='/signup'><button className="primary_btn"> Enroll Now</button></Link> 
               
                <button className="outline_btn"> Testimonials</button>
              
                </div>

        </section>
        <section className="blue_gradient py-2 px-24 text-center pb-2 text-white">
        <span className="text-8xl">&quot;</span>
          <p className=' text-md md:text-2xl'>
                At Knoxx, we believe in the transformative power of education. Our commitment to excellence, innovation, 
                and holistic learning sets us apart as a beacon of academic brilliance.
                As you step into the realm of Knoxx, you embark on a journey that transcends traditional boundaries and opens doors to a world of limitless possibilities.</p>
                <span className="text-8xl">&quot;</span>
        </section>

        <section className="">
          <div className="block md:flex md:flex-col-3 px-12 py-4">
            <div className="m-8">
            <p><span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-2 w-[64px] h-[64px]">
                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
              </svg>
              <p  className="my-2 mb-2 font-bold justify-center text-2xl"> Empowering Minds, Igniting Futures</p>
              </span>
                Discover a dynamic learning environment that fosters intellectual curiosity and nurtures individual growth.
                At Knoxx, we are dedicated to providing a rich tapestry of academic programs, cutting-edge research opportunities, 
                and a vibrant campus life. Our world-class faculty members are passionate mentors,
                guiding you towards academic excellence and helping you shape your unique path to success.</p>
            </div>
            <div className="m-8">
              <p><span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-2 w-[64px] h-[64px]">
                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
              </svg>
              <p  className="my-2 mb-2 font-bold justify-center text-2xl">Global Perspectives, Local Impact</p>
              </span>Embrace diversity and broaden your horizons at Knoxx University.
               With a global outlook, we prepare our students to thrive in an interconnected world. Our commitment to community engagement and social responsibility
                ensures that you not only receive a world-class education but also contribute meaningfully to society.</p>
            </div>


            <div className="m-8">
            <p><span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-2 w-[64px] h-[64px]">
                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
              </svg>
              <p  className="my-2 mb-2 font-bold justify-center text-2xl">Innovate, Create, Lead</p>
              </span>
              Knoxx University is a hub of innovation and creativity. We empower our students to think critically,
               solve complex problems, and become leaders in their chosen fields. Whether you aspire to be a trailblazing entrepreneur,
                a groundbreaking scientist, or a visionary artist, Knoxx provides the platform to turn your dreams into reality.</p>
            </div>
          </div>
        </section>
        <section className="blue_gradient">
          <div className="  px-24 py-8">
            <p className="text-center text-white text-sm md:text-xl md:text-white">
            <h1 className="font-bold text-4xl md:text-5xl md:text-white mb-6">Join the Knoxx Community</h1>

Become part of a diverse and supportive community that values collaboration, inclusivity, and the pursuit of knowledge. At Knoxx, you'll forge lifelong connections, build lasting friendships, and create memories that will accompany you on your journey long after graduation.

Embark on your academic adventure at Knoxx University - where knowledge meets inspiration, and the future begins today. Welcome to a place where you don't just earn a degree; you shape your destiny.

Apply now and unlock a world of possibilities at Knoxx University!
            </p>
          </div>

          <form className="px-24 text-center p-6">
            <span className="text-white md:text-xl"> To join our community and also receive newsletters, please subscribe</span>
            <div className="w-full bg-white rounded-lg p-4 ">
            <input type='email' value='' placeholder="example@knoxxuniversity.edu"
             className=" w-full md:w-64 border-2 border-blue-300 rounded-sm py-2 px-3
            focus:ring-1 focus:ring-blue-700 "/>
            <button className=" primary_btn mx-2"> Subscribe </button>
            </div>
          </form>
        </section>

        <section id='footer' >
          <div className='bg-slate-800 text-slate-400 text-sm text-center px-6 py-16'>
          <p className="flex justify-center text-2xl cursor-pointer md:text-3xl" >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-2 items-center w-8 h-8">
            <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
          </svg>

             Knoxx Education System
             </p>
            <p>All Rights Reserved. &copy; 2024</p>
    
            <div className="flex justify-center space-x-8 mt-8 ">
            <Link href='#'><img className=' w-8 h-8 md:w-12 md:h-12  cursor-pointer' src='/SMIconSVG/facebooki.svg' alt="facebook"/></Link>
            <Link href='#'><img className='w-8 h-8 md:w-12 md:h-12 cursor-pointer' src='/SMIconSVG/Xi.svg' alt="X"/></Link>
            <Link href='#'><img className='w-8 h-8 md:w-12 md:h-12 cursor-pointer' src='/SMIconSVG/Instagrami.svg' alt="instagram"/>  </Link>
            <Link href='#'><img className='w-8 h-8 md:w-12 md:h-12 cursor-pointer' src='/SMIconSVG/Linkedini.svg' alt="Linkedin"/></Link>
          

            </div>
          </div>
        </section>
        </div>
        
   
    </main>
  );
}
