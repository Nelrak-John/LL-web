import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Digital Renaissance',
      description: '르네상스 시대의 예술을 디지털 기술로 재해석한 인터랙티브 전시 프로젝트',
    },
    {
      id: 2,
      title: 'Sonic Landscapes',
      description: '소리와 시각이 결합된 몰입형 오디오-비주얼 경험',
    },
    {
      id: 3,
      title: 'Neural Artistry',
      description: 'AI와 인간 창작의 협업을 탐구하는 실험적 프로젝트',
    },
  ];

  return (
    <section className="projects">
      <h1 className="projects-title font-slogan">Projects</h1>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <h2 className="project-title font-body">{project.title}</h2>
            <p className="project-description font-body">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
