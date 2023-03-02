import React, { useState, useRef } from 'react';
import List from './List';
import ChipList from './ChipList';
const arr = [];
let count = 0;


function Chip(props) {
  const textInput = useRef(null);
  const [data, setData] = useState(props.data);
  const [items, setItems] = useState([]);
  const [isInput, setIsInput] = useState(false);
  const [inputVal, setInputVal] = useState('');

  const inputFocus = () => {
    setIsInput(true);
  }

  const itemAction = (item, type) => {
    if (type === 'ADD') {
      arr.push(item);
      setData(data.filter(val => val.id !== item.id));
      setItems(arr);
      setIsInput(true);
      setInputVal('');
    }
    else {
      arr.filter((val, i) => val.id === item.id ? arr.splice(i, 1) : '');
      setItems(arr);
      setData([item, ...data]);
      setInputVal('');
    }
  }

  return (
    <div className="items-center p-5">
      <h3>Filter the Users</h3>
      <div className='flex w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
        {items ?
          <ChipList items={items} temAction={itemAction}
            isDelete={count} /> : ''}
        <div>
          <input type='text' className='' onFocus={() => inputFocus()}
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            placeholder='Select User'></input>
          {isInput ?
            <List data={data.filter((d) => {
              if (inputVal) {
                return d.name.indexOf(inputVal) !== -1
              } if (!inputVal) return true
            })} itemAction={itemAction} /> : ''}
        </div>
      </div>
    </div>
  );
}

export default Chip;