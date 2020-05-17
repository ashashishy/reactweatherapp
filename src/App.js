import React from 'react';
class App extends React.Component{
    render(){
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
        )
        return <h1>Lattitude:</h1>
    }
};
export default App;