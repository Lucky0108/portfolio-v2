import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Blog 2 Images Import
import blog2Img0 from '../images/blog/future-work.jpg';
import blog2Img1 from '../images/blog/html5.png';
import blog2Img2 from '../images/blog/css3.png';
import blog2Img3 from '../images/blog/js.png';
import blog2Img4 from '../images/blog/html-define.jpg'

// Blog 3 Images Import
import blog3Img1 from '../images/blog/js2.png';
import blog3Img2 from '../images/blog/react.png';
import blog3Img3 from '../images/blog/why.jpg';
import { BlogPg } from './BlogPg';

const Blog = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false); // 1st Modal
    const [modalIsOpen2, setIsOpen2] = React.useState(false); // 2nd Modal
    const [modalIsOpen3, setIsOpen3] = React.useState(false); // 3rd Modal


    function openModal() {
        setIsOpen(true);
    }

    function openModal2() {
        setIsOpen2(true);
    }

    function openModal3() {
        setIsOpen3(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function closeModal2() {
        setIsOpen2(false);
    }

    function closeModal3() {
        setIsOpen3(false);
    }

    return (
        <section className="blog-section" id="Blog">
            <div className="container">
                <div className="blog-heading-div">
                    <span> Blogs </span>
                    <h3> Latest Blogs </h3>
                </div>
                <div className="blog-list">
                    <ul>
                        <BlogPg
                            topic="WHERE TO START YOUR JOURNEY AS WEB DEVELOPER???"
                            date="27 June, 2020"
                            open={openModal}
                            close={closeModal}
                            isOpen={modalIsOpen}
                        >
                            <h1>WHERE TO START YOUR JOURNEY AS WEB DEVELOPER???</h1>
                            <StaticImage
                                src="../images/blog/cover.png"
                                alt="Blog 1 Cover"
                            />
                            <p> Hey People, How’re you all?</p>

                            <p>This Post is for all those people out there who are starting their <span>web developer</span> journey and are confused about how and where to start.</p>

                            <p>I started my web-development journey few months back and believe me when I say I can relate to you.All these languages and frameworks out there.It can give you a little anxiety but don’t worry you are at the right place now.I was lucky to have great mentors like Tanay Pratap and Varun Mayya.</p>

                            <p>Do You Also Have Such Questions In Your Mind?</p>

                            <ul>
                                <li>Where Do I Start?</li>
                                <li>Which Language To Start With?</li>
                                <li>Will I Be Able To Do It Or Not?</li>
                            </ul>

                            <p> Don’t Worry By The End Of This Post You’ll Be All Figured Out.</p>

                            <p>See Web-development is divided into three categories.To help you get started, You First Have To Ask Yourself Something.</p>

                            <ul>
                                <li>Do I Want To Make Beautiful Websites?</li>
                                <li>Am I Interested In How The Things Actually Works Behind The Scene?Like When I Submit A Form How Does That Reaches Out To Someone?Does This Thing Really Excites Me?</li>
                                <li>Am I Interested In Both?</li>
                            </ul>

                            <p>If your answer to first question is Yes, You’re into something called <span>Front-end development</span> which includes creating the website design.The front part which the users see is what is front-end development in simpler words.</p>
                            <StaticImage
                                src="../images/blog/web-design.jpg"
                                alt="Frontend Development"
                            />
                            <p>If your answer to second question is Yes, You’re into something called <span>Back-end development</span> which looks after the data that is handled behind the scenes like the example i gave above about how the form data is sent from one place to another.</p>
                            <StaticImage
                                src="../images/blog/back-end.jpg"
                                alt="Frontend Development"
                            />

                            <p>If your answer to third question is yes, then you’ll be a <span>full stack developer</span>.In Simple terms a Full Stack Developer is someone who looks after both front-end and back-end part of a website.</p>

                            <p>Now That You Know Which field you will enter let’s help you out with where to start!</p>

                            <p>The Best Way To Start Is Watch Tutorials From Youtube!Code Along With Them!After you have done copying their project just Try to add a new feature in that project you might get errors.Search That error on google.There’s like 99.99% probability the error you’re getting is already faced by someone and it is already solved.That is How You’ll Learn!This is the Best Practice!</p>

                            <p>Now Let’s Talk about the languages to begin with.First And Most Important Thing To Start as a web – Developer is to learn <span>HTML</span> and <span>CSS</span>.Then when you think you have enough basic knowledge about this then learn <span>JavaScript</span> or which also known as <span>Vanilla JS</span>.These three thing is what you have to get a good command on before diving into deep ocean of web development.No Matter If you want to be a front-end or back-end developer you must know these three then you can go for frameworks.And Remember The Most Important Part Of Learning Is Making Projects.Whatever You’ve Learnt Just Apply It To Make Projects.</p>

                            <p>So, This is what You Have to do to start: -</p>

                            <ul>
                                <li>Ask Yourself About Your Field Of Interest</li>
                                <li>Learn HTML</li>
                                <li>Learn CSS</li>
                                <li>Learn JavaScript</li>
                                <li>Make Projects</li>
                            </ul>

                            <p>Hope This Article Helped You Out.</p>
                        </BlogPg>
                        <BlogPg
                            topic="What The Hell Is HTML, CSS And JavaScript???"
                            date="11 July, 2020"
                            open={openModal2}
                            close={closeModal2}
                            isOpen={modalIsOpen2}
                        >
                            <h1>What The Hell Is HTML, CSS And JavaScript???</h1>
                            <img src={blog2Img0} alt="Blog 2 Heading" />
                            <p>Hey People, How’re you all?</p>

                            <p>This post is for those people who read my previous post and are confused about what is&nbsp;<span><em>HTML, CSS and JavaScript</em></span>.</p>

                            <p>So, A lot of you, Probably All Of You Are Here Because you have made up of your mind about starting your journey as a&nbsp;<span><em>Web-Developer</em></span>&nbsp;but you’re struggling to know about what these terms mean? Let’s Begin and clear all your Doubts.</p>

                            <p>First of All, I would like to say that It is okay if you’re just starting and don’t know what exactly does those terms mean. When I started my journey I was just like you very confused about everything but then I realized that it is okay to be confused. Everyone out there is confused but they choose to sort out their confusions and move on to learn new things. That is exactly what you have to do. With that’s said and done Let’s Move On.</p>

                            <p>As I said earlier You Have To Learn HTML, CSS and JavaScript to begin as a Web-Developer. So You might have these questions in your mind</p>

                            <ul>
                                <li>What Are these things?</li>
                                <li>What Do they do?</li>
                                <li>Why Should I learn them?</li>
                            </ul>

                            <p>Don’t Worry By The End Of this post you’ll be all sorted.</p>

                            <p>What Are These Things?</p>

                            <p>In Technical Terms, HTML stands for&nbsp;<span><em>HyperText Markup Language</em></span>. It is the standard markup language for documents to be displayed in a web browser. CSS stands for&nbsp;<span><em>Cascading Style Sheets</em></span>. It is a simple language or mechanism to add styling to your Web Page which was built using HTML. Now JS stands JavaScript which is a programming language used to provide the functionality to a Web Page Like how would a certain element react when clicked and all that stuff.</p>

                            <p>Now All This Stuff Might Look Like A Lot to take in at once. So I’ll explain them rather in a simple way.</p>

                            <p>Let’s Think Of a Website or Webpage as your body and relate it’s components to your body parts.</p>

                            <ul>
                                <li>
                                    <span>HTML</span>&nbsp;is to&nbsp;<span><em>Webpage</em></span>&nbsp;what&nbsp;<span>Bones&nbsp;</span>are to your&nbsp;<span>Body.</span>&nbsp;The Basic Structure.
                                    <img src={blog2Img1} alt="HTML5" />
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <span><em>CSS</em></span> is to <span>WebPage</span> what your <span>outer appearance</span> (Your Body Colour, Your eye Color, The Shape of your face or your nose etc.) is to your <span>Body</span>. It provides the styling, The Designing.
                                    <img src={blog2Img2} alt="CSS3" />
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    Now<span><em> JavaScript</em></span> is a very important feature. It Provides <span>Functionality</span> to a webpage like breathing or digestion is a functionality of the body. JavaScript helps you to create those functions for your webpage.
                                    <img src={blog2Img3} alt="JavaScript" />
                                </li>
                            </ul>

                            <p>By Now You Probably Have The Idea What These Terms Mean. You Can Learn Them For Free On Youtube or websites like&nbsp;<span>freeCodeCamp</span>.</p>

                            <p>If you ever get stuck at some point, Remember There is a huge community out here to help you out. Whatever problem you’re facing is already faced by many people and is already been solved. All Of You Have to do is to reach out to people and Be With Like-Minded People.</p>

                            <ul>
                                <li>The Picture Below Will Summarises the content of this post.</li>
                                <img src={blog2Img4} alt="Web Page Structure" />
                            </ul>

                            <p>Hope This Article Helped You Out.</p>
                        </BlogPg>
                        <BlogPg
                            topic="Vanilla JS And React JS – What, When And Why?"
                            date="16 July, 2020"
                            open={openModal3}
                            close={closeModal3}
                            isOpen={modalIsOpen3}
                        >
                            <h1>Vanilla JS And React JS – What, When And Why?</h1>
                            <p>Hey Peeps, How’re You All?</p>

                            <p>This Post Will Cover The Topic Of What Is the Difference Between Vanilla JS and React JS. When should you use them and why should you use them?</p>

                            <p>Let’s Clear The Basics First :-</p>

                            <ul>
                                <li>What is <span>Vanilla JS</span>?</li>
                                <img src={blog3Img1} alt="Vanilla JS" />
                            </ul>

                            <p>In Simple Words <span><em>Vanilla JS</em></span> is nothing but simple, plain JavaScript without any library or frameworks which you learn when covering up your basics. Technically, <span>Vanilla JS</span>&nbsp;is a fast, lightweight, cross-platform framework for building incredible, powerful <span><em>JavaScript</em></span> applications.</p>

                            <ul>
                                <li>What is <span>React JS</span>?</li>
                                <img src={blog3Img2} alt="React JS" />
                            </ul>

                            <p>In Simple Words<span><em> React JS</em></span> or <span><em>React</em></span> is a framework based on JavaScript to make your work easier and efficient. Technically, <span><em>React</em></span> is an open-source JavaScript library for building user interfaces. It is built and maintained By Facebook.</p>

                            <p>By Now Your doubt between React and Vanilla JS must be clear. So, Let’s Talk About Why you should them?</p>
                            <img src={blog3Img3} alt="Why To Use" />
                            <ul>
                                <li>Why You Should use Vanilla JS?</li>
                            </ul>

                            <p>You Should use Vanilla JS to learn the basics of javaScript, see the power of JavaScript and to have a great start.</p>

                            <ul>
                                <li>Why You Should use React JS?</li>
                            </ul>

                            <p>You Should use React Js to build powerful applications with less code and great efficiency. </p>

                            <p>Now That you know The Question Is When you should use them?</p>

                            <ul>
                                <li>When To use Vanilla JS?</li>
                            </ul>

                            <p>The answer to this is that you’re just a beginner and have not much knowledge then go for Vanilla JS. Make Some Projects From It. Learn The basic concepts. Using this and understanding Vanilla JS is very important. </p>

                            <ul>
                                <li>When To use React JS?</li>
                            </ul>

                            <p>Ask Yourself Do I have enough knowledge of Vanilla JS. Do I Know Basic Concepts of Vanilla JS? Can I make projects on Vanilla JS? Have I Practiced Enough? If The Answer is yes Then Go For It Without Any Doubt! You’re good to go for React and build awesome projects!</p>

                            <p>Hope This Post Clear Your Doubt Between Vanilla JS and React JS.</p>

                            <p>Thank-you For Reading This.</p>
                        </BlogPg>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Blog;