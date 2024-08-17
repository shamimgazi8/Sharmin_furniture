import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import type { AutoCompleteProps } from 'antd';
import { BsSearch } from 'react-icons/bs';

const getRandomInt = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query}
              {/* on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a> */}
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

const SearchAnt: React.FC = () => {
  const [options, setOptions] = useState<AutoCompleteProps['options']>([]);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };

  return (
    <div className=" relative">
      <input
        placeholder="Search"
        className=" dark:bg-transparent dark:text-white outline-none gradient-border px-2 py-1 transition-all"
      />
      <BsSearch className=" absolute right-3 top-[9px]   transition-all hover:text-purple-500 cursor-pointer " />
    </div>
    // <AutoComplete
    //   popupMatchSelectWidth={252}
    //   style={{ width: 300 }}
    //   options={options}
    //   onSelect={onSelect}
    //   onSearch={handleSearch}
    //   size="large"
    // >

    // </AutoComplete>
  );
};

export default SearchAnt;
