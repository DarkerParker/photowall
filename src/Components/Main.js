import React, {Component} from 'react'
import Title from './Title'
import Photos from './Photos'

const posts = [{
    id: "0",
    description: "beautiful landscape",
    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
    "3919321_1443393332_n.jpg"
    }, {
    id: "1",
    description: "Aliens???",
    imageLink: "https://img.buzzfeed.com/buzzfeed-static/static/2015-10/27/17/enhanced/webdr11/enhanced-mid-29607-1445980104-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto" +
    "08323785_735653395_n.jpg"
    }, {
    id: "2",
    description: "On a vacation!",
    imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }
]

class Main extends Component{
    render(){
        return (<div>
                    <Title title = {"Photowall"}/>
                    <Photos posts = {posts}/>
                </div>)
    }
}

  export default Main