import React, { useEffect } from "react";
// import Typed from 'typed.js';

const Terminal = () => {
    const asciiArt = "__   ____       _                 _       ____            _    __       _ _           __ __\n/ /  |  _ \u005C ___ | |__   __ _ _ __ ( )___  |  _ \u005C ___  _ __| |_ / _| ___ | (_) ___     / / \u005C \u005C\n/ /   | |_) / _ \u005C| '_ \u005C / _` | '_ \u005C|// __| | |_) / _ \u005C| '__| __| |_ / _ \u005C| | |/ _ \u005C   / /   \u005C \u005C\n\u005C \u005C   |  _ < (_) | | | | (_| | | | | \u005C__ \u005C |  __/ (_) | |  | |_|  _| (_) | | | (_) | / /    / /\n\u005C_\u005C  |_| \u005C_\u005C___/|_| |_|\u005C__,_|_| |_| |___/ |_|   \u005C___/|_|   \u005C__|_|  \u005C___/|_|_|\u005C___/ /_/    /_/";
    useEffect(() => {

        let input = document.getElementById("input");
        let output = document.getElementById("output");
        let typed = document.getElementById('typed');
        let terminalSubDiv2 = document.getElementById('Terminal-sub-div2');
        let terminalDiv = document.getElementById('Terminal-div');
        terminalSubDiv2.style.scrollBehavior = "smooth";
        //  ____       _                 _       ____            _    __       _ _       
        // |  _ \ ___ | |__   __ _ _ __ ( )___  |  _ \ ___  _ __| |_ / _| ___ | (_) ___  
        // | |_) / _ \| '_ \ / _` | '_ \|// __| | |_) / _ \| '__| __| |_ / _ \| | |/ _ \ 
        // |  _ < (_) | | | | (_| | | | | \__ \ |  __/ (_) | |  | |_|  _| (_) | | | (_) |
        // |_| \_\___/|_| |_|\__,_|_| |_| |___/ |_|   \___/|_|   \__|_|  \___/|_|_|\___/ 





        // const typed = new Typed('#typed', {
        //     // strings: ["Rohan's Portfolio" + `&#92;~`],
        //     strings: ["Rohan's Portfolio" + `&#92;~`],
        //     typeSpeed: 150, // typing speed
        //     loop: false, // loop the animation
        //     cursorChar: '', // cursor character
        // });
          

        document.addEventListener('click', function(event) {
            if (!terminalDiv.contains(event.target)) {
                input.blur();
                terminalDiv.style.boxShadow = "0px 0px 5px 0px #094acd";
            }
          });
          

        input.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                event.preventDefault();
            }
            if (event.key === 'Enter') {
                event.preventDefault();
                
                const command = input.value.trim();
                const response = processCommand(command);
                if (command && command !== "clear") {
                    // Create a new div element for the command entered
                    const commandOutput = document.createElement('span');
                    commandOutput.classList.add('command-line');
                    commandOutput.innerHTML = `\u003C<span style="color: #094acd; font-size: ${window.innerWidth > 900 ? '1.5vw' : '4vw'}">R</span>ohan's <span style="color: #094acd; font-size: ${window.innerWidth > 900 ? '1.5vw' : '4vw'}">P</span>ortfolio\u002F\u003E\u0020<span style="color: #094acd; font-size: ${window.innerWidth > 900 ? '1.5vw' : '4vw'}">~</span>`;
                    commandOutput.innerHTML += input.value;
                    output.appendChild(commandOutput); // Append command to output
                    output.removeChild(typed);
                }
                input.value = '';
                // focusUserInput(); // Keep focus on input field after enter
                if (response && response !== "") {
                    // Create a new div element for the response
                    const responseOutput = document.createElement('span');
                    responseOutput.classList.add('response-line');
                    output.appendChild(responseOutput); // Append response to output
                    animateTypeOut(responseOutput, response); // Trigger typing animation for response
                    terminalSubDiv2.scrollTop = terminalSubDiv2.scrollHeight;
                    // document.querySelector('.response-line').appendChild(span);
                }
            }
            
        });
        function appendtyped() {
            output.appendChild(typed);
            input.style.width = `${minWidth}px`;
            terminalSubDiv2.scrollTop = terminalSubDiv2.scrollHeight;
            input.focus();
            terminalDiv.style.boxShadow = "0px 0px 15px 0px #094acd";
        }

        function clearTerminal() {
            // terminalSubDiv2.scrollTop = 0; // Scroll to the top after clearing 
            output.textContent = ''; // Clear the output content
            appendtyped();
        }
        function animateTypeOut(element, text) {

            element.innerHTML = ''; // Clear existing text
            let i = 0;

            function type() {
                if (i < text.length) {
                    let currentChar = text.charAt(i);
                    if (currentChar === '<') {
                        const endTagIndex = text.indexOf('>', i);
                        if (endTagIndex !== -1) {
                            element.innerHTML += text.substring(i, endTagIndex + 1);
                            i = endTagIndex + 1;
                        }
                    } else {
                        element.innerHTML += currentChar;
                        i++;
                    }
                    setTimeout(type, 50); // Adjust typing speed here

                }
                else {
                    appendtyped();
                }
            }

            type();
        }
        function processCommand(command) {
            const cmd = command.toLowerCase();

            // Handle different commands
            switch (cmd) {
                case 'whoami':
                    return "Hey there! I am Rohan Giri :><br/>";
                case 'about':
                    return "This is a Functional Terminal<br/>";
                case 'help':
                    return "Commands: whoami, help, about, contact, clear, echo, problem<br/>";
                case 'contact':
                    return "You can reach me via email at 'rohangiri1884@gmail.com'.<br/>";
                case 'problem':
                    return "If you cannot see the inupt field, thats fine keep on writting.<br/>";
                case 'clear': {
                    clearTerminal();
                    return '';
                } // Return empty string after clearing terminal
                case '':
                    return ''; // Handle empty input gracefully
                default:
                    if (cmd.startsWith('echo ')) {
                        const text = cmd.substring(5);
                        if (text.startsWith('"') && text.endsWith('"')) {
                          return text.substring(1, text.length - 1);
                        } else if (text.startsWith("'") && text.endsWith("'")) {
                          return text.substring(1, text.length - 1);
                        } else {
                          return "Error: Text must be enclosed in double quotes or single quotes";
                        }
                      }
                      
                    return `Command not found: ${command}<br/>Type Help to know available commands`;
            }
        }

        let minWidth = 1; // Minimum width
        input.style.width = `${minWidth}px`; // Set initial width

        input.addEventListener('input', () => {
            if (input.value.length === 0) {
                input.style.width = `${minWidth}px`; // Reset width to initial
            } else {
                let textWidth = input.clientWidth;
                let charWidth = 10; // assuming a fixed width of 10px per character
                let newWidth = Math.max(textWidth - charWidth, minWidth);
                input.style.width = `${newWidth}px`;
            }
        });

        input.addEventListener('input', () => {
            let textWidth = input.scrollWidth;
            let newWidth = Math.max(textWidth, minWidth);
            input.style.width = `${newWidth}px`;
        });

        terminalSubDiv2.addEventListener('click', () => {
            input.focus(); // Focus the input field
            terminalDiv.style.boxShadow = "0px 0px 15px 0px #094acd";
            //   // or
            //   input.click(); // Click the input field
            //   // or
            //   input.select(); // Select the input field
        });

    }, []);

    return (
        <div id="Terminal-sec">
            <p id="Terminal-banner">
                <i className="fa fa-terminal" style={{ margin: '0.3vh 0.6vh', padding: '0.2vh', color: '#074fe1', fontSize: '90%' }}></i>
            </p>
            <div id="Terminal">
                <div id="Terminal-div">
                    <div id="Terminal-sub-div1">
                        <p id="Terminal-sub-div-logo">
                            <i className="fa fa-terminal" style={{ color: "rgba(255, 255, 255, 0.697)" }}></i>
                        </p>
                        <p id="Terminal-sub-div-heading">
                            &#60; <span style={{ color: "#094acd" }}>S</span>hell /&#62;
                        </p>
                    </div>
                    <div id="Terminal-sub-div2">
                        <div id="Terminal-sub-sub-div2_1">
                            <pre>{asciiArt}</pre>
                            <p>Type <span style={{ color: "#094acd", fontSize: window.innerWidth > 900 ? "1.5vw" : "3.5vw" }}>Help</span> to view available commands</p>
                        </div>
                        <div id="Terminal-sub-sub-div2_2">
                            <span id="output">
                                <span id="typed">
                                    &#60;<span style={{color: '#094acd', fontSize: window.innerWidth > 900 ? '1.5vw' : '4vw'}}>R</span>ohan's&nbsp;<span style={{color: '#094acd', fontSize: window.innerWidth > 900 ? '1.5vw' : '4vw'}}>P</span>ortfolio/&#62;<span style={{color: '#094acd', fontSize: window.innerWidth > 900 ? '1.5vw' : '4vw'}}>&nbsp;~</span>
                                    <input className="i/o" type="text" id="input" maxLength={window.innerWidth > 900 ? 50 : 20} autoComplete="off" spellCheck="false"/>
                                    <span id="cursor"></span>
                                </span>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Terminal;