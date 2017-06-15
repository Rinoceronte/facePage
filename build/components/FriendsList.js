import React from 'react';
import axios from 'axios';

export default class FriendsList extends React.Component {
    constructor() {
        super();

       

        this.state = {
            users: []
        };
    }

    componentWillMount() {
        axios.get('/users').then(response => {
            //data will have an object of response.data.users list...
            console.log(response.data);
            if (response.data) {
                this.setState({
                    users: response.data
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

    render() {
        
        let friendList = [];
        if (this.state.users && this.state.users.length > 0) {
            friendList = this.state.users.map(user => {
                
                return (
                    <div key={user._id + '-user'}>
                         <h2><a href="#">{user.firstName + ' '} {user.lastName}</a></h2>
                         <h3>{user.email}<br/>
                             {user.age}<br/>
                             {user.gender}<br/>
                             {user.school}<br/>
                             {user.job}<br/>
                             </h3>
                    </div>
                )
            });
        };


        return (
            <div>
                <h3>Public Directory</h3>
                {friendList}
            </div>)

            // /*(<div>
            //     <h1>Friend List</h1>
            //     {/*loop*/}
            // </div>
            // );*/

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
