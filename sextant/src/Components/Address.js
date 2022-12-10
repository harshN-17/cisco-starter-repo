import React, { useEffect, useState } from 'react'

const Address = (props) => {
    const [data, setData] = useState([]);
    const url = props.url;
    console.log(url);
    useEffect(() => {
     fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    console.log(data);
  return (
    <div>
      {data}
    </div>
  )
}

export default Address
