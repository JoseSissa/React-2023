function TwitterFollowCard({ username, name, isFollow }) {
    return ( 
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    alt="avatar"
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/${username}`}
                />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{username}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    );
}

export default TwitterFollowCard;