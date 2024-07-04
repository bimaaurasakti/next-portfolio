import CardProject from "./CardProject";

export default function CardProjectList() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6'>
      <ul className="space-y-4">
        <li>
          <CardProject img="/projects/project_texio/project-2.png" />
        </li>
        <li>
          <CardProject img="/projects/project_texio/project-1.png" />
        </li>
        <li>
          <CardProject img="/projects/project_texio/project-1.png" />
        </li>
      </ul>

      <ul className="space-y-4">
        <li>
          <CardProject img="/projects/project_texio/project-1.png" />
        </li>
        <li>
          <CardProject img="/projects/project_texio/project-2.png" />
        </li>
        <li>
          <CardProject img="/projects/project_texio/project-2.png" />
        </li>
      </ul>

      <ul className="space-y-4" >
        <li>
          <CardProject img="/projects/project_texio/project-2.png" />
        </li>
        <li>
          <CardProject img="/projects/project_texio/project-2.png" />
        </li>
        <li>
          <CardProject img="/projects/project_texio/project-2.png" />
        </li>
      </ul>
    </div>
  )
}
