import React from 'react';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={lat:null};
    }
    //react says we need to define render method
    render(){
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
        )
        return <h1>Lattitude:</h1>
    }
};
export default App;