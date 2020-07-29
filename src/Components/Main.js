import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'

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
            posts: []
        }
        this.removePhoto = this.removePhoto.bind(this);
    }

    removePhoto(postRemoved){
        console.log(postRemoved.description);
        this.setState((state) => ({posts: state.posts.filter((post) => post !== postRemoved)}))
    }

    componentDidMount(){
        const data = SimulateFetchFromDatabase()
        this.setState({posts: data})
    }

    render(){
        return (<div>
                    <Title title = {'Photowall'}/>
                    <PhotoWall posts = {this.state.posts} onRemovePhoto = {this.removePhoto}/>
                </div>)
    }
}

function SimulateFetchFromDatabase(){
    return [{
            id: "0",
            description: "beautiful landscape",
            imageLink: "https://i1.sndcdn.com/artworks-000233950889-o4qwrx-t500x500.jpg"
            }, {
            id: "1",
            description: "Aliens???",
            imageLink: "https://i1.sndcdn.com/artworks-y8PtAmwRG5GxWZTq-utgsiA-t500x500.jpg"
            }, {
            id: "2",
            description: "On a vacation!",
            imageLink: "https://i1.sndcdn.com/artworks-hsj0ylvz2BQEo78P-ui2Uzw-t500x500.jpg"
        }]
}

export default Main