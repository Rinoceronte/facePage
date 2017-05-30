import React from "react";
import axios from 'axios';

export default class FriendsList extends React.Component {
    constructor() {
        super();

        this.handleUserHome = this.handleLogout.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

        this.state = {
            users: []
        };
    }

    componentWillMount() {
        axios.get('/users').then(data => {
            //data will have an object of response.data.users list...
            console.log(response.data);
            if (response.data && response.data.users) {
                this.setState({
                    users: response.data.users
                });
            }
        });

    }

    handleChange(field, event) {
        this.setState({ [field]: event.target.value });
    }

    handleUserHome(){
        this.props.history.push('/secure');
    };

    handleLogout(){
        this.props.history.push('/');
        this.props.logout();
    };

    render() {

        let friendList = [];
        if (this.state.users && this.state.users.length > 0) {
            userList = this.state.users.map(user => {
                if (user.friendList && user.friendList.length > 0) {
                    friendList = user.friendList.map(task => <div key={task._id + '-task'}>{task.description}</div>);
                }
                return (
                    <div key={user._id + '-user'}>
                        {user.name}
                        <h3>Friend List</h3>
                        {friendList}
                    </div>
                )
            });
        };


        return (
            <div>
                <button type="button" onClick={this.handleLogout}>Home</button><br/>
                <button type="button" onClick={this.handleLogout}>Log Out</button>
                {/*<a href="#" onClick={this.handleLogout}>Log Outtt</a>*/}
                <Route exact path="/secure" render={() => <PrivateHomepage {...this.props} />}/>
            </div>)

            (<div>
                <h1>Friend List</h1>
                {/*loop*/}
            </div>
            );

        // const friendsList = friends.map(friend => (
        //     <Friend
        //         currentLocation={friend.current_location || {}}
        //         name={friend.name}
        //         pictureUrl={friend.pic_square}/>
        //     ));

        // return (
        //     <div>
        //         <form className="form-inline searchForm" role="form">
        //             <div className="form-group">

        //                 <input
        //                     className="form-control"
        //                     onChange={this.handleChange.bind(this, "searchText")}
        //                     placeholder="Search"
        //                     value={this.state.searchText} />

        //                 <select
        //                     className="input-medium"
        //                     onChange={this.handleChange.bind(this, "orderBy")}
        //                     value={this.state.orderBy}>
        //                     <option value="name">Name</option>
        //                     <option value="friend_count">#Friends</option>
        //                 </select>

        //                 <select
        //                     className="input-medium"
        //                     onChange={this.handleChange.bind(this, "order")}
        //                     value={this.state.order}>
        //                     <option value="descending">Descending</option>
        //                     <option value="ascending">Ascending</option>
        //                 </select>

        //             </div>
        //         </form>

        //         <ul>
        //             {friendsList}
        //         </ul>
        //     </div>
        // );
    }
}
