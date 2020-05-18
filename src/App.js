import React from 'react';
class App extends React.Component{
    constructor(props){
        super(props);
        //this is the only time we do direct assignment
        this.state={lat:null, errorMessage:''};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                //update state object we call setstate
                this.setState({lat: position.coords.latitude, lon:position.coords.longitude});
            },
            err => {
                this.setState({errorMessage:err.message})
            }
        );
    }
    
    //react says we need to define render method
    render(){
        if(this.state.errorMessage && !this.state.lat){
            return <h1>Error:{this.state.errorMessage}</h1>
        }else if(!this.state.errorMessage && this.state.lat)
        {
        return <h1>Lattitude:{this.state.lat}</h1>}
        else{
            return <h1>Loading!</h1>
        }

    }
};
export default App;