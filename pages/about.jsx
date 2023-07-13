import Head from "next/head";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Head>
        <title>Samyak Shah | About</title>
        <meta name="description" content="Soham Shah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:mx-56 mx-8 flex flex-col h-screen justify-between">
        <div>
          <Navbar />
          <div className="text-gray-600 dark:text-gray-400">
            <div className="mt-2 border-b-2">
              <h1 className="text-6xl font-bold pb-6 text-gray-900 dark:text-gray-200">
                About 🙋‍♂️
              </h1>
            </div>
            <div className="flex md:flex-row flex-col py-10 justify-around items-start">
              <div className="w-full border-2 p-4 shadow-md rounded-md border-50">
                <Image
                  src="/new-profile-pic.png"
                  height="300"
                  width="300"
                  style={{objectFit: "cover"}}
                  alt="about-dp"
                  
                />
                <h2>
                  <span className="text-lg font-bold text-gray-900 dark:text-gray-200">
                    Samyak Shah
                  </span>
                </h2>
                <h2>
                  <span className="text-md text-gray-900 dark:text-gray-200">
                    Software Engineer
                  </span>
                </h2>
                <h2>
                  <span className="text-md text-gray-900 dark:text-gray-200">
                    India
                  </span>
                </h2>
                <h2>
                  <span className="text-md text-gray-900 dark:text-gray-200">
                    samyakshah3008@gmail.com
                  </span>
                </h2>
              </div>
              <div className="md:pl-16 md:pt-0 pl-0 pt-8 pr-4 md:pr-16">
                <h2 className="text-3xl font-bold pb-4 text-gray-900 dark:text-gray-200">
                  {" "}
                  Hi 👋 I'm Samyak Shah
                </h2>
                <p className="text-lg pb-4">
                I apply best practices to software development, design, and delivery. I'm a polyglot programmer who is able to work with diverse technologies.
                </p>
                <p className="text-lg pb-4">
                I am an undergraduate student of Computer Science and Engineering at Lok Jagruti University. I am deeply passionate about the intersection of technology and humanity; and, more specifically, how technology can be used to empower people and communities.
                </p>
                <p className="text-lg pb-4">
                My world revolves around coding and open-source. I love to learn and share my knowledge with the community, and to create and collaborate on amazing projects.
                </p>
                <p className="text-lg pb-4">
                I am a bookworm, a lover of words and languages. At the moment, my thoughts are all over the place and my words are scattered with no cohesion whatsoever, but maybe one day they will find their destination.
                </p>
                <p className="text-lg pb-4">
                  Feel free to check out my{" "}
                  <Link href="/resume">
                    <a className="underline">Resume</a>
                  </Link>
                    {" "}and{" "} 
                  <Link href="/projects">
                    <a className="underline"> Projects</a>
                  </Link>
          
                </p>
          
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
