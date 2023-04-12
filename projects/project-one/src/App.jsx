import TwitterFollowCard from './TwitterFollowCard';
import './app.css'

function App() {
    return (
        <article className='app'>
            <TwitterFollowCard username='JoseSissa' name='Jose Sissa' isFollow={false} />
            <TwitterFollowCard username='midudev' name='Midudev' isFollow />
            <TwitterFollowCard username='doriandesings' name='Dorian Designs' isFollow />
        </article>
    );
}

export default App;