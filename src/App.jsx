// import componentImg from "./assets/components.png";
import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

export const user = {
  email: "",
  password: "",
  loggedIn: false,
};

function App() {
  // const [selectedTopic, setSelectedTopic] = useState("Pleace click a button");
  // const [selectedTopic, setSelectedTopic] = useState("components");
  const [selectedTopic, setSelectedTopic] = useState();
  const [showWarning, setShowWarning] = useState(false);
  const handleDeleteClick = () => {
    setShowWarning(true);
  };
  const handleProceedClick = () => {
    setShowWarning(false);
  };
  const handleDismissClick = () => {
    setShowWarning(false);
  };

  const [price, setPrice] = useState("$100");
  const handleApplyDiscount = () => {
    // Update the price to $75
    setPrice("$75");
  };
  const handleLogin = () => {
    // Update the user object with dummy data
    user.email = "dummy@example.com";
    user.password = "dummyPassword";
    user.loggedIn = true;

    // Log the updated user object (for testing purposes)
    console.log("Updated user:", user);
  };
  let tabContent = "Please click a button";
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    // console.log(selectedButton);
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
    // tabContent = selectedButton;
    // console.log(tabContent);
  }
  console.log("App Component Exec");

  let tab_Content = <p> Pleace select a topic.</p>;

  if (selectedTopic) {
    tab_Content = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
          <ul>
            <CoreConcept
              // title="Components"
              // description="The core UI building block."
              // image={componentImg}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            ></CoreConcept>
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            ></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {/* {selectedTopic} */}
          {/* {!selectedTopic ? (
            <p>Pleace select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </div>
          )} */}
          {/* {!selectedTopic && <p>Pleace select a topic.</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </div>
          )} */}
          {tab_Content}
        </section>
        <section>
          <div id="app">
            <h1>User Login</h1>
            <p>
              <label>Email</label>
              <input type="email" />
            </p>

            <p>
              <label>Password</label>
              <input type="password" />
            </p>

            <p id="actions">
              {/* Attach the handleLogin function to the onClick event of the button */}
              <button onClick={handleLogin}>Login</button>
            </p>
          </div>
        </section>
        {/* <h2>Time to get started!</h2> */}
        <section>
          <div>
            {/* Display the price from the state */}
            <p data-testid="price">{price}</p>
            {/* Attach the handleApplyDiscount function to the onClick event of the button */}
            <button onClick={handleApplyDiscount}>Apply Discount</button>
          </div>
        </section>
        <section>
          <div>
            {showWarning && (
              <div data-testid="alert" id="alert">
                <h2>Are you sure?</h2>
                <p>These changes can't be reverted!</p>
                <button onClick={handleProceedClick}>Proceed</button>
                <button onClick={handleDismissClick}>Dismiss</button>
              </div>
            )}

            <button onClick={handleDeleteClick}>Delete</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
