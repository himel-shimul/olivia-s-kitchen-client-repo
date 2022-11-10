import React from 'react';
import bgImg from '../../assets/newsletter.png'


const NewsLetter = () => {
    return (
        <div className="hero min-h-screen mb-4" style={{ backgroundImage: `url("https://img.lovepik.com/free-template/bg/20200922/bg/afe571a58445a_415745.png_list.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Subscribe our newsletter</h1>
<input type="text" placeholder="Type Email" className="input input-ghost w-full max-w-xs" />
      <button className="btn btn-primary">SEND EMAIL</button>
    </div>
  </div>
</div>
    );
};

export default NewsLetter;