import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Votes.css';
import confLogo from '../images/badge-header.svg';
import TseData from '../Data/Municipales4.json';



class Votes extends React.Component {
   
    state ={
        loading: true,
        vote: true,
        error: undefined
    }

    

    
    async componentDidMount(){
        // production versión
        const url = "http://mediosprensa.sufragio.go.cr/resultados/api/resultados";
        const response = await fetch(url);
        const data = await response.json();
        

        //rendering data      
        //const data =  require('../Data/Municipales4.json');
        console.log(data);
        console.log('test');
    }
    comp
        render(){
            return (
                <div>
                   {this.state.loading ? <div>loading...</div> : <div>{this.state.data.numero}</div>}
                </div>
            )
        }
    
}

export default Votes;