import React from "react";
import friends from "/friends";
import Friend from "/Friend";

class FriendsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: "",
            orderBy: "name",
            order: "ascending"
        };
    }

    handleChange(field, event) {
        this.setState({[field]: event.target.value});
    }

    render() {
        const friendsList = friends.map(friend => (
            <Friend
                currentLocation={friend.current_location || {}}
                name={friend.name}
                pictureUrl={friend.pic_square}/>
            ));

        return (
            <div>
                <form className="form-inline searchForm" role="form">
                    <div className="form-group">

                        <input
                            className="form-control"
                            onChange={this.handleChange.bind(this, "searchText")}
                            placeholder="Search"
                            value={this.state.searchText} />

                        <select
                            className="input-medium"
                            onChange={this.handleChange.bind(this, "orderBy")}
                            value={this.state.orderBy}>
                            <option value="name">Name</option>
                            <option value="friend_count">#Friends</option>
                        </select>

                        <select
                            className="input-medium"
                            onChange={this.handleChange.bind(this, "order")}
                            value={this.state.order}>
                            <option value="descending">Descending</option>
                            <option value="ascending">Ascending</option>
                        </select>

                    </div>
                </form>

                <ul>
                    {friendsList}
                </ul>
            </div>
        );
    }
}

export default FriendsList;