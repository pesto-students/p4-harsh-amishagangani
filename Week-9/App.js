
import './App.css';
import { useState } from "react";
import List from './List';

function App() {
  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, updateItemList] = useState([]);

  const addItemToList = () => {
    updateItemList([...itemList, { item: currentItem, key: Date.now() }])
    console.log("list items", itemList);
    setCurrentItem("");
  }

  const onChangeHandler = (e) => {
    console.log("current value", e.target.value);
    setCurrentItem(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="header"><p>TODO's</p></div>
          <div className="Input-wrapper">
            <input value={currentItem}
              onChange={onChangeHandler} />
            <button onClick={addItemToList}>+</button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList} />
        </div>
      </header>
    </div>
  );
}

export default App;
