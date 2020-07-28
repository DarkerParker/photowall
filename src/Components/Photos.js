import React, {Component} from 'react'

class Photos extends Component{
    render(){
    return(<div className={"postcontainer"}>
                {this.props.posts.map((post) => <div className={"post"} key={post.id}>
                                                    <img src={post.imageLink}></img>
                                                    <p className={"postdescription"}>{post.description}</p>
                                                </div>)}
           </div>
        )
    };
}

export default Photos