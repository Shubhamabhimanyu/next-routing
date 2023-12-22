// 
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation'
// export default function page() {
//   const {id}=useParams();
//   const [error, setError] = useState(null);
//   const [items, setItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const apiurl="http://localhost:1337";
//   useEffect(() => {
//     fetch(`http://localhost:1337/api/articles/${id}/?populate=*`)
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setItems(result);
//           setIsLoading(false);
//         },
//         (error) => {
//           setError(error);
//           setIsLoading(false);
//         }
//       );
//   }, [id]);
//  if(error){
//   return error;
//  }
//  else if((!isLoading)){
//   return "loding...";
//  }
//  else{
//   return (
//     <>
//     blog page
//     {/* <div>title:{items.title}</div> */}
//     {/* <div dangerouslySetInnerHTML={{__html: items.attributes.ckeditor_content}}></div> */}
   
//     </>
   
//   )
//  }
// }
import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div>blog
       <div>
    <Link href="/">Home</Link>
      
      <Link href="/blog">blog</Link>
      <Link href="/test">test</Link>
    </div>
    </div>
  )
}
