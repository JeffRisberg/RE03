import Debug from 'debug';
import App from '../../app';

var attachElement = document.getElementById('app');

var basicItems = [
    {
        title: 'Stegosaurus',
        description: "Mild",
        price: 42
    },
    {
        title: 'Velociraptor',
        description: "Mean",
        price: 71
    },
    {
        title: 'Lame-brained Lawyer',
        description: "Stupid",
        price: 10
    }
];

var state = {
    cart: {
        title: 'Jurassic Park Animals',
        items: [
            ...basicItems,
            {
                title: 'Lame-brained Lawyer',
                description: "Stupid",
                price: 10
            }
        ]
    },
    channel: {
        title: "Disney Channel",
        shows: [
            {name: "The Lion King", channelId: "LK-564"},
            {name: "Pocahontas", channelId: "P-789"}
        ]
    }
};

var app;

Debug.enable('myApp*');

// Create new app and attach to element
app = new App({
    state: state
});

app.renderToDOM(attachElement);
