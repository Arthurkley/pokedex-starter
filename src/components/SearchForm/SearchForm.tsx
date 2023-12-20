import React from 'react'
import { generationList, typesList, sortList } from '@/utils/optionList'
import { useSearchForm } from '@/components/SearchForm'

const SearchForm = () => {
    const { fieldKeyword } = useSearchForm()
    return (
        <form className='grid grid-cols-4 gap-x-[20px]'>
            <div>
                <label htmlFor="generation" className="block mb-2 text-mb font-medium text-white">Generations</label>
                <select id="generation" className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375eaa] focus:border-[#375eaa] block w-full p-2.5 ">
                    {generationList.map((item, index) => {
                        return (<option className="capitalize" key={`generation-key-${index}`} value={index} >{item.name}</option>
                        )
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="type" className="block mb-2 text-mb font-medium text-white">Types</label>
                <select id="type" className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375eaa] focus:border-[#375eaa] block w-full p-2.5 ">
                    {typesList.map((item, index) => {
                        return (<option className="capitalize" key={`type-key-${index}`} value={item} >{item}</option>
                        )
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="sort" className="block mb-2 text-mb font-medium text-white">Sort By</label>
                <select id="sort" className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375eaa] focus:border-[#375eaa] block w-full p-2.5 ">
                    {sortList.map((item, index) => {
                        return (<option className="capitalize" key={`sort-key-${index}`} value={item} >{item}</option>
                        )
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="generation" className="block mb-2 text-mb font-medium text-white">Search</label>
                <input {...fieldKeyword} id="generation" className="bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375eaa] focus:border-[#375eaa] block w-full p-2.5 " />
            </div>
        </form>
    )
}

export default SearchForm