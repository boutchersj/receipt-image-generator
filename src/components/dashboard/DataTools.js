import React from 'react'
import { randomCart, randomInt } from '../../data/ItemSeeder';

function DataTools(props) {
    function buildRandomCart() {
        props.refreshDate();
        props.addItemsHandler(randomCart(randomInt(3, 6)), true);
    }

    function addRandomItem() {
        props.addItemsHandler(randomCart(1));
    }

    return (
        <div className='text-xs w-[40rem]'>
            <h2 className='text-xl mb-5 text-black'>Bulk-Add Items</h2>
            <div className='flex mb-5'>
                <div className='flex flex-col mr-5'>
                    <input type="file" accept=".csv" multiple={false} onChange={props.handleCSV} name="file" id="file" className="focus:bg-gray w-[0.1px] opacity-0 overflow-hidden absolute -z-[1] rounded text-black bg-white duration-[250ms]" />
                    <label className='rounded p-3 bg-gradient-to-l from-white to-green text-black duration-[250ms] border border-black' htmlFor="file" onClick={props.notifyUserOfFormat}>Select a CSV file</label>
                </div>
                <button className='flex justify-center items-center bg-gradient-to-l from-white to-green text-black rounded p-3 duration-[250ms] border border-black' onClick={props.regenerateCSVData}>Add Another Copy</button>
            </div>

            <h2 className='text-xl mb-5 text-black'>Data Generation</h2>
            <div className='flex w-full'>
            <button className='justify-center items-center bg-gradient-to-l from-white to-green text-black rounded p-3 mr-5 duration-[250ms] border border-black' onClick={buildRandomCart}>Random Cart</button>
            <button className='justify-center items-center bg-gradient-to-l from-white to-green text-black rounded p-3 mr-5 duration-[250ms] border border-black' onClick={addRandomItem}>Add Random Item</button>
            </div>
        </div>
    )
}

export default DataTools