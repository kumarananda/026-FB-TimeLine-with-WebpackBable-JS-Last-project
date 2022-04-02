
class Post {

    constructor(){
        this.posts_timeline = document.getElementById('timeLineLoad')
    }
    /**
     * Show all posts
     */
    showPosts(posts){

        let post = "";
        posts.reverse().map((data, index) => {
            let {U_name, U_Photo, content, P_photo} = data;
            post += `
            <div class="card my-3 shadow">
                        <div class="card-body">
                            <div class="time_line_post">
                                <div class="time_line_post-head d-flex justify-content-between">
                                    <div class="user_info d-flex justify-content-start">
                                        <div class="user_pic">
                                            <img  class="uLogopic" src="${U_Photo}" alt="">
                                        </div>
                                        <div> <h6>${U_name}</h6>
                                            <span class="time"> 2h</span> <i class='bx bx-brightness bx-spin bx-rotate-90' ></i></i>
                                        </div>
                                    </div>
                                    <div  class="drop_manu"><button>...</button></div> 
                                </div>
                                <div class="user_post_content">
                                    <p>${content}</p>
                                    <img class="w-100" src="${P_photo}" alt="">
                                </div>
                            </div>
                            <div class="row text-center my-2">
                                <div class="col-4"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                    like</div>
                                <div class="col-4"><i class="fa fa-comment-o" aria-hidden="true"></i> comment
                                </div>
                                <div class="col-4"><i class="fa fa-share-square" aria-hidden="true"></i>
                                     share</div>
                            </div>
                        </div>
                    </div>
            
            
            `;
        });

        this.posts_timeline.innerHTML = post
    }
}

let post = new Post
export default post;