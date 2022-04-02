
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/alert";

import 'boxicons/css/boxicons.min.css';
import "./index.css"
import "./main.scss"
import "font-awesome/css/font-awesome.min.css";

import ananda from './img/901fqxtw.bmp'
import axios from "axios";
import post from "./components/Post";
import Alert from "./components/Alert";



const user_photo = document.getElementById('userMPic');
// user_photo.setAttribute('src', 'https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.6435-1/160980436_2873645602899195_291559288417585381_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeG0Kh_y38OxYEwEtOJruOL2Gkkuz9CX2b0aSS7P0JfZvd-IMxXnZ-64HpuMeCeFp-u-Sm2yNSJM8dQTFSjH5lVt&_nc_ohc=5qBH-YXvldMAX_fkIMi&_nc_ht=scontent.fmaa1-1.fna&oh=00_AT_WstQX3YSmtJN1qpOOwXaLntJ7f8X25Z-jvn2itred4w&oe=626B889D')
user_photo.setAttribute('src', ananda)





// get all post
const getPost = () => {

    axios.get('http://localhost:5050/posts').then((res) => {
            post.showPosts(res.data);

        });

}
// getPost();
// DOM loading operations
document.addEventListener('DOMContentLoaded' , getPost)

// createPostForm
document.getElementById('createPostForm').addEventListener('submit', createPostForm );

//get alert on form
const msg = document.querySelector('.msg');

function createPostForm(e){
    e.preventDefault();
    // get formdata form fromentres
    let form_data = new FormData(e.target);
    let data = Object.fromEntries(form_data.entries())
    
    // form valedation
    if(data.name=="" || data.userPhoto == "" || data.userContent == "" || data.PostPhoto  ){
        msg.innerHTML = Alert.danger('All fields are required')
    }else {

    
        // console.log(data);
        axios.post('http://localhost:5050/posts', {
            U_name : data.name,
            U_Photo : data.userPhoto,
            content : data.userContent ,
            P_photo : data.PostPhoto,
        }).then(res => {
        

        })
    }

}