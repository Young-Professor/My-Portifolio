import GuessGame from '../photos/GuessGame.png'
import Hotel from '../photos/Hotel.png'
import BlogWeb from '../photos/BlogWeb.png'


const projects = () => {
  return (
    <div id='projects' className="mx-auto px-6 sm:px-10 md:px-20 about">
      <h1 className="text-2xl text-yellow-500 underline text-white text-center p-4">Projects</h1>
      <div>
        <p className="text-white my-2">These are some of the projects which i have been working on:</p>
      <div className="flex justify-between projects">
        <div className="w-60 box-border ">
            <img src={BlogWeb} alt="guessgame" />
        <p className='text-white'>Blog Website made with React library, Nodejs/express and MySQL</p>
            <p className='text-yellow-500 underline'><a href="https://blogging-website-five.vercel.app/">preview</a></p>
        </div>
        <div className="w-60 box-border">
            <img src={Hotel} alt="Hotel MIS" />
        <p className='text-white'>Hotel MIS made with Html/Css, Javascript Languages</p>
        <p><a className='text-yellow-500 underline' href="https://young-professor.github.io/">Preview</a></p>
        </div>
        <div className="w-60 box-border ">
        <img src={GuessGame} alt="guessgame" />
        <p className='text-white'>Guess game made with Java Language</p>
        <p><a className='text-yellow-500 underline' href="https://github.com/Young-Professor/Mind-GuessGame">Preview</a></p>
        </div>
      </div>
      </div>
      <br />
    </div>
  );
};

export default projects;
