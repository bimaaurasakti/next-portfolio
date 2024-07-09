import MinimalistHero from "@/components/Home/MinimalistHero";
import ProjectList from "@/components/Home/ProjectList";
import NavigationBar from "@/components/Home/NavigationBar";
import { BackgroundBeams } from '../components/Home/BackgroundBeam';

export default function Home() {
  return (
    <main>
      <div className='relative'>
        <NavigationBar />
        <MinimalistHero />
        <BackgroundBeams />
      </div>
      <ProjectList />
    </main>
  );
}
