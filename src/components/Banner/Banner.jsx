import bgImg from '../../../images/banner.png' 
const Banner = () => {
    return (
        // <div className="w-full h-screen bg-no-repeat py-[130px] lg:mt-8" style={{backgroundImage: `url(${bgImg})`}}>
        //     <div className="  max-w-4xl  text-center mx-auto  text-white">
        //     <h1 className="text-5xl font-bold leading-normal">Discover an exceptional cooking class tailored for you!</h1>
        //     <p className="mt-6 mb-10 text-lg">Cooking is the art of transforming simple ingredients into delicious, nourishing meals. It's a joyful, creative process that brings people together around the table.</p>
        //     <div className="md:flex gap-7 max-w-96 mx-auto">
        //     <button className="btn bg-[#0be58a] text-lg font-semibold  px-7 rounded-[50px] border-none">Explore Now</button>
        //     <button className="btn btn-outline text-white text-lg font-semibold  px-7 rounded-[50px]">Our Feedback</button>
        //     </div>
        //     </div>
        // </div>
        <div>
            
<div
  className="hero  lg:py-[120px] rounded-3xl lg:mt-8 "
  style={{
    backgroundImage: `url(${bgImg})`,
  }}>
  
  <div className="hero-content text-white text-center">
    <div className="max-w-4xl">
      <h1 className="text-3xl lg:text-5xl font-bold leading-loose">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mt-2 mb-6 lg:mt-6 lg:mb-10 lg:text-lg">
      Cooking is the art of transforming simple ingredients into delicious, nourishing meals. It's a joyful, creative process that brings people together around the table.
      </p>
      <div className=" lg:flex gap-7 max-w-96 mx-auto">
          <button className="btn bg-[#0be58a] text-lg font-semibold  px-7 rounded-[50px] border-none mb-2 lg:mb-0">Explore Now</button>
          <button className="btn btn-outline text-white text-lg font-semibold  px-7 rounded-[50px]">Our Feedback</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;