"use client"
import React, { useEffect, useState } from 'react';
 import Link from 'next/link';
export default function Data() {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
   
  const apiurl="http://localhost:1337";
  useEffect(() => {
    fetch("http://localhost:1337/api/articles/?populate=*")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
          setIsLoading(false);
        },
        (error) => {
          setError(error);
          setIsLoading(false);
        }
      );
  }, []);
 
  const renderedItems = items.data && items.data.map(item => (
<div key={item.id}>
<img src={apiurl+item.attributes.image.data.attributes.formats.thumbnail.url} alt="abc" />
    <div>
      tilte:  {item.attributes.title}
    </div>
    <div>
      description:  
      <div
      dangerouslySetInnerHTML={{__html: item.attributes.ckeditor_content.slice(0, 200)}}
    />
     <Link href={`/blog/${item.id}`}>read more</Link>
    </div>
   
    
</div>

  ));
 
  return (
<div>
      {isLoading ? (
<p>Loading...</p>
      ) : error ? (
<p>Error: {error.message}</p>
      ) : (
        renderedItems
      )}
</div>
  );
}