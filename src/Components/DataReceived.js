import React from 'react';

export default function DataReceived(props) {


    const [externalData, setExternalData] = React.useState({});


    React.useEffect(() => {
        fetch('https://swapi.dev/api/planets/8/')
            .then(resp => resp.json())
            .then(data => setExternalData(data));
    }, [])

    function handleArray() {
        for(let i = 0; i < externalData.length; i++) {
            console.log(externalData[i])
        }
    }

    return (
        <div>
            <h3>{props.data.name}</h3>
            {externalData.url}
        </div>
    )
}