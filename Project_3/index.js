const calculateFromEl = document.getElementById("calculateForm");
const resultEl = document.getElementById("result");

const calculateMarks = (event) => {
    const maxMarks = 400;
    event.preventDefault();
    
    const formData = new FormData(calculateFromEl);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = +value;
    });

    const totalMarks = data.math + data.english + data.chemistry + data.physics;
    const percentage = Math.floor((totalMarks / maxMarks) *100).toFixed(2);
    resultEl.innerText = `You have got ${totalMarks} out of ${maxMarks} and your percentage is ${percentage}%`;
}; 