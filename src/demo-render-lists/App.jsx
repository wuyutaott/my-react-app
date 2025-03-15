import List from "./List";

function App() {
    const fruits = [
        {id: 1, name:'apple', calories:95},
        {id: 2, name:'cherry', calories:90},
        {id: 3, name:'date', calories:282},
        {id: 4, name:'elderberry', calories:73},
        {id: 5, name:'banana', calories:105}, 
    ];

    const vegetables = [        
        {id: 6, name:'artichoke', calories:60},
        {id: 7, name:'broccoli', calories:55},
        {id: 8, name:'carrot', calories:41},
        {id: 9, name:'daikon', calories:18},
        {id: 10, name:'endive', calories:17},
    ];

    // sort by alphabetical order
    // fruits.sort((a, b) => a.name.localeCompare(b.name));

    // sort by reverse alphabetical order
    // fruits.sort((a, b) => b.name.localeCompare(a.name));

    // sort by calories
    // fruits.sort((a, b) => a.calories - b.calories);

    // filter by calories
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    return (
        <>
        {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
        {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
        </>
    );
}

export default App;