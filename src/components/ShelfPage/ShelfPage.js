import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, useEffect } from 'react';
import { useState } from 'react';

function ShelfPage() {
  const dispatch = useDispatch()
  const shelfItems = useSelector(store => store.itemReducer)
  console.log('this is shelfItems', shelfItems);

  let [itemToAdd, setItemToAdd] = useState({ description: '', image_url: ''})

console.log('itemToAdd', itemToAdd)

  useEffect(() => {
    dispatch({ type: 'FETCH_ITEMS' })
  }, []);

const handleInputChange = (event) => {
  const {name, value} = event.target;
  setItemToAdd({
    ...itemToAdd,
    [name] : value,
  })
}

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>


      {shelfItems ?
          shelfItems.map((item) => (
              <p key={item.id}>
                <img src={item.image_url} width="300"/>
                {item.description}
              </p>
          ))
        :
        (<p>Loading</p>)
      }

      <p>Add Form</p>
      <input 
      onChange={handleInputChange}
      name="image_url"
      value={itemToAdd.image_url}
      type="text" 
      placeholder="image url"></input>
      <input 
      onChange={handleInputChange}
      name='description'
      value={itemToAdd.description}
      type="text" 
      placeholder="description"></input>
      <button>Add</button>
    </div>
  );
}

export default ShelfPage;
