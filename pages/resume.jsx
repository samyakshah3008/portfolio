import Head from "next/head";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";

export default function Resume() {
  return (
    <div>
      <Head>
        <title>Samyak Shah | Resume</title>
        <meta name="description" content="Soham Shah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:mx-56 mx-8 flex flex-col h-screen justify-between">
        <div>
          <Navbar />
          <div className="text-gray-600 dark:text-gray-400">
            <div className="mt-2 border-b-2">
              <h1 className="text-6xl font-bold pb-6 text-gray-900 dark:text-gray-200">
                Resume 📃
              </h1>
            </div>
            <h2 className="text-4xl pt-4 font-bold text-gray-900 dark:text-gray-200">
              Samyak Sunilkumar Shah
            </h2>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-medium">
              What am I upto?
              </p>
              <ul className="text-xl pb-4 pl-6 list-disc">
              <li className="my-4">I am an Open-Source Contributor, Member and Community Manager at <a class="text-blue-600"  href="https://layer5.io/community/members/samyak-shah" target="_blank">Layer5</a> and <a class="text-blue-600"  href="https://meshery.io/" target="_blank">Meshery</a> </li>
              <li className="my-4">I contribute to various open-source projects at <a class="text-blue-600"   href="https://moja.global/" target="_blank">Moja Global</a> and <a class="text-blue-600"  href="https://www.realdevsquad.com/" target="_blank">Real Dev Squad</a> where I contribute across multiple verticals. </li>
              <li className="my-4">I have done couple of internships as frontend engineer at <a class="text-blue-600"  href="https://dicot.tech/" target="_blank">Dicot Innovations</a> and <a class="text-blue-600"  href="https://procred.ai/" target="_blank">ProCred.ai</a> </li>
              <li className="my-4">I am a Beta <a class="text-blue-600"  href=" https://studentambassadors.microsoft.com/en-US/studentambassadors/profile/c3dae251-5431-4b09-99ad-df62716d044e" target="_blank">Microsoft Learn Student Ambassador</a> and Web Dev Tech Lead at Phoenix club in my University. </li>
              <li className="my-4">I am currently completing my Bachelor's (2nd Year) in Computer Science and Engineering from Lok Jagruti University. </li>
              </ul>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-medium">
                Work Experience 👨‍💻
              </p>
              <ul className="text-xl pb-4 pl-6 list-disc">
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                    Open Source Contributor and Member at Layer5 & Meshery, Remote
                  </h2>
                  <h3>June 2023 - Present</h3>
                  <ul className="my-2">
                    <li className="my-2">
                      - Members are those who perform consistently well and make impactful contributions to the company.  
                    </li>
                 
                    <li className="my-4">
                      - I worked on couple of projects of Layer5 organization namely community website of both Layer5 and Meshery.  
                    </li>
                    <li className="my-4">
                      - Fixed several bugs and enhancement of Meshery UI Project. 
                    </li>
                    <li className="my-4">
                      - Made my contributions in no-code too such as documentation update, helping newcomers on how to get started which resulted me to get offer for Community Manager at Layer5.
                    </li>
                    <li className="my-4"> - You can checkout my  <a
              className="text-blue-600"
              href="https://github.com/samyakshah3008"
              target="_blank"
              
            >
             GitHub
            </a> to see contributions to various open source companies. </li>
                  </ul>
                
          
                </li>
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                    Frontend Engineer (Intern) at ProCred, Remote
                  </h2>
                  <h3>October 2022 - May 2023</h3>
                  <ul className="my-2">
                    <li className="my-4">
                      - Integrated Discord, Hashnode, YouTube, GitHub with their developer's API for ProCred which aims to fetch the registered user's data to build the core product of procred, an unique resume which they can showcase to hiring companies. 
                    </li>
                 
                    <li className="my-4">
                      - Built a platform where team can maintain the Google Sheet, edit, view, filter from the webapp instead of Google Sheet.  
                    </li>
                    <li className="my-4">
                      - Developed the ProCred's website and involvement in the marketing team.
                    </li>
                    <li className="my-4"> - You can checkout the testimonial which I got from my Senior Jerry Kurian:   <a
              className="text-blue-600"
              href="https://www.linkedin.com/in/samyakshah3008/"
              target="_blank"
              
            >
             LinkedIn Recommendation
            </a> (Please hit Ctrl + End to head over to Recommendation section. ) </li>
                  </ul>
                
          
                </li>
                <p><span>Technology Stack: </span>NestJS, NextJS, discordJS, Integration with Hashnode, YouTube, GitHub, Google Sheets developer APIs</p>

                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                  Frontend Engineer (Intern) at Dicot Innovations, Remote
                  </h2>
                  <h3>September 2022 - October 2022</h3>
                  <ul className="my-2">
                    <li className="my-4">
                      - Worked as Frontend Engineer where I built Vision Web Product, fixed bugs, used ChakraUI and ReactJS to build frontend, at the end of internship, Team successfully launched the product.
                    </li>
                  
                  </ul>
                  <p><span>Technology Stack: </span>HTML5, CSS3, ReactJS</p>
                </li>
             
              </ul>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-medium">
                Community Experience 🌐
              </p>
              <ul className="text-xl pb-4 pl-6 list-disc">
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                    Community Manager at Layer5, an open source company
                  </h2>
                  <ul className="my-2">
                    <li>
                      - Involved myself in planning, marketing and helping newcomers at Layer5. 
                    </li>
                    <li>
                      - Hosting Meetings, preparing meeting minutes, reviewing PRs, keeping a check on stale issues and merging open PRs to the soonest. 
                    </li>
                  </ul>
                </li>
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                    Microsoft Learn Student Ambassador
                  </h2>
                  <ul className="my-2">
                    <li>
                      - Serving the global Microsoft community by spreading knowledge of latest tech stacks and innovations by Microsoft. 
                    </li>
                    <li>
                      - Spreading and increasing awareness in my college about the power of involvement in tech communities. 
                    </li>
                    <li>
                      - Conducted couple of workshops with over 100+ attendees. 
                    </li>
                    <li>
                      - Helped beginners to explore and learn the technology
                    </li>
                  </ul>
                </li>
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                    Web Dev Tech Lead at Phoenix Club
                  </h2>
                  <ul className="my-2">
                    <li>
                      - I have conducted multiple workshops with over 150+ students and love to talk about various topics and technologies, mostly around VanillaJS and ReactJS.
                    </li>
                    <li>
                      - Increasing the awareness about latest technologies and providing opportunities to fellow members. 
                    </li>
                  </ul>
                </li>
              
              </ul>
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
              
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-medium">
                Education
              </p>
              <ul className="text-xl pb-4 pl-6 list-disc">
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                   Lok Jagruti University
                  </h2>
                  <ul className="my-2">
                  <li>
                     September 2021 - August 2025 
                    </li>
                    <li>
                    Major: Computer Science and Engineering (2nd Year) 
                    </li>
                  
                  </ul>
                </li>
              </ul>
            </div>
            <div className="border-b-2">
              <p className="text-2xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-medium">
               Last updated on July 2023.
              </p>
              <p className="text-xl pb-4 pt-5 text-gray-900 dark:text-gray-200 font-medium">
                PDF Version of the above resume can be found Here
              </p>
              
            </div>

           
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
