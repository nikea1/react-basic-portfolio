import stockImg from '../../Images/pexels-pixabay-270348.jpg'

function ProjectLink({image,link,projectName}){
    return(
        <div>
            <a href={link} className='anchor-container'>
                <img src={image}  alt="project code" className='project-img'/>
                <div className='project-title'>{projectName}</div>
            </a>
        </div>
    )
}

export function Projects(){

    return(
        <section>
            <h1 className='page-title'>Portfolio</h1>
            <hr />
            <div className='project-container'>
                <ProjectLink link="/#" image={stockImg} projectName="Project 1" />
                <ProjectLink link="/#" image={stockImg} projectName="Project 2" />
                <ProjectLink link="/#" image={stockImg} projectName="Project 3" />
                <ProjectLink link="/#" image={stockImg} projectName="Project 4" />
                <ProjectLink link="/#" image={stockImg} projectName="Project 5" />

            </div>
        </section>
    )
}