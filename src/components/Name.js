import { useIntersection } from "react-use";
import React ,{useRef} from 'react';
import gsap from "gsap";


import './Componen.css';

const Name = () => {
    const sectionRef2 = useRef(null);
    const intersection = useIntersection(sectionRef2, {
        root:null,
        rootMargin:"0px",
        threshold:1
    })
    const namefadeIn2 = element=>{
        gsap.to(element,1,{
            marginLeft:"0",
            transition: "all .1s ease-out "
        })
    }
    const namefadeOut2 = element=>{
        gsap.to(element,1,{
        marginLeft:"-60vh"   
        })
    }
    
    intersection && intersection.intersectionRatio < 1
    ?namefadeOut2(".namefadeIn2")
    : namefadeIn2(".namefadeIn2")

    const namefadeInH1 = element=>{
        gsap.to(element,1,{
            marginLeft:"0",
            transition: "all 1ms ease-out"
        })
    }
    const namefadeOutH1 = element=>{
        gsap.to(element,1,{
        marginLeft:"-60vh"   
        })
    }
    
    intersection && intersection.intersectionRatio < 1
    ?namefadeOutH1(".namefadeInH1")
    : namefadeInH1(".namefadeInH1")

    const namefadeIn1 = element=>{
        gsap.to(element,1,{
            marginLeft:"15%",
            transition: "all .1s ease-out "
            

        })
    }
    const namefadeOut1 = element=>{
        gsap.to(element,1,{
        marginLeft:"-60vh"
            
        })
    }
    
    intersection && intersection.intersectionRatio < 1
    ?namefadeOut1(".namefadeIn1")
    : namefadeIn1(".namefadeIn1")
    const namefadeInH4B = element=>{
        gsap.to(element,1,{
            marginLeft:"0",
            
            transition: "all 2s ease-out  "

        })
    }
    const namefadeOutH4B = element=>{
        gsap.to(element,1,{
        marginLeft:"-60vh"
            
        })
    }
    
    intersection && intersection.intersectionRatio < 1
    ?namefadeOutH4B(".namefadeInH4B")
    : namefadeInH4B(".namefadeInH4B")
    const namefadeInH4A = element=>{
        gsap.to(element,1,{
            marginLeft:"0",
            
            transition: "all 1.5s ease-out"

        })
    }
    const namefadeOutH4A = element=>{
        gsap.to(element,1,{
        marginLeft:"-60vh"
            
        })
    }
    
    intersection && intersection.intersectionRatio < 1
    ?namefadeOutH4A(".namefadeInH4A")
    : namefadeInH4A(".namefadeInH4A")
    
    
    return ( 
        <article id="headPage">
            <section id="section-side">
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
            </section>
        <section id="section-name" ref={sectionRef2} >
            <h1 className='namefadeInH1'>Mohammad Saffaf</h1>
            <p  className="namefadeIn2"></p>
            <p  className="namefadeIn1" ></p>
            
            <h4 className='namefadeInH4A'>Web-Developer /</h4>
            <h4 className='namefadeInH4B'>IT-Servicetechniker ....</h4>
        </section>
        </article>
     );
}
 
export default Name;