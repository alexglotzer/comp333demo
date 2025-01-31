import { useState } from "react";
// Yoo this is my first ever open source contribution. Thanks for the oppoturnity.

export default function HomeworkPortal() {
  const [studentName, setStudentName] = useState("");
  const [assignment, setAssignment] = useState("");
  const [file, setFile] = useState(null);

  const assignments = [
    "Assignment 1: Intro to Algorithms",
    "Assignment 2: Data Structures",
    "Assignment 3: Web Development Basics",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Homework submitted by ${studentName} for ${assignment}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">COMP 333 Homework Portal</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <label className="block mb-2">
          Student Name:
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </label>
        <label className="block mb-2">
          Select Assignment:
          <select
            className="w-full p-2 border rounded"
            value={assignment}
            onChange={(e) => setAssignment(e.target.value)}
            required
          >
            <option value="" disabled>Select an assignment</option>
            {assignments.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="block mb-4">
          Upload File:
          <input
            type="file"
            className="w-full p-2 border rounded"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Homework
        </button>
      </form>
    </div>
  );
}
