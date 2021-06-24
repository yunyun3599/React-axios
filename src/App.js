import React, {useEffect, useState, useCallback} from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import NewsPage from './pages/NewsPage';
//import NewsList from './components/NewsList';
//import Categories from './components/Categories';

const App = () => {
  //const [data,setData] = useState(null);
  //const [category, setCategory] = useState('all');
  //const onSelect = useCallback(category => setCategory(category), []);

  /*const onClick = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=d47dee16243d40659f8345fecf8fd2f4")
    .then(response => {
      setData(response.data);
    });
  };
  */

  /* async 적용한 코드
  const onClick = async () => {
    try{
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=d47dee16243d40659f8345fecf8fd2f4");
      setData(response.data);
    }
    catch(e) {
      console.log(e);
    }
  };
*/
  /*return (
    <>
    <Categories category={category} onSelect={onSelect}/>
    <NewsList category={category}/>
    </>
  );*/
  return(
    <Route path = '/:category?' component={NewsPage} />
  );
};

export default App;
