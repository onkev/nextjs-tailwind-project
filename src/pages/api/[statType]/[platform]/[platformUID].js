const config = {
  headers: {
    'TRN-Api-Key': process.env.API_KEY,
  }
}

export default async function getData(req, res) {
  let { statType, platform, platformUID } = req.query;
  console.log(statType, platform, platformUID);
  let response;
  if ( statType === 'career' ) {
    response = await fetch(`https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${platformUID}`, config)
      .then(result => {
        return result.json()
      });
  } else if ( statType === 'legend' ) {
    response = await fetch(`https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${platformUID}/segments/legend`, config)
      .then(result => {
        return result.json()
      });
  } else if ( statType === 'match_history' ) {
    response = await fetch(`https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${platformUID}/sessions`, config)
      .then(result => {
        return result.json()
      });
  } else if ( statType === 'search' ) {
    response = await fetch(`https://public-api.tracker.gg/v2/apex/standard/search?platform=${platform}&query=${platformUID}`, config)
      .then(result => {
        return result.json()
      });
  }
  console.log(response);
  res.status(200).json(response);
}