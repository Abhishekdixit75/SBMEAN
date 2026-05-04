const API_URL = '/api/students';

// Fetch all students and populate the table
async function fetchStudents() {
    try {
        const response = await fetch(API_URL);
        const students = await response.json();
        const tableBody = document.getElementById('studentTableBody');
        tableBody.innerHTML = '';

        students.forEach(student => {
            const row = `<tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.course}</td>
                <td><button onclick="deleteStudent(${student.id})">Delete</button></td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        console.error('Error fetching students:', error);
        alert('Failed to fetch students. Is the backend running?');
    }
}

// Add a new student
async function addStudent() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;

    if (!name || !email || !course) {
        alert('Please fill in all fields');
        return;
    }

    const studentData = { name, email, course };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(studentData)
        });

        if (response.ok) {
            alert('Student registered successfully!');
            // Clear inputs
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('course').value = '';
            // Refresh list
            fetchStudents();
        } else {
            alert('Error registering student');
        }
    } catch (error) {
        console.error('Error adding student:', error);
    }
}

// Delete a student
async function deleteStudent(id) {
    if (!confirm('Are you sure you want to delete this student?')) return;

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert('Student deleted successfully!');
            fetchStudents();
        } else {
            alert('Error deleting student');
        }
    } catch (error) {
        console.error('Error deleting student:', error);
    }
}

// Load list on startup
fetchStudents();
