import { Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { store } from '../../data/store'
import { useEffect } from 'react'
import { useState } from 'react'

export default function search() {
    const [tempProducts, setTempProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = store.filter(product => {
      const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearchTerm;
  });
    
  useEffect(() => {
    async function fetchProducts() {
      const call = await fetch('https://reactapi.pautinaweb.ru/objects.php');
      const responce = await call.json();
      setProducts(responce);
      console.log(responce)
    }
    fetchProducts();
  }, []);

function sort(type = 'asc') { 
  let res = [...products];
  if(type === 'asc') {
    res = products.sort((a, b) => a.price - b.price); 
  
  } else if (type === 'desc' ) {
    res = products.sort((a, b) => b.price - a.price);
  }
  setProducts([...res]);
 
}

useEffect(() => {
  setTempProducts([...products.filter((item) => item.name.toLowerCase().includes(search))])
}, [search]) 

 return(

    <>
    <section className='container'>
              <div className="all">
              <div className="search">     
            <Input value={searchTerm} onChange={(event)  => setSearchTerm(event.target.value)} />
              <SearchIcon />
              </div> 
             
              </div>
       
    
     

        
      </section>
    
    </>

 );

}