import React from 'react';

const Video = ({url}) => {
    return (
        <video key={url} autoPlay loop="loop" muted controls>
            <source src={url} />
            <p>Para ver o video por favor habilite JavaScript e considere atualizar para um navegador que suporte <a href="http://videojs.com/html5-video-support/">Video HTML 5</a>.</p>
        </video>
    );
}

export default Video;