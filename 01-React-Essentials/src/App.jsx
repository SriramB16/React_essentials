import { useState } from 'react';
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx"
import { CoreConcepts } from "./components/CoreConcepts";
import TabButtons from "./components/TabButtons";
import { EXAMPLES } from "./data.js";

function App() {
    const [selectedValue, setSelectedValue] = useState('');

    function handleClick(value) {
        setSelectedValue(value);
        console.log(selectedValue)
    }

    

    // alternative way to show content 3
    // let tabContent = <p>Please select a topic</p>;
    //
    // if(selectedValue) {
    //     tabContent = <section id="tab-content">
    //         <h3>{EXAMPLES[selectedValue].title}</h3>
    //         <p>{EXAMPLES[selectedValue].description}</p>
    //         <pre>
    //                         <code>
    //                             {EXAMPLES[selectedValue].code}
    //                         </code>
    //                     </pre>
    //     </section>
    // }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>CORE CONCEPTS</h2>
                    <ul>
                        {CORE_CONCEPTS.map(items => <CoreConcepts key={items.title} {...items}/> )}
                        {/*   long way*/}

                        {/*<CoreConcepts*/}
                        {/*    title={CORE_CONCEPTS[0].title}*/}
                        {/*    description={CORE_CONCEPTS[0].description}*/}
                        {/*    image={CORE_CONCEPTS[0].image}/>*/}

                        {/*/!*    short way*!/*/}

                        {/*<CoreConcepts {...CORE_CONCEPTS[1]}/>*/}
                        {/*<CoreConcepts {...CORE_CONCEPTS[2]} />*/}
                        {/*<CoreConcepts {...CORE_CONCEPTS[3]}/>*/}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Components</h2>
                    <menu>
                        <TabButtons isSelected={selectedValue === 'components'} onSelect={() => handleClick('components')}>Components</TabButtons>
                        <TabButtons isSelected={selectedValue === 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButtons>
                        <TabButtons isSelected={selectedValue === 'props'} onSelect={() => handleClick('props')}>Props</TabButtons>
                        <TabButtons isSelected={selectedValue === 'state'} onSelect={() => handleClick('state')}>State</TabButtons>
                    </menu>
                    {!selectedValue ? <p>Please select a topic</p> : <section id="tab-content">
                        <h3>{EXAMPLES[selectedValue].title}</h3>
                        <p>{EXAMPLES[selectedValue].description}</p>
                        <pre>
                            <code>
                                {EXAMPLES[selectedValue].code}
                            </code>
                        </pre>
                    </section>}


                    {/*alternate way 2*/}

                    {/*{!selectedValue &&  <p>Please select a topic</p>}*/}
                    {/*{selectedValue &&*/}
                    {/*    <section id="tab-content">*/}
                    {/*        <h3>{EXAMPLES[selectedValue].title}</h3>*/}
                    {/*        <p>{EXAMPLES[selectedValue].description}</p>*/}
                    {/*        <pre>*/}
                    {/*        <code>*/}
                    {/*            {EXAMPLES[selectedValue].code}*/}
                    {/*        </code>*/}
                    {/*    </pre>*/}
                    {/*    </section>}*/}


                    {/*alternate way 3*/}

                    {/*{tabContent}*/}
                </section>
            </main>
        </div>

    );
}

export default App;

