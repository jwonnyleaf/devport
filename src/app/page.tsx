import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';

export default function Landing() {
  return (
    <div className="w-full flex flex-col py-24">
      <section className="mb-32">
        <Experience />
      </section>
      <section className="mb-32">
        <Projects />
      </section>
    </div>
  );
}
