import React, { useState, useEffect } from 'react';
const arr = [];
let count = 0;


function List(props) {
    const [list, setList] = useState(props.data);
    useEffect(() => {
        setList(props.data);
    }, [props.data]);

    const selectItem = (item) => {
        props.itemAction(item, 'ADD');
    }

    const filteredListItems = () => {
        return list.map((item, i) => {
            return (<div key={item.id} className='hover:bg-gray-200 cursor-pointer px-2 py-2 flex items-center space-x-4' onClick={() => selectItem(item)}>
                <img src={item.image} alt={item.name} className='w-10 h-10 rounded-full' />
                <div class="font-medium dark:text-white">
                    <div>{item.name}</div>
                </div>
            </div>)
        })
    }

    const mapValues = () => {
        let getItems = list;
        return filteredListItems(getItems);
    }
    return (
        <div className="List absolute bg-white">
            {list.length ? <ul className='userList h-[300px] w-[300px] overflow-auto shadow-2xl'>{mapValues()}</ul> : ''}
        </div>
    );
}

export default List;