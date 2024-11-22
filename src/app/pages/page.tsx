import Intro from "@/components/intro";
import About from "@/components/About";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
export default function Main(){
    return(
      <>
      <div className="lg:mx-32 md:mx-4">
     <Intro />
     <About />
     <Projects />
     <Footer />

     </div>
      </>
    )
}
