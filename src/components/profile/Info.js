import React, {Component} from 'react';


class Info extends Component {
    constructor(props){
        super(props);
        this.state = {
            // username: '',
            location: '',
            language: '',
            certific: '',
            user_list: [],
            correntU: '',
            tg: ''
        };

        this.getInfoList = this.getInfoList.bind(this);
        this.handleLanguage = this.handleLanguage.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        this.handleTg = this.handleTg.bind(this);
    }


    getInfoList () {
        var storedUsers = JSON.parse(localStorage.getItem("Users"));
        console.log(storedUsers);
        this.state.user_list = storedUsers;
        console.log(this.state.user_list);

        var correntUser = JSON.parse(localStorage.getItem("stUser"));
        
        if(correntUser !== null){
            console.log(correntUser);
            console.log('I am in profile');
            this.setState({
                correntU: correntUser.name
            })
        }
    }

    handleLanguage(event) {
        this.setState({
            language: event.target.value
        })
    }
    saveLanguage (event) {
        var item = {name:"", email:"", pwd:"", location:"", language:"", tg:"" };
        var ulist = [];
        for(var i = 0; i<this.state.user_list.length; i++){
            if(this.state.user_list[i].name === this.state.correntU){
                // console.log(this.state.language);
                item = this.state.user_list[i];
                item.language = this.state.language;
                ulist = this.state.user_list;
                ulist[i] = item;
                this.setState({
                    user_list: ulist
                })
                localStorage.setItem("Users", JSON.stringify(this.state.user_list));
                console.log(this.state.user_list);
                localStorage.setItem("stLan", JSON.stringify(this.state.user_list[i]));
            }
        }
        
        this.props.profileAction.addLanguage(this.state.language);

    }

    handleLocation (event) {
        this.setState({
            location: event.target.value
        })
    }

    saveLocation (event) {
        var item = {name:"", email:"", pwd:"", location:"", language:"", tg:"" };
        var ulist = [];
        for(var i = 0; i<this.state.user_list.length; i++){
            if(this.state.user_list[i].name === this.state.correntU){
                // console.log(this.state.language);
                item = this.state.user_list[i];
                item.location = this.state.location;
                ulist = this.state.user_list;
                ulist[i] = item;
                this.setState({
                    user_list: ulist
                })

                // console.log(this.state.user_list);

                localStorage.setItem("Users", JSON.stringify(this.state.user_list));
                localStorage.setItem("stLan", JSON.stringify(this.state.user_list[i]));
                console.log(this.state.user_list);
            }
        }
        this.props.profileAction.addLocation(this.state.location);
    }

    handleTg(event){
        this.setState({
            tg: event.target.value
        })
    }

    saveTg (event) {
        var item = {name:"", email:"", pwd:"", location:"", language:"", tg:"" };
        var ulist = [];
        for(var i = 0; i<this.state.user_list.length; i++){
            if(this.state.user_list[i].name === this.state.correntU){
                // console.log(this.state.language);
                item = this.state.user_list[i];
                item.tg = this.state.tg;
                ulist = this.state.user_list;
                ulist[i] = item;
                this.setState({
                    user_list: ulist
                });

                // console.log(this.state.user_list);

                localStorage.setItem("Users", JSON.stringify(this.state.user_list));
                localStorage.setItem("stLan", JSON.stringify(this.state.user_list[i]));
                console.log(this.state.user_list);
            }
        }
        this.props.profileAction.toggleTour(this.state.tg);
    }
    
    render(){
        
        return(
            <div>
                
                <button type="button" onClick={this.getInfoList}>Show Info</button>
                <p id = 'profile'>{this.state.correntU}</p>
                Language: <span>{this.state.language}</span><br/>
                <input type="text" onChange={this.handleLanguage} name='language' id='language' />
                <button type="button" onClick={this.saveLanguage}>Save</button><br/>
                
                Location: <span>{this.state.location}</span><br/>
                <input type="text" name="location" id='location' onChange={this.handleLocation}/>
                <button type="button" onClick={this.saveLocation}>Save</button><br/><br/>
                
                Tour Guide Certification: <span>{this.state.certific}</span><br/>
                <select id="tg" onChange={this.handleTg}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                </select>
                <button type="button" onClick={this.saveTg}>Save</button>
            
          </div>
        );
    }
}

// {this.state.language}
// {this.state.location}
//


Info.propTypes = {
    profileAction: React.PropTypes.object.isRequired,
    profileInfo: React.PropTypes.object.isRequired
};

export default Info;