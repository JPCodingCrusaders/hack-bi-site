import Header from "../components/Header";

export default function page_one() {
    return (

        <div className="PageOne">
        <div className="SpaceParent">
        <div className="HeaderContainer">
        <div className="Header-Container1">
            <h1 className="PageOneHeader">What is AI?</h1></div>
        </div>
        <div className="ButtonParent">
        <div className="Button-Container1">
            <a href="page_two">
            <button className="Page-Button1">Next →</button>
            </a>
        </div>
        </div>
        </div>
        <div className="SpaceParent">
        <div className="Card1">
            <div className="Card-Title1"><h1>History</h1></div>
           <p className="PageOneText">To begin the briefing: A short review of Artificial Intelligence. 
            Early research into AI began circa 1950 AD by mathematician Alan Turing. From there it developed rapidly until it became integrated into almost every aspect of everyday life.
            </p>
        </div>
        </div>
       <div className="SpaceParent">
        <div className="Card2">
            <div className="Card-Title2"><h1>How it works</h1></div>
            <p className="PageOneText2">In order to use AI responsibly, it is important to know how it works. To keep it simple: AI is like a very bright student. In developing AI, the AI model, or student, is provided with a large library from which to learn from. The model memorizes the information from the library, and then the teacher gives the model new information and asks the model to compare it to the library. </p>
        </div>
        </div>
        </div>

    )
}