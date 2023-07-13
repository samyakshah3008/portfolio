import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Samyak Shah</title>
        <meta name="description" content="Samyak Shah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:mx-56 mx-8 flex flex-col h-screen justify-between">
        <div>
          <Navbar />
          <div className="text-gray-600 dark:text-gray-400">
            <div className="mt-2 border-b-2">
              <h1 className="text-6xl font-bold pb-6 text-gray-900 dark:text-gray-200">
                Samyak Shah 👋
              </h1>
              <p className="text-xl pb-4">
                Hey, there! Welcome to my Website. I am Samyak Shah - Aspiring Software
                Engineer based in India.
              </p>
            
              <p className="text-xl pb-4">
              I am a second year student, currently undertaking my Bachelor in Computer Science and Engineering. My experience revolves around building full-stack services with special interest in frontend engineering. I was a previous Frontend Engineer (Intern) at <a className="text-blue-600"  href="https://dicot.tech/" target="_blank" rel="noreferrer">Dicot Innovations</a> and <a className="text-blue-600"  href="https://procred.ai/" target="_blank" rel="noreferrer">ProCred.ai</a> 🚀.
              </p>
              <p className="text-xl pb-4">
              I am also a passionate open-source contributor. Recently I got promoted to member of open source company <a className="text-blue-600"  href="https://layer5.io/community/members/samyak-shah" target="_blank" rel="noreferrer">Layer5</a> for my constant impactful contributions. Previously I have worked with <a className="text-blue-600"   href="https://moja.global/" target="_blank" rel="noreferrer">Moja Global</a> and <a className="text-blue-600"  href="https://www.realdevsquad.com/" target="_blank" rel="noreferrer">Real Dev Squad</a> as an open source contributor. Being a community enthusiast, I am a <a className="text-blue-600"  href=" https://studentambassadors.microsoft.com/en-US/studentambassadors/profile/c3dae251-5431-4b09-99ad-df62716d044e" target="_blank" rel="noreferrer">Microsoft Student Ambassador</a>. from Gujarat, India.💙
              </p>
              <p className="text-lg pb-10">
                <Link href="/about">
                  <a className="hover:underline">Learn More...</a>
                </Link>
              </p>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Tech Stack 🛠
              </p>
              <ul className="text-xl pb-4">
                <li className="my-2">
                  <span className="underline">Languages</span>: JavaScript,
                  TypeScript, Java, Python, HTML5, CSS3
                </li>
                <li className="my-2">
                  <span className="underline">Frameworks and Libraries</span>:
                  React.js, Next, Node, Express, Nest
                </li>
                <li className="my-2">
                  <span className="underline">Platforms</span>: Git (Github and
                  Gitlab), Heroku, AWS, Google Firebase
                </li>
                <li className="my-2">
                  <span className="underline">Database</span>: MongoDB, SQL,
                  GraphQL
                </li>
                <li className="my-2">
                  <span className="underline">Design Libraries</span>:
                  TailwindCSS, Bootstrap, MaterialUI, ChakraUI
                </li>
              </ul>
              <p className="text-lg pb-10">
                <Link href="/resume">
                  <a className="hover:underline">Learn More...</a>
                </Link>
              </p>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Open Source Work and Side Projects 🚀
              </p>
              <ul className="text-xl pb-4">
                <li className="my-2">
                <span className="font-500"> Contributor and Member at: </span>{" "}
                  <span>
                    <a
                      className="underline"
                      href="https://layer5.io/community/members/samyak-shah"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Layer5
                    </a>
                  </span>
                
                </li>
                <li className="my-2">
                <span className="font-500">Contributor and Member at: </span>
                  <span>
                    <a
                      className="underline"
                      href="http://meshery.io/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Meshery
                    </a>
                  </span>
                </li>
                <li className="my-2">
                <span className="font-500">Contributor at: </span>{" "}
                  <span>
                    <a
                      className="underline"
                      href="https://www.realdevsquad.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                   Real Dev Squad
                    </a>
                  </span>
                </li>
                <li className="my-2">
                <span className="font-500">Contributor at: </span>{" "}
                  <span>
                    <a
                      className="underline"
                      href="https://moja.global/"
                      target="_blank"
                      rel="noreferrer"
                    >
                   Moja Global
                    </a>
                  </span>
                </li>
              </ul>
              <p className="text-lg pb-10">
                <Link href="/projects">
                  <a className="hover:underline">Learn More...</a>
                </Link>
              </p>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Recent Blog Posts 📚
              </p>
              <ul className="text-xl pb-4">
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://samyakshah.hashnode.dev/async-and-defer-attributes"
                      target="_blank"
                      rel="noreferrer"
                    >
                    Async and Defer attributes
                    </a>
                  </span>
                </li>
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://samyakshah.hashnode.dev/content-delivery-networks"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Content Delivery Networks
                    </a>
                  </span>
                </li>
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://samyakshah.hashnode.dev/pitfalls-to-avoid-as-a-react-beginner"
                      target="_blank"
                      rel="noreferrer"
                    >
                  
                      Pitfalls to avoid as a react begineer
                    </a>
                  </span>
                </li>
              </ul>
              <p className="text-lg pb-10">
                <a
                  className="hover:underline"
                  href="https://samyakshah.hashnode.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn More...
                </a>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
