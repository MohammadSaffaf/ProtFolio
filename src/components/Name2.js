import { useIntersection } from "react-use";
import React ,{useRef} from 'react';
import gsap from "gsap";


import './Componen.css';

const Name = () => {
    const sectionRef = useRef(null);
    const intersection = useIntersection(sectionRef, {
        root:null,
        rootMargin:"0px",
        threshold:0.4
    })
    const fadeIn2 = element=>{
        gsap.to(element,1,{
            marginLeft:"0",
            transition: "all 1s ease-out "
        })
    }
    const fadeOut2 = element=>{
        gsap.to(element,1,{
        marginLeft:"-60vh"   
        })
    }
    
    intersection && intersection.intersectionRatio < 0.4
    ?fadeOut2(".fadeIn2")
    : fadeIn2(".fadeIn2")

    const fadeInH1 = element=>{
        gsap.to(element,1,{
            marginLeft:"0",
            transition: "all 1ms ease-out"
        })
    }
    const fadeOutH1 = element=>{
        gsap.to(element,1,{
        marginLeft:"-60vh"   
        })
    }
    
    intersection && intersection.intersectionRatio < 0.4
    ?fadeOutH1(".fadeInH1")
    : fadeInH1(".fadeInH1")

    const fadeIn1 = element=>{
        gsap.to(element,1,{
            marginLeft:"15%",
            transition: "all .1s ease-out "
            

        })
    }
    const fadeOut1 = element=>{
        gsap.to(element,1,{
        marginLeft:"-60vh"
            
        })
    }
    
    intersection && intersection.intersectionRatio < 0.4
    ?fadeOut1(".fadeIn1")
    : fadeIn1(".fadeIn1")
    const fadeInH4B = element=>{
        gsap.to(element,1,{
            marginLeft:"0",
            
            transition: "all 2s ease-out  "

        })
    }
    const fadeOutH4B = element=>{
        gsap.to(element,1,{
        marginLeft:"-60vh"
            
        })
    }
    
    intersection && intersection.intersectionRatio < 0.4
    ?fadeOutH4B(".fadeInH4B")
    : fadeInH4B(".fadeInH4B")
    const fadeInH4A = element=>{
        gsap.to(element,1,{
            marginLeft:"0",
            
            transition: "all 1.5s ease-out"

        })
    }
    const fadeOutH4A = element=>{
        gsap.to(element,1,{
        marginLeft:"-60vh"
            
        })
    }
    
    intersection && intersection.intersectionRatio < 0.4
    ?fadeOutH4A(".fadeInH4A")
    : fadeInH4A(".fadeInH4A")
    
    
    return ( 
        <article id="headPage">
            {/* <section id="section-side">
                <h2>Mohammad Saffaf</h2>
                <article id="article-side">
                    <div style={{width: '35%',border:' 2px solid rgb(255, 67, 80)'}}></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </article>
                <div id="sroll">
                    <p>SCROLLDOWN ––––––––––</p>
                    
                </div>
            </section> */}
        <section id="section-name" ref={sectionRef} >
            <h1 className='fadeInH1'>Mohammad Saffaf</h1>
            <p  className="fadeIn2"></p>
            <p  className="fadeIn1" ></p>
            
            <h4 className='fadeInH4A'>Web-Developer /</h4>
            <h4 className='fadeInH4B'>IT-Servicetechniker ....</h4>
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