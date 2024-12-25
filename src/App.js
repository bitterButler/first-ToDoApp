import ListPage from './components/ListPage/ListPage';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';

function App() {
  //start with a defaut example/state, so that user can add something himself later dynamically.
  const defaultListItems = [
    { id: 1, title: 'Buy groceries', description: 'Milk, Eggs, Bread, Fruit' },
    { id: 2, title: 'Workout', description: 'Go to the gym at 6 PM' },
    { id: 3, title: 'Read a book', description: 'Finish reading "Atomic Habits"' },
  ];

  //console.log(ListItems)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newItemsList, setNewItemsList] = useState([]);


  const handleItemAdd = ({ title, description }) => {
    const AllItems = defaultListItems.concat(newItemsList); //merge 2arr, get a return new arr. to get last id.
    const maxId = Math.max(...AllItems.map((item) => item.id)) || 0; //spread ... - can find max in an array via Math.max, but need map() to get only ids.
    //console.log(maxId);
    const newItem = { id: maxId + 1, title, description };
    setNewItemsList(newItemsList => newItemsList.concat(newItem));
    setIsModalOpen(false);
    setNewTitle('');
    setNewDescription('');
  }
  //console.log(newItemsList)

  return (
    <div >
      <Navbar handleItemAdd={handleItemAdd} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
      <ListPage defaultListItems={defaultListItems} newItemsList={newItemsList} />

      {isModalOpen && (
        <div className='modal show d-block' tabIndex="-1">
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h2 className='modal-title'>Add New Task</h2>
                <button type='button' className='btn-close' onClick={() => { setIsModalOpen(false); setNewTitle(''); setNewDescription(''); }}></button>
              </div>

              <form onSubmit={(e) => {
                e.preventDefault();
                handleItemAdd({ title: newTitle, description: newDescription });
              }}>
                <div className='modal-body'>
                  <div className='mb-3'>
                    <label>Title: </label>
                    <input type="text" className='form-control' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
                    <label>Description: </label>
                    <input type="text" className='form-control' value={newDescription} onChange={(e) => setNewDescription(e.target.value)} required />
                  </div>
                </div>
                <div className='modal-footer'>
                  <button type='submit' className='btn btn-primary'>Add now</button>
                  {/*<button type='button' className='btn btn-secondary' onClick={() => { setIsModalOpen(false); setNewTitle(''); setNewDescription(''); }}>Cancel</button>*/}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {/*if modal pops up, background gets darker shadow. */}
      {isModalOpen && (
        <div className="modal-backdrop show"></div>
      )}
    </div>
  );
}

export default App;
