help = [
	"<br> List of available commands: <br><br> \
	<span class='commands'>about</span>  <br>&emsp;-- Get to know more about me <br><br> \
	<span class='commands'>projects</span> <br>&emsp;-- Project(s) done <br><br> \
	<span class='commands'>socials</span> <br>&emsp;-- Social Medias <br><br> \
	<span class='commands'>contact</span>  <br>&emsp;-- Email address <br><br>",
];

about = [
	"<br>  Hi there, I am a freshly graduated Computer Science student \
	specializing in Big Data, passionate about \
	using data to drive insights and inform decision-making. <br><br> \
	I am currently seeking job opportunities in the field of Big Data/Data \
	Science, and I am constantly seeking new \
	challenges and opportunities to apply and improve my skills. <br><br> \
	Please feel free to contact me if you have any opportunities or would like \
	to learn more about me. Thank you and have a nice day! 😊 <br><br>",
];

projects = [
	"<br> Final Year Project, School Pickup Application <br> \
	@ <a href='https://github.com/lkas96/Scoob-Site' target='_blank'>Project Repository</a><br>\
	<br> Developed a mobile application for both IOS and Android to allow \
	users to manage their children's school pickups safely and efficiently",
];

contact = ["<br> EMAIL <br>&emsp;-- yixunnlim@gmail.com <br>"];

socials = [
	"<br>  LinkedIn <br>&emsp;-- \
	<a href='https://linkedin.com/in/lim-yi-xun-605587134' target='_blank'> \
	linkedin.com/in/lim-yi-xun</a> <br>\
	<br> Github <br>&emsp;-- \
	<a href='https://github.com/gxvxn' target='_blank'> \
	github.com/gxvxn</a> <br>",
];

const inputField = document.getElementById("input");
const outputDiv = document.getElementById("output");

inputField.addEventListener("keyup", function (event) {
	if (event.key === "Enter") {
		// Get the user input
		const userInput = inputField.value.toLowerCase();

		// Process the user input and generate an output
		const output = processCommand(userInput);

		// Create a new input line with the label and input side by side
		const inputLine = document.createElement("div");
		inputLine.innerHTML = `<br><div id="user-label">
			user@website:~$ ${userInput}</div>`;
		outputDiv.appendChild(inputLine);

		// Display the output with a one-line gap below the previous input
		outputDiv.innerHTML += `${output}<br>`;

		// Clear the input field
		inputField.value = "";

		// Automatically scroll the page down to show the new content
		window.scrollTo(0, document.body.scrollHeight);
	}
});

function processCommand(command) {
	// Define your command processing logic here
	if (command === "help") {
		return help;
	} else if (command === "about") {
		return about;
	} else if (command === "projects") {
		return projects;
	} else if (command === "socials") {
		return socials;
	} else if (command === "contact") {
		return contact;
	} else if (command === "clear") {
		// Clear the terminal output
		document.getElementById("output").innerHTML = "Welcome to My Terminal\
			<br><br>";
		return "";
	} else {
		return "Command not found. Type 'help' for a list of available \
			commands.";
	}
}
