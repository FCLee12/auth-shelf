import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, useEffect } from 'react';

function ShelfPage() {
  const dispatch = useDispatch()
  const shelfItems = useSelector(store => store.itemReducer)
  console.log('this is shelfItems', shelfItems);

  useEffect(() => {
    dispatch({ type: 'FETCH_ITEMS' })
  }, []);


  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>

      {/* {shelfItems.map((item) => {
        return (
          <p>
            <br />
            {item.description}
            <br />
          </p>
        )
      })} */}

    </div>
  );
}

export default ShelfPage;
