export const exerciseOptions =  {
  method: 'GET',
  
  headers: {
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
  }
};
export const youtubeOptions = {
    method: 'GET',
    headers: {
       'x-rapidapi-key': 'ebf334c8a3msh907a2a454436895p150579jsnf5b1633fd091',
       'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
 
export const fetchData = async (url, options) => {
    const response = await fetch(url,options);
    const data= await response.json();

    return data;
}