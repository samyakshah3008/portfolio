import Head from "next/head";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Samyak Shah | Projects</title>
        <meta name="description" content="Soham Shah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:mx-56 mx-8 flex flex-col h-screen justify-between">
        <div>
          <Navbar />
          <div className="text-gray-600 dark:text-gray-400">
            <div className="mt-2 border-b-2">
              <h1 className="text-6xl font-bold pb-6 text-gray-900 dark:text-gray-200">
                Projects 💻
              </h1>
              <p className="text-xl pb-4">
                I build and break stuff to experiment with technologies I am
                passionate about. My Projects consist of full-stack
                applications, libraries/npm-packages, open-source and things
                that gave me dopamine hits during their development.
              </p>
            </div>
            
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Side Projects ⌨🔧
              </p>
              <ul className="text-xl pb-4 pl-6 list-disc">
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    ECommerce
                  </h2>
                  <p className="mb-2">
                  <span className="text-blue-600">
                      <a target="_blank" rel="noreferrer" href="https://github.com/samyakshah3008/TripleS-Store-react">
                       - TripleS Store:
                      </a>
                    </span> The store home page displays featured categories that you can click on to navigate to specific product categories. It is a product listing page that shows all the products with filter options.</p>
                  <p className="mb-2">
                   - On this page, you can add or remove products from your cart or wishlist. Additionally, there are filter and sort functionalities available, allowing you to filter products by price, category, availability, delivery speed, and ratings.  
                  </p>
                  <p className="mb-2">
                  - Furthermore, there is an authentication feature along with the option for guest login. 
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: ReactJS, React Router, TripleS UI, Mock backend
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                   OTT Platform
                  </h2>
                  <p className="mb-2">
                    <span className="text-blue-600">
                      <a target="_blank" rel="noreferrer" href="https://github.com/samyakshah3008/triples-player-react">
                      - TripleS Player: 
                      </a>
                    </span>
                    {" "} The player video listing page showcases featured categories. By clicking on a category, you will be directed to the corresponding videos.</p>
                  <p className="mb-2">
                   - On this page, you have the ability to like or dislike videos and add or remove them from your watch later list. Additionally, you can add or remove videos from your viewing history. Moreover, you can create a playlist consisting of your favorite videos. When you click on any video from the displayed videos, you will be taken to a single video listing page. 
                  </p>
                  <p className="mb-2">
                  - Furthermore, there is an authentication feature along with the option for guest login. 
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: ReactJS, React Router, TripleS UI, Mock backend
                 
                  </p>
             
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    Social Media 
                  </h2>
                  <p className="mb-2">
                    <span className="text-blue-600">
                      <a target="_blank" rel="noreferrer" href="https://github.com/samyakshah3008/TripleS-Chat">
                       - TripleS Chat:
                      </a>
                    </span>
                    {" "} is a web application offers a range of features to enhance your experience. You can follow or unfollow other users to stay updated with their posts.
                  </p>
                  <p className="mb-2">
                  - Express your appreciation by liking posts and bookmarking those that capture your interest. You can also create and edit your own posts to share your thoughts and experiences with the community.
                  </p>
                  <p className="mb-2">- To help you discover popular content, the web app provides a filtering option based on trending data. Additionally, the platform incorporates form validation to ensure the accuracy and integrity of the information you provide.</p>
                  <p className="mb-2">- Your profile serves as a personal space where you can showcase your interests and engage with other users. Moreover, the application offers a convenient guest login feature for quick access and exploration.</p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: React, Redux Toolkit, Chakra UI, Mock backend using mockbee, React Router
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    Component Library
                  </h2>
                  <p className="mb-2">
                    <span className="text-blue-600">
                      <a target="_blank" rel="noreferrer" href="https://github.com/samyakshah3008/TripleS-UI">
                     - TripleS UI: 
                      </a>
                    </span>{" "}
                    Light weight Component Library having 15 inbuilt components similar to tailwind CSS, a mini version of it. 
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: HTML5, CSS3 
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    Mini Projects
                  </h2>
                  <p className="mb-2">
                    <span className="text-blue-600">
                      <a target="_blank" rel="noreferrer" href="https://samyakshah-portfolio.netlify.app/projects.html">
                        fun mini projects
                      </a>
                    </span>{" "}
                    like profit/loss in stock market checker, palindrome checker, lucky birthday checker, triangle quiz app, cash registor, movie recommendation, emoji meaning, english to minion language webapps! 
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: HTML5, CSS3, VanillaJS, ReactJS
                  </p>
                </li>
              </ul>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Open Source Engineering with:  💖
              </p>
              <ul className="text-xl pb-4">
                <li className="my-4">
                  <h2 className="font-medium text-2xl mb-2">
                    Layer5 | Meshery | Moja Global | Real Dev Squad
                  </h2>
                  <p className="mb-2">
                    <span className="text-blue-600">
                      <a target="_blank"  rel="noreferrer" href="https://github.com/samyakshah3008">
                       - Checkout all my open source contributions on Github
                      </a>
                      </span>
                      </p>
                 
                </li>
              </ul>
            </div>
           
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
