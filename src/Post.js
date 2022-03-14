export default function Post (props) {
    return (
        <section class={`post-0${props.index+1}`}>
            <section class={`cabeçalho-0${props.index+1}`}>
                <a href="#"><img src={`./img/profile-0${props.index+1}.png`} alt="profile-01" width="32" height="32" /></a>
                <a href="#"><figcaption class={`profile-name-0${props.index+1}`}>depresso_reflexões_do_shinji</figcaption></a>
                <section class={`options-0${props.index+1}`}>
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </section>
            </section>
            <section class={`post-image-0${props.index+1}`}>
                <img src={props.image} alt="post" width="612" height="612" />
            </section>
            <span class={`info-0${props.index+1}`}>
                <div class={`left-actions-0${props.index+1}`}>
                    <div class={`like-0${props.index+1}`}>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div class={`comment-0${props.index+1}`}>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                    </div>
                    <div class={`send-0${props.index+1}`}>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div class={`save-0${props.index+1}`}>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                    <div class={`liked-0${props.index+1}`}>
                        <img src={`./img/liked-0${props.index+1}.png`} alt="curtida-postagem-01" width="20" height="20" />
                        <figcaption class={`liked-caption-0${props.index+1}`}>Curtido por <b>mateusghmaster</b> e <b>outras 227.835 pessoas</b></figcaption>
                    </div>
                </div>
            </span>
        </section>
    );
}