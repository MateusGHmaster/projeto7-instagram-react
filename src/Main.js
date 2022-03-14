import Post from "./Post";
import Sidebar from "./Sidebar";

export default function Main () {
    const stories = ["story1", "story2", "story3", "story4", "story5", "story6", "story7", "story8"];
    const posts = [{image: "./img/post-01.jpg"},
        {image: "./img/post-02.jpg"},
        {image: "./img/post-03.jpg"}
    ];
    const sidebars = [{images: "./img/suggested-profile-01.png"},
        {images: "./img/suggested-profile-02.png"},
        {images: "./img/suggested-profile-03.png"},
        {images: "./img/suggested-profile-04.png"},
        {images: "./img/suggested-profile-05.png"}
    ];

    return (

        <main>
            <section class="main-container">
                <section class="main-content">
                    <section class="stories-container">
                        <section class="stories-background">
                            {stories.map(story => <div class={story}><img src="./midiaInstagram/stories_background.png" alt="" width="66" height="66" /></div>)}
                        </section>  
                    </section>
                    
                    <section class="posts">
                    {posts.map((post, index) => (
                        <Post index={index} image={post.image} />
                    ))}
                    </section>
                </section>

                <section class="side-bar">
                    <Sidebar image={sidebars.map(sidebar => sidebar.images)} />
                </section>
            </section>
        </main>
            
    );
}

