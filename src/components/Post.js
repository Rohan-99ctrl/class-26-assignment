
class Post {

    constructor (){
        this.postTimeline = document.getElementById('postTimeline');
    }

    /**
     * Show post
     */

    showpostsData(postData){
        
        let posts = '';
        postData.map((data, index) => {

            let {name, userPhoto, content, postPhoto} = data;

            posts += `
                <div class="row mt-3">
                    <div class="col-md-4 m-auto postItem">
                        <div class="postProfileWrapper mb-3">
                            <div style="width: 250px;display: flex;align-items: center;">
                                <img style="width: 45px;height: 45px;border-radius: 50%;object-fit: cover;" src="${userPhoto}" alt="">
                                <div>
                                    <p>${name}</p>
                                    <span>31, March at 8:00pm</span>
                                </div>
                            </div>
            
                            <span class="postSettingShow">
                                <a href="#"><i class='bx bx-dots-horizontal'></i></a>
                                    <ul class="postSettingWrapper">
                                        <li><a href="#">Edit post</a></li>
                                        <li><a href="#">Delete post</a></li>
                                    </ul>
                            </span>
                        </div>
            
                        <div class="postText">
                            <p>${content}</p>
                        </div>
            
                        <div class="postImage mb-3">
                            <img class="images" src="${postPhoto}" alt="">
                        </div>
            
                        <div class="reactionWrapper">
                            <div style="display: flex;justify-content: space-between;align-items: center;border-top: 1px solid #444444;border-bottom: 1px solid #444444;padding: 5px 0px;">
                                <a href="#"><i class='bx bxs-like'></i> Like</a>
                                <a href="#"><i class='bx bxs-comment'></i> Comment</a>
                                <a href="#"><i class='bx bxs-share'></i> Share</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        this.postTimeline.innerHTML = posts;

    }

}

let post = new Post;
export default post;

