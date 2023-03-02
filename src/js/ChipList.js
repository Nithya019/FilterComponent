import React, { useState, useRef } from 'react';
import cancel from '../cancel.png';


function ChipList(props) {
    const removeChip = (item) => {
        props.itemAction(item, 'DELETE');
    }

    const mapChipItem = () => {
        return props.items.map((item, i) => {
            return (
                <div key={item.id} className='mr-4 rounded border border-gray-300 border-solid hover:bg-gray-200 cursor-pointer px-2 py-2 flex items-center space-x-4'>
                    <img src={item.image} alt={item.name} className='w-5 h-5 rounded-full' />
                    <div class="font-medium dark:text-white">
                        <div>{item.name}</div>
                    </div>
                    <img src={cancel} className='w-4 h-4' alt='cancel' onClick={() => removeChip(item)} />
                </div>)
        })
    }

    return (
        <div className='flex'>
            {mapChipItem()}
        </div>
    );
}

export default ChipList;