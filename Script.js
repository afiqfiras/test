document.getElementById('projectForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const matric = document.getElementById('matric').value;
    const email = document.getElementById('email').value;
    const program = document.querySelector('input[name="program"]:checked').value;
    const courseCode = document.getElementById('courseCode').value;
    const projectTitle = document.getElementById('projectTitle').value;
    const introduction = document.getElementById('introduction').value;
    const problemStatement = document.getElementById('problemStatement').value;
    const objectives = document.getElementById('objectives').value;

    // Simpan dalam Local Storage (untuk testing tanpa database)
    const projectData = {
        name, matric, email, program, courseCode, projectTitle, introduction, problemStatement, objectives
    };

    localStorage.setItem('project', JSON.stringify(projectData));

    alert("Project Registered Successfully!");

    // Boleh ganti dengan hantar data ke database
});
