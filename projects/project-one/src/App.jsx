import TwitterFollowCard from './TwitterFollowCard';
import './app.css'

function App() {
    return (
        <article className='app'>
            <TwitterFollowCard username='JoseSissa' >
                Jose Sissa
            </TwitterFollowCard>
            <TwitterFollowCard username='midudev' >
                Midudev
            </TwitterFollowCard>
            <TwitterFollowCard username='doriandesings' >
                Dorian Designs
            </TwitterFollowCard>
        </article>
    );
}

export default App;