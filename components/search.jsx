import { useState, useEffect } from 'react';

export default function Search() {
  const [platform, setPlatform] = useState('origin');
  const [placeholder, setPlaceholder] = useState('Origin');
  const [platformUID, setPlatformUID] = useState('');

  const getData = async (platform, platformUID) => {
    let response  = await fetch(`/api/search/${platform}/${platformUID}`)
      .then(result => { return result.body })
      .catch(err => console.log(err));
    return response;
  }

  const handleSelect = (e) => {
    e.preventDefault();
    setPlatform(e.target.value);
    let index = e.nativeEvent.target.selectedIndex;
    setPlaceholder(e.nativeEvent.target[index].text);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(getData(platform, platformUID));
  }

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-1/4 mt-1 rounded-md shadow-sm">
        <form onSubmit={handleSubmit}>
          <input type="text" name="platformUID"
            id="platformUID"
            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder={'Enter ' + placeholder + " Username"}
            onChange={(e) => setPlatformUID(e.target.value)}/>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="platform" className="sr-only">Platform</label>
            <select id="platform"
              name="platform"
              className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={handleSelect}>
              <option value="origin">Origin</option>
              <option value="psn">PSN</option>
              <option value="xbl">XBOX</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  )
}