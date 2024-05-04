import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Blog } from "@/types/blog";
import { Metadata } from "next";
import Image from "next/image";

const SingleBlogPage = async () => {
  // const { mainImage, title, metadata } = blog;

  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex items-end justify-center gap-7.5 lg:flex-row xl:gap-12.5">
            {/* <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <form
                  action="https://formbold.com/s/unique_form_id"
                  method="POST"
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Here..."
                      className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />

                    <button
                      className="absolute right-0 top-0 p-5"
                      aria-label="search-icon"
                    >
                      <svg
                        className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Categories
                </h4>

                <ul>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Blog</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Events</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Grids</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">News</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Rounded</a>
                  </li>
                </ul>
              </div>

              <RelatedPost />
            </div> */}

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/WhatsApp.jpeg"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  The AI Phone: Revolutionizing the Future of Communication
                </h2>

                <h3 className="mb-5 mt-11 font-semibold text-black dark:text-white">
                  The phone that predicts what you need before you know even
                  need it.
                </h3>
                <div className="blog-details">
                  <h3 className="pt-8">Personalized Content Curation</h3>

                  <p>
                    In the modern era, where technological advancements are
                    shaping the way we live, AI has emerged as a transformative
                    force, revolutionizing various aspects of our lives. One
                    such innovation that has gained significant traction in
                    recent years is the AI phone. Blending the power of
                    artificial intelligence with the ubiquitous device that is
                    the smartphone, AI phones are poised to redefine the way we
                    communicate, work, and interact with our digital
                    surroundings.
                  </p>

                  <h3 className="pt-8">What is an AI Phone?</h3>
                  <p>
                    An AI phone is not merely a conventional smartphone; it's a
                    smart companion powered by artificial intelligence
                    algorithms. Unlike traditional smartphones, which primarily
                    rely on user input and predefined commands, AI phones are
                    designed to understand, adapt, and interact with users in a
                    more intuitive and personalized manner.
                  </p>

                  <h3 className="pt-8">The Core Features</h3>
                  <p>
                    1. Personalized Assistance At the heart of every AI phone
                    lies a virtual assistant capable of understanding natural
                    language and performing tasks based on user commands.
                    Whether it's setting reminders, sending messages, or
                    searching the web, the AI assistant learns from user
                    interactions to provide increasingly tailored
                    recommendations and assistance. 2. Enhanced User Experience
                    AI phones leverage machine learning algorithms to analyze
                    user behavior and preferences, allowing for personalized
                    content recommendations, predictive text input, and
                    context-aware suggestions. This enhances the overall user
                    experience, making interactions with the device more
                    seamless and intuitive. 3. Intelligent Camera Capabilities
                    The camera functionalities of AI phones are augmented by
                    AI-powered features such as scene recognition, facial
                    recognition, and advanced image processing. This enables
                    users to capture stunning photos, apply real-time filters,
                    and even generate 3D avatars using augmented reality
                    technology. 4. Adaptive Performance AI phones employ
                    adaptive performance management techniques to optimize
                    battery life, system resources, and app performance based on
                    usage patterns and user habits. This ensures smoother
                    multitasking, faster app launches, and prolonged battery
                    endurance, enhancing the device's overall efficiency. The
                    Impact on Communication The advent of AI phones has
                    transformed the way we communicate in several ways: 1.
                    Natural Language Understanding With AI-powered virtual
                    assistants capable of understanding and processing natural
                    language, communicating with AI phones feels more
                    conversational and intuitive. Users can interact with their
                    devices using voice commands, dictating messages, making
                    calls, and even conducting web searches effortlessly. 2.
                    Seamless Multimodal Communication AI phones facilitate
                    seamless multimodal communication, allowing users to switch
                    between voice, text, and visual inputs effortlessly. Whether
                    it's sending a text message, making a video call, or sharing
                    multimedia content, AI phones provide diverse communication
                    channels tailored to user preferences. 3. Intelligent
                    Messaging AI-powered messaging apps analyze conversations in
                    real-time to provide contextual suggestions, such as quick
                    replies, relevant information, or emoji recommendations.
                    This streamlines communication and fosters more meaningful
                    interactions by reducing the need for manual input and
                    enhancing message comprehension.
                  </p>

                  <h3 className="pt-8">Future Prospects</h3>
                  <p>
                    As AI technology continues to evolve, the capabilities of AI
                    phones are poised to expand even further. Future iterations
                    may incorporate advanced features such as emotion
                    recognition, proactive assistance, and adaptive user
                    interfaces, further blurring the line between human and
                    machine interaction. In conclusion, AI phones represent a
                    significant milestone in the evolution of communication
                    technology. By harnessing the power of artificial
                    intelligence, these devices offer personalized assistance,
                    enhanced user experiences, and seamless communication
                    capabilities, paving the way for a more connected and
                    intelligent future. Whether it's simplifying daily tasks,
                    fostering more meaningful interactions, or unlocking new
                    creative possibilities, the AI phone is not just a device;
                    it's a catalyst for innovation, empowerment, and endless
                    possibilities in the digital age.
                  </p>
                </div>

                {/* <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    Jhon Doe
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On: July 30, 2023
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Category:
                    </span>
                    Events
                  </li>
                </ul> */}

                {/* <div className="blog-details">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur
                    leo. Ut venenatis rhoncus quam sed condimentum. Curabitur
                    vel turpis in dolor volutpat imperdiet in ut mi. Integer non
                    volutpat nulla. Nunc elementum elit viverra, tempus quam
                    non, interdum ipsum.
                  </p>

                  <p>
                    Aenean augue ex, condimentum vel metus vitae, aliquam porta
                    elit. Quisque non metus ac orci mollis posuere. Mauris vel
                    ipsum a diam interdum ultricies sed vitae neque. Nulla
                    porttitor quam vitae pulvinar placerat. Nulla fringilla elit
                    sit amet justo feugiat sodales. Morbi eleifend, enim non
                    eleifend laoreet, odio libero lobortis lectus, non porttitor
                    sem urna sit amet metus. In sollicitudin quam est,
                    pellentesque consectetur felis fermentum vitae.
                  </p>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                    <Image
                      src={"/images/blog/blog-02.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div>

                  <h3 className="pt-8">
                    Nunc elementum elit viverra, tempus quam non
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur
                    leo. Ut venenatis rhoncus quam sed condimentum. Curabitur
                    vel turpis in dolor volutpat imperdiet in ut mi. Integer non
                    volutpat nulla. Nunc elementum elit viverra, tempus quam
                    non, interdum ipsum.
                  </p>
                </div> */}

                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
