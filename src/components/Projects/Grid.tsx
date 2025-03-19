import Project from "./Project";

export default function ProjectsGrid() {
  return (
    <div className="w-full inline-flex flex-nowrap gap-4 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none infinite-scroll gap-4">
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <Project id={index} key={index} />
          )
        })}
      </div>
      <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none infinite-scroll gap-4" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <Project id={index + 6} key={index} />
          )
        })}
      </div>
    </div>
  );
}