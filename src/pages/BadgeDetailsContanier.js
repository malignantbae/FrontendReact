import React from 'react';

import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';
import BadgeDetails from './BadgeDetails';


class BadgeDetailsContainer extends React.Component{
   state = {
       loading: true,
       error: null,
       data: undefined
   };
   
  componentDidMount(){
      this.fetchDadata();
  }

  fetchDadata = async () =>{
      this.setState({loading: true, error: null})

      try {
          const data = await api.badges.read(this.props.match.params.badgeId);
          // leer el id de la url que se pasa por el router
        this.setState({loading: false,data: data})
      } catch (error) {
        this.setState({loading: false,error: error})
      }
    }
   render(){
       if(this.state.loading){
            return <PageLoading/>
       }
       if(this.state.error){
            return <PageError error={this.state.error} />
       }
        return (
            <BadgeDetails badge={this.state.data}/>
        );
    }   
}

export default BadgeDetailsContainer;