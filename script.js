const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    project.addEventListener('mouseover', () => {
        project.style.backgroundColor = '#888';
    });

    project.addEventListener('mouseout', () => {
        project.style.backgroundColor = '#555'; 
    });
});