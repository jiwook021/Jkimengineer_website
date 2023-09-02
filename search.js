document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('keyup', function(event) {
        autocomplete(event);
    });
});

const filePaths = [
    '/Menu/Audio_Books.html',
    '/Menu/CERTIFICATES.html',
    '/Menu/Computational Mathematics.html',
    '/Menu/Hardware Electronics.html',
    '/Menu/Mathematics.html',
    '/Menu/Personal Projects.html',
    '/Menu/Physics.html',
    '/Menu/Signal and Systems.html',
    '/Menu/Software Engineering.html',
    '/Menu/Hardware Electronics/Analog Electronics.html',
    '/Menu/Hardware Electronics/Applied Electromagnetics.html',
    '/Menu/Hardware Electronics/Circuit Theory.html',
    '/Menu/Hardware Electronics/Computer Architecture.html',
    '/Menu/Hardware Electronics/Computer_Organization.html',
    '/Menu/Hardware Electronics/Digital Design of Signal Processing System.html',
    '/Menu/Hardware Electronics/FPGA.html',
    '/Menu/Hardware Electronics/FPGA_ALU.html',
    '/Menu/Hardware Electronics/FPGA_Function Generator.html',
    '/Menu/Hardware Electronics/FPGA_SPI.html',
    '/Menu/Hardware Electronics/FPGA_UART.html',
    '/Menu/Hardware Electronics/Hamming_Code.html',
    '/Menu/Hardware Electronics/Hardware_Resources.html',
    '/Menu/Hardware Electronics/Power Electronics.html',
    '/Menu/Hardware Electronics/Sensor Physics.html',
    '/Menu/Hardware Electronics/Wireless_Communication.html',
    '/Menu/Hardware Electronics/Analog Electronics/Bipolar Junction Transistors.html',
    '/Menu/Hardware Electronics/Analog Electronics/Differential Amplifiers.html',
    '/Menu/Hardware Electronics/Analog Electronics/Diode Circuit.html',
    '/Menu/Hardware Electronics/Analog Electronics/Negative Feedback.html',
    '/Menu/Hardware Electronics/Analog Electronics/Operational Amplifiers.html',
    '/Menu/Hardware Electronics/Analog Electronics/Power Amplifiers.html',
    '/Menu/Hardware Electronics/Analog Electronics/Transistor Fundamentals.html',
    '/Menu/Hardware Electronics/Digital Circuit Design/Digital Circuit Design.html',
    '/Menu/Hardware Electronics/Embedded Architecture/Embedded Architecture.html',
    '/Menu/Mathematics/Complex Analysis.html',
    '/Menu/Mathematics/Differential Equations.html',
    '/Menu/Mathematics/Discrete Mathematics.html',
    '/Menu/Mathematics/Linear Algebra.html',
    '/Menu/Mathematics/Probability and Statistics.html',
    '/Menu/Mathematics/Single Variable Calculus.html',
    '/Menu/Mathematics/Vector Calculus.html',
    '/Menu/Mathematics/Computational Mathematics/Computer Vision.html',
    '/Menu/Mathematics/Computational Mathematics/Control System.html',
    '/Menu/Mathematics/Computational Mathematics/Data Structure and Algorithm.html',
    '/Menu/Mathematics/Computational Mathematics/Deep Learning.html',
    '/Menu/Mathematics/Computational Mathematics/Digital Communication.html',
    '/Menu/Mathematics/Computational Mathematics/Digital Signal Processing.html',
    '/Menu/Mathematics/Computational Mathematics/Introduction to AI.html',
    '/Menu/Physics/Algebra.html',
    '/Menu/Physics/Trigonometry.html',
    '/Menu/Physics/Vector.html',
    '/Menu/Signal and Systems/Fourier Series Representation of Periodic Signals.html',
    '/Menu/Signal and Systems/Introduction to Signal and Systems.html',
    '/Menu/Signal and Systems/Linear Time-Invariant Systems.html',
    '/Menu/Signal and Systems/The Continuous-Time Fourier Transform.html',
    '/Menu/Signal and Systems/The LEPLACE TRANSFORM.html',
    '/Menu/Software Engineering/C++.html',
    '/Menu/Software Engineering/C.html',
    '/Menu/Software Engineering/Clean_Code.html',
    '/Menu/Software Engineering/Computer Network.html',
    '/Menu/Software Engineering/Embedded Linux.html',
    '/Menu/Software Engineering/Linux Device Driver.html',
    '/Menu/Software Engineering/Linux System Programming.html',
    '/Menu/Software Engineering/Linux_CLI.html',
    '/Menu/Software Engineering/Linux_Kernel.html',
    '/Menu/Software Engineering/Network Socket Programming.html',
    '/Menu/Software Engineering/Operating Systems.html',
    '/Menu/Software Engineering/Python.html',
    '/Menu/Software Engineering/RTOS.html',
    '/Menu/Software Engineering/Software_Resources.html',
    '/Menu/Software Engineering/Software_Setup.html'
];

const folderContents = filePaths.map(filePath => {
    const title = filePath.split('/').pop().replace(".html", "");
    const url = filePath;
    return { title, url };
});

console.log("const folderContents =", JSON.stringify(folderContents, null, 2));

function autocomplete(event) {
    const searchInput = event.target.value.toLowerCase();
    const autocompleteList = document.getElementById("autocompleteList");
    autocompleteList.innerHTML = "";

    folderContents.filter(content => content.title.toLowerCase().includes(searchInput)).slice(0, 10)
        .forEach(content => {
            const resultLink = document.createElement("a");
            resultLink.href = content.url;
            resultLink.textContent = content.title;
            autocompleteList.appendChild(resultLink);
        });
}

function searchFile(file) {
    const searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = "";
    const resultMenu = document.createElement("ul");
    resultMenu.className = "result-menu";
    const resultItem = document.createElement("li");
    const resultLink = document.createElement("a");
    resultLink.href = file.url;
    resultLink.textContent = file.title;
    resultItem.appendChild(resultLink);
    resultMenu.appendChild(resultItem);
    searchResults.appendChild(resultMenu);
}