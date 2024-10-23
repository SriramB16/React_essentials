import ReactLogo from "../assets/react-core-concepts.png";

const headerNames = ["Fundamental", "Crucial", "Core"];

function randomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

 export default function Header() {
    const description = headerNames[randomInt(2)];
    return (
        <header>
            <img src={ReactLogo} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}