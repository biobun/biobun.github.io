import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { promises as fs } from 'fs';

interface Experience {
  jobTitle: string,
  workAt: string,
  detail: string,
}

interface Work {
  name: string,
  desc: string,
  image: string,
}

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/data/data.json', 'utf8');
  const data = JSON.parse(file);

  return (
    <>    
    <Navbar/>
    <div className="flex justify-center pt-24">
      <div className="w-[940px] justify-start">
        <div className="w-3/4">
          <p className="font-extrabold text-5xl">Hi, I’m
            <span>
            <Image
              className="rounded-3xl inline mx-5"
              src="bio.png"
              alt="Bio Abidzar"
              width={90}
              height={90}
              priority
            />
            </span>Bio Abidzar!</p>
          <p className="font-extrabold text-5xl">I’m <span className="text-purple-500">Developer.</span></p>
          <p className="font-normal text-3xl mt-10 leading-relaxed">I’m a designer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-project.</p>

          <div className="mt-10 w-3/4">
            <div className="font-extrabold text-2xl mb-10">Working Experience</div>
            {data.experiences.map((experience: Experience, index: number) => (
              <div key={index} className="p-5 mb-5 text-xl border-2 border-gray-200 rounded-xl">
                <div className="mb-3"><span>{experience.jobTitle}</span> at <span className="font-bold">{experience.workAt}</span></div>
                <div className="text-gray-400">{experience.detail}</div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="font-extrabold text-2xl mb-10">Selected Works</div>
            {data.works.map((work: Work, index: number) => (
              <div key={index} className="p-5 mb-5 text-xl border-2 border-gray-200 rounded-xl">
                <div className="mb-3">{work.name}</div>
                <div className="text-gray-400">{work.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
