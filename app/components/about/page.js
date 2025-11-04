"use client";
export default function About() {
  return (
    <>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f472b6, #a855f7, #fcd34d);
          color: #111;
        }

        .title {
          font-size: 3rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 2rem;
          background: linear-gradient(to right, #6b21a8, #db2777);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .card {
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 2rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          max-width: 700px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
          text-align: center;
        }

        .section {
          width: 100%;
        }

        .section h3 {
          font-weight: bold;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
          color: #6b21a8;
        }

        .skills span {
          display: inline-block;
          background: #34d399;
          color: white;
          padding: 0.3rem 0.6rem;
          border-radius: 0.5rem;
          margin: 0.2rem;
          font-size: 0.9rem;
        }

        @media (max-width: 500px) {
          .title {
            font-size: 2.25rem;
          }
          .card {
            padding: 1.5rem;
          }
        }
      `}</style>

      <div className="container">
        <h1 className="title">About Me 🌟</h1>

        <div className="card">
          <div className="section">
            <h3>Name</h3>
            <p>Akinwale Esther Anointed</p>
          </div>

          <div className="section skills">
            <h3>Skills</h3>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Firebase</span>
            <span>Tailwind CSS</span>
          </div>

          <div className="section">
            <h3>Education / Learning</h3>
            <p>Studying Computing and information science at Bamidele Olumilua Universtiy of Education, Science and Technology. Ikere-Ekiti, Ekiti state, Nigeria.</p>
            <p>Learnt Web Development at Early Code institute</p>
            <p>Learnt Computer Basics at BII</p>
          </div>

          <div className="section">
            <h3>Interests</h3>
            <p>Front end web developer</p>
            <p>Back end web developer</p>
          </div>

          <div className="section">
            <h3>Goals</h3>
            <p>UI Design, API Development, Full Stack Developer</p>
          </div>

          <div className="section">
            <h3>Hobbies</h3>
            <p>Designing and Listening to Music 🎵</p>
          </div>
        </div>
      </div>
    </>
  );
}