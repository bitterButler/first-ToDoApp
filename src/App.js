import ListPage from './components/ListPage/ListPage';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';

function App() {

  //start with a defaut example/state, so that user can add something himself later dynamically.
  const [listItems, setListItems] = useState([
    { id: 1, title: 'Buy groceries', description: 'Milk, Eggs, Bread, Fruit' },
    { id: 2, title: 'Workout', description: 'Go to the gym at 6 PM' },
    { id: 3, title: 'Read a book', description: 'Finish reading "Atomic Habits"' },
  ]);
  //console.log(ListItems)

  const handleItemAdd = ({ title, description }) => {
    const newId = Date.now;
    const newItem = { id: newId, title, description };
    setListItems(listItems => listItems.concat(newItem));
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');



  return (
    <div >
      <Navbar handleItemAdd={handleItemAdd} />
      <ListPage listItems={listItems} />

      {isModalOpen && (
        <div>
          <div>
            <h2>Add New Task</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleItemAdd();
            }}>
              <div>
                <label>Title: </label>
                <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
                <label>Description: </label>
                <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} required />
              </div>
              <div>
                <button type='submit'>Add now</button>
                <button type='button' onClick={() => setIsModalOpen(false)}>Cancel</button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
