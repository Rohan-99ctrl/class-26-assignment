import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import 'boxicons/css/boxicons.min.css';
import rohan from './images/rohan.png';
import story from './images/makka.jpg';
import story2 from './images/madina.jpg';
import story3 from './images/images.jpg';
import story4 from './images/bg2.jpg';
import story5 from './images/apple.jpg';
import axios from 'axios';
import Post from './components/Post';
import Alert from './components/Alert';


const profile = document.querySelector('#profile');
profile.setAttribute('src', rohan);

const myProfile = document.querySelector('#myProfile');
myProfile.setAttribute('src', rohan);

const storyImg = document.querySelector('.storyImg');
storyImg.setAttribute('src', story);

const storyImg1 = document.querySelector('.storyImg1');
storyImg1.setAttribute('src', story2);

const storyImg2 = document.querySelector('.storyImg2');
storyImg2.setAttribute('src', story3);

const storyImg3 = document.querySelector('.storyImg3');
storyImg3.setAttribute('src', story4);

const storyImg4 = document.querySelector('.storyImg4');
storyImg4.setAttribute('src', story5);

// DOM Loading Operetions

document.addEventListener('DOMContentLoaded', getAllPosts)

// get all posts

function getAllPosts() {

    axios.get('http://localhost:5050/posts').then(response => Post.showpostsData(response.data));

}

// get post from form

document.querySelector('#submitPost').addEventListener('submit', createPost);

// create post

const alertMsg = document.querySelector('#alertMsg');

function createPost(event){

    event.preventDefault();
    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries());

    // form validation
    if( data.name == '' || data.uPhoto == '' || data.pContent == '' || data.pPhoto == '' ){
        alertMsg.innerHTML = Alert.danger('All fields are required!');
        alertMsg.classList.add('mt-3');
    }else{

        // send post request

        axios.post('http://localhost:5050/posts', {
            name        : data.name,
            userPhoto   : data.uPhoto,
            content     : data.pContent,
            postPhoto   : data.pPhoto
        }).then((response) => {

            getAllPosts();
            alertMsg.innerHTML = Alert.success('Post created successfully!');
            alertMsg.classList.add('mt-3');

        })

    }

}


const postSettingShow = document.querySelectorAll('.postSettingShow');
const postSettingWrapper = document.querySelectorAll('.postSettingWrapper');
postSettingShow.addEventListener('click', function(event){

    event.preventDefault();
    postSettingWrapper.map((rem) => {
        rem.classList.remove('active');
    });

    postSettingWrapper.classList.add('active');

});

