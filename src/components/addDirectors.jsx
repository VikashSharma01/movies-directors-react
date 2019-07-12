import React, { Component } from 'react';

class AddDirector extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isHidden : true,
            director_name : ""
         }
    }

    showAddDirector = () => {
        this.setState({isHidden: false})
    }

    onUpdate = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        let randomAvatar = Math.random().toString(36).substring(2);
        // console.log(randomAvatar);
        let randomid = Math.floor(Math.random() * 1000);

      this.setState(prevState => (
        { 
            newContact: {
             ...prevState.newContact,
             [name]: value,
             avatar_url:`https://robohash.org/${randomAvatar}?size=100x100`,
             id : randomid
            }
        }),
      )}


    renderForm = () => {
        return(
            <div className = "director-add-form" >
            <label htmlFor= "director-name">Director Name</label>
            <input name= "directors" className = "adding-new-directors" onChange = {this.onUpdate} />
            </div>
        )
    }

    renderAddButton = () =>{
        return(
            <button onClick={this.showAddDirector} className="button_cont"> Add Contact </button>
        )
    }

    render() { 
        return ( 

         );
    }
}
 
export default AddDirector;
