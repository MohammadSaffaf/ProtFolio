import { useIntersection } from "react-use";
import React ,{useRef} from 'react';
import gsap from "gsap";
import './Componen.css';
const Name = () => {
    // #section-name animation__________
    const sectionRef = useRef(null);
    const intersection = useIntersection(sectionRef, {
        root:null,
        threshold:0.4
    })
    const fadeIn2 = element=>{
        gsap.to(element,1,{
            marginLeft:"0",
            transition: "all .1s ease-out "
        })}
    const fadeOut2 = element=>{
        gsap.to(element,1,{
        marginLeft:"-60vh"   
        })}
    intersection && intersection.intersectionRatio < 0.4
    ?fadeOut2(".fadeIn2")
    : fadeIn2(".fadeIn2")
    const fadeInH1 = element=>{
        gsap.to(element,1,{
            marginLeft:"0",
            transition: "all 1ms ease-out"
        })}
    const fadeOutH1 = element=>{
        gsap.to(element,1,{
        marginLeft:"-60vh"   
        })}
    intersection && intersection.intersectionRatio < 0.4
    ?fadeOutH1(".fadeInH1")
    : fadeInH1(".fadeInH1")
    const fadeIn1 = element=>{
        gsap.to(element,1,{
            marginLeft:"15%",
            transition: "all .1s ease-out "
        })}
    const fadeOut1 = element=>{
        gsap.to(element,1,{
        marginLeft:"-60vh"  
        })}
    intersection && intersection.intersectionRatio < 0.4
    ?fadeOut1(".fadeIn1")
    : fadeIn1(".fadeIn1")
    const fadeInH4B = element=>{
        gsap.to(element,1,{
            marginLeft:"0",
            transition: "all 2s ease-out"
        })}
    const fadeOutH4B = element=>{
        gsap.to(element,1,{
        marginLeft:"-60vh"  
        })}
    intersection && intersection.intersectionRatio < 0.4
    ?fadeOutH4B(".fadeInH4B")
    : fadeInH4B(".fadeInH4B")
    const fadeInH4A = element=>{
        gsap.to(element,1,{
            marginLeft:"0",
            
            transition: "all 1.5s ease-out"
        })}
    const fadeOutH4A = element=>{
        gsap.to(element,1,{
        marginLeft:"-60vh"       
        })}
    intersection && intersection.intersectionRatio < 0.4
    ?fadeOutH4A(".fadeInH4A")
    : fadeInH4A(".fadeInH4A")
    // .MAJORSKILLS animation__________
    const sectionRef2 = useRef(null);
    const intersection2 = useIntersection(sectionRef2, {
        root:null,
        threshold:0.4
    })
    const divIn1 = element=>{
        gsap.to(element,1,{
            marginLeft:"0",
            transition: "all 1s ease-out "
        })}
    const divOut1 = element=>{
        gsap.to(element,1,{
            marginLeft:"70vh",
            
        })}
    intersection2 && intersection2.intersectionRatio < 0.4
    ?divOut1(".divIn1")
    : divIn1(".divIn1")
    const divIn2 = element=>{
        gsap.to(element,1,{
            // position: "fixed",
            // right:"-100%",
            // overflowY: "auto",
            // zIndex: "1000"
            marginLeft:"0",
            transition: "all 1s ease-out "
        })}
    const divOut2 = element=>{
        gsap.to(element,1,{
            marginLeft:"70vh",
            // position: "none",
            // right:"30%",
            // overflowY: "auto",
            // zIndex: "none"
        })}
    intersection2 && intersection2.intersectionRatio < 0.4
    ?divOut2(".divIn2")
    : divIn2(".divIn2")
    const divIn3 = element=>{
        gsap.to(element,1,{
            // position: "fixed",
            // right:"-100%",
            // overflowY: "auto",
            // zIndex: "1000"
            marginLeft:"0",
            transition: "all 1s ease-out "
        })}
    const divOut3 = element=>{
        gsap.to(element,1,{
            marginLeft:"70vh",
            // position: "none",
            // right:"30%",
            // overflowY: "auto",
            // zIndex: "none"
        })}
    intersection2 && intersection2.intersectionRatio < 0.4
    ?divOut3(".divIn3")
    : divIn3(".divIn3")
    const divIn4 = element=>{
        gsap.to(element,1,{
            // position: "fixed",
            // right:"-100%",
            // overflowY: "auto",
            // zIndex: "1000"
            marginLeft:"0",
            transition: "all 1s ease-out "
        })}
    const divOut4 = element=>{
        gsap.to(element,1,{
            marginLeft:"70vh",
            // position: "none",
            // right:"30%",
            // overflowY: "auto",
            // zIndex: "none"
        })}
    intersection2 && intersection2.intersectionRatio < 0.4
    ?divOut4(".divIn4")
    : divIn4(".divIn4")
    const divIn5 = element=>{
        gsap.to(element,1,{
            // position: "fixed",
            // right:"-100%",
            // overflowY: "auto",
            // zIndex: "1000"
            marginLeft:"0",
            transition: "all 1s ease-out "
        })}
    const divOut5 = element=>{
        gsap.to(element,1,{
            marginLeft:"70vh",
            // position: "none",
            // right:"30%",
            // overflowY: "auto",
            // zIndex: "none"
        })}
    intersection2 && intersection2.intersectionRatio < 0.4
    ?divOut5(".divIn5")
    : divIn5(".divIn5")
    const divIn6 = element=>{
        gsap.to(element,1,{
            // position: "fixed",
            // right:"-100%",
            // overflowY: "auto",
            // zIndex: "1000"
            marginLeft:"0",
            transition: "all 1s ease-out "
        })}
    const divOut6 = element=>{
        gsap.to(element,1,{
            marginLeft:"70vh",
            // position: "none",
            // right:"30%",
            // overflowY: "auto",
            // zIndex: "none"
        })}
    intersection2 && intersection2.intersectionRatio < 0.4
    ?divOut6(".divIn6")
    : divIn6(".divIn6")
    const divIn7 = element=>{
        gsap.to(element,1,{
            // position: "fixed",
            // right:"-100%",
            // overflowY: "auto",
            // zIndex: "1000"
            marginLeft:"0",
            transition: "all 1s ease-out "
        })}
    const divOut7 = element=>{
        gsap.to(element,1,{
            marginLeft:"70vh",
            // position: "none",
            // right:"30%",
            // overflowY: "auto",
            // zIndex: "none"
        })}
    intersection2 && intersection2.intersectionRatio < 0.4
    ?divOut7(".divIn7")
    : divIn7(".divIn7")

    return ( 
        <article id="secandPage">
        <section id="section-name"  ref={sectionRef}  >
            <h1 className='fadeInH1'>MAJOR SKILLS</h1>
            <p  className="fadeIn2"></p>
            <p  className="fadeIn1" ></p>
            <h4 className='fadeInH4A'>Web/</h4>
            <h4 className='fadeInH4B'>DEV Skills ....</h4>
        </section>
        <section className="MAJORSKILLS" ref={sectionRef2}>
            <div className="divIn1">
            <h4>HTML5 / CSS3 </h4>
            <div className="first-div">
                <div  className="CSS3-div"></div>
            </div>
            </div>
            <div className="divIn2">
            <h4>Javascript</h4>
            <div className="first-div">
                <div  className="Javascript-div"></div>
            </div>
            </div>
            <div className="divIn3">
            <h4>MongoDB </h4>
            <div className="first-div">
                <div  className="MongoDB-div"></div>
            </div>
            </div>
            <div className="divIn4">
            <h4>Node.js/Express.js </h4>
            <div className="first-div">
                <div  className="Express-div"></div>
            </div>
            </div>
            <div className="divIn5">
            <h4>React.js</h4>
            <div className="first-div">
                <div  className="React-div"></div>
            </div>
            </div>
            <div className="divIn6">
            <h4>CMS / Wordpress</h4>
            <div className="first-div">
                <div  className="CMS-div"></div>
            </div>
            </div>
            <div className="divIn7">
            <h4>Git/Github </h4>
            <div className="first-div">
                <div  className="Github-div"></div>
            </div>
            </div>
        </section>
        </article>
     );
}
export default Name;

// import './Componen.css';
// import React from 'react';
// import "animate.css/animate.min.css";
// // import ScrollAnimation from 'react-animate-on-scroll';
// class Name2 extends React.Component {
//    render(
       
//    ) {
     
    
//     return ( 

//         <article id="headPage">
            
//             {/* <section id="section-side">
//                 <h2>Mohammad Saffaf</h2>
//                 <article id="article-side">
//                     <div style={{width: '30%',border:' 2px solid rgb(255, 67, 80)'}}></div>
//                     <div></div>
//                     <div></div>
//                     <div></div>
//                 </article>
//                 <div id="sroll">
//                     <p>SCROLLDOWN ––––––––––</p>
                    
//                 </div>
//             </section> */}
            
//         <section id="section-name" class="animate__animated animate__backOutLeft  " >
        
//             <h1>Mohammad Saffaf </h1>
//             <p className="line1"></p>
//             <p className="line2"></p>
            
//             <h4>Web-Developer /</h4>
//             <h4>IT-Servicetechniker ....</h4>
//         </section>
        
//         </article>
//      );
// }}
 
// export default Name2;