import React, { useState } from 'react';

const HomePage = () => {
  // Sample data for projects with images
  const topRatedProjects = [
    { id: 1, title: 'Project A', rating: 4.8, image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Project B', rating: 4.7, image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Project C', rating: 4.6, image: 'https://via.placeholder.com/150' },
  ];

  const latestProjects = [
    { id: 4, title: 'Project D', image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Project E', image: 'https://via.placeholder.com/150' },
  ];

  const featuredProjects = [
    { id: 6, title: 'Project F', image: 'https://via.placeholder.com/150' },
    { id: 7, title: 'Project G', image: 'https://via.placeholder.com/150' },
  ];

  const categories = ['Health', 'Education', 'Technology', 'Environment'];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = [...topRatedProjects, ...latestProjects, ...featuredProjects].filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <nav>
        <h1>Crowd-Funding Platform</h1>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Categories</li>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
        <input
          type="text"
          placeholder="Search projects"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </nav>

      <h2>Top Rated Projects</h2>
      <div className="slider">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>Rating: {project.rating}</p>
          </div>
        ))}
      </div>

      <h2>Latest Projects</h2>
      <div>
        {latestProjects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      <h2>Featured Projects</h2>
      <div>
        {featuredProjects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;