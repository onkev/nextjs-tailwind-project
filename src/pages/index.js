import { useState, useEffect } from 'react';
import Navigation from '../../components/navbar';
import Search from '../../components/search';

export default function Home() {
  const [platform, setPlatform] = useState('');
  const [platformUID, setPlatformUID] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [stat, setStat] = useState('career');

  const setParameters = (platform, platformUID, searchResults) => {
    setPlatform(platform);
    setPlatformUID(platformUID);
    setSearchResults(searchResults);
  }

  const getData = async (statType, platform, platformUID) => {
    let response  = await fetch(`/api/${statType}/${platform}/${platformUID}`)
      .then(result => { return result.json(); })
      .catch(err => console.log(err));
    return response.data;
  }

  // useEffect(() => {
  //   let career = getData('career', platform, platformUID);
  //   let match_history = getData('match_history', platform, platformUID);
  //   let legend = getData('legend', platform, platformUID);
  //   console.log(career);
  //   console.log(match_history);
  //   console.log(legend);
  // }, [platform, platformUID]);

  // useEffect(() => {
  //   console.log(platform);
  //   console.log(platformUID);
  //   console.log(searchResults);
  // }, [platform, platformUID, searchResults]);

  return (
    <>
      <Navigation />
      <Search setParameters={setParameters} getData={getData}/>
      <h1 className="text-3xl font-bold underline">
        {platformUID}
      </h1>
    </>
  )
}