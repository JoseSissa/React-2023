import { useState } from "react";

function TwitterFollowCard({ children, username }) {

    const [isFollowing, setIsFollowing] = useState(false);

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button isFollowing' : 'tw-followCard-button'

    const handleClick = () => setIsFollowing(!isFollowing)

    return ( 
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    alt="avatar"
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/${username}`}
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{username}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    );
}

export default TwitterFollowCard;