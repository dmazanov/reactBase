import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import './index.css';
import Form from "./components/Form/Form";

const initialStateItems = [
    {
        image: 'https://static.vecteezy.com/system/resources/previews/001/209/957/non_2x/square-png.png',
        name: 'Dan Abramov',
        description: 'Working on @reactjs. The demo guy.',
        twitterLink: 'https://twitter.com/dan_abramov',
    },
    {
        image: 'https://static.vecteezy.com/system/resources/previews/001/209/957/non_2x/square-png.png',
        name: 'Ryan Florence',
        description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
        twitterLink: 'https://twitter.com/ryanflorence',
    },
    {
        image: 'https://static.vecteezy.com/system/resources/previews/001/209/957/non_2x/square-png.png',
        name: 'Michael Jackson',
        description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
        twitterLink: 'https://twitter.com/mjackson',
    },
    {
        image: 'https://static.vecteezy.com/system/resources/previews/001/209/957/non_2x/square-png.png',
        name: 'Kent C. Dodds',
        description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
        twitterLink: 'https://twitter.com/kentcdodds',
    },
];

class App extends React.Component {
    state = {
        items: [...initialStateItems],
    }

    addItem = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }

    render() {
        return (
            <div>
                <ListWrapper
                    items={this.state.items}
                />
                <Form submintFn={this.addItem} />
            </div>
        )
    }
}

export default App;
