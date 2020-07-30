import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'

// const posts = [{
//     id: "0",
//     description: "beautiful landscape",
//     imageLink: "https://i1.sndcdn.com/artworks-000233950889-o4qwrx-t500x500.jpg"
//     }, {
//     id: "1",
//     description: "Aliens???",
//     imageLink: "https://i1.sndcdn.com/artworks-y8PtAmwRG5GxWZTq-utgsiA-t500x500.jpg"
//     }, {
//     id: "2",
//     description: "On a vacation!",
//     imageLink: "https://i1.sndcdn.com/artworks-hsj0ylvz2BQEo78P-ui2Uzw-t500x500.jpg"
// }];

class Main extends Component{

    constructor(){
        super();
        this.state = {
            posts: [{
                id: 0,
                description: "beautiful landscape",
                imageLink: "https://i1.sndcdn.com/artworks-000233950889-o4qwrx-t500x500.jpg"
                }, {
                id: 1,
                description: "Aliens???",
                imageLink: "https://i1.sndcdn.com/artworks-y8PtAmwRG5GxWZTq-utgsiA-t500x500.jpg"
                }, {
                id: 2,
                description: "On a vacation!",
                imageLink: "https://i1.sndcdn.com/artworks-hsj0ylvz2BQEo78P-ui2Uzw-t500x500.jpg"
            }],
        }
        this.removePhoto = this.removePhoto.bind(this);
        this.addPhoto = this.addPhoto.bind(this);
    }

    removePhoto(postRemoved){
        console.log(postRemoved.description);
        this.setState((state) => ({posts: state.posts.filter((post) => post !== postRemoved)}))
    }

    addPhoto(post){
        this.setState((state) => state.posts.push(post))
    }

    componentDidMount(){
        // const data = SimulateFetchFromDatabase()
        // this.setState({posts: data})
    }

    render(){
        return (<div>
                    <Route exact path="/" render={() => (

                        <div>
                            <Title title = {'Photowall'}/>
                            <PhotoWall posts = {this.state.posts} onRemovePhoto = {this.removePhoto}/>
                        </div>

                    )}/>           
                    
                    <Route path="/AddPhoto" render={({history}) => 
                        <AddPhoto onAddPhoto={(addedPost) => {
                            this.addPhoto(addedPost)
                            history.push("/")}
                        }/>
                    }/>

                </div>)
    }
}

// function SimulateFetchFromDatabase(){
//     return [{
//             id: "0",
//             description: "beautiful landscape",
//             imageLink: "https://i1.sndcdn.com/artworks-000233950889-o4qwrx-t500x500.jpg"
//             }, {
//             id: "1",
//             description: "Aliens???",
//             imageLink: "https://i1.sndcdn.com/artworks-y8PtAmwRG5GxWZTq-utgsiA-t500x500.jpg"
//             }, {
//             id: "2",
//             description: "On a vacation!",
//             imageLink: "https://i1.sndcdn.com/artworks-hsj0ylvz2BQEo78P-ui2Uzw-t500x500.jpg"
//         }]
// }

export default Main