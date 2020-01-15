import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';



class BadgeNew extends React.Component {
    state = { form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '', 
    } };
    
    handleChange = e => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
      };

    render(){
        return(
            <div>
                <Navbar/>

                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <Badge 
                        firstName={this.state.form.firstName} 
                        lastName={this.state.form.lastName}
                        avatarUrl="https://s.gravatar.com/avatar/5ae221e81969b0849c84c5cdb0c62623?s=80"
                        jobTitle={this.state.form.jobTitle}
                        email={this.state.form.email} 
                        twitter={this.state.form.twitter}/>
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                            onChange={this.handleChange}
                            formValues={this.state.form}
                             />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BadgeNew;