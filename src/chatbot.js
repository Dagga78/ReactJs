import React, { Component } from 'react';
import logo from './logo.svg';
import avatar from './images/icon.png';
import './App.css';
import Messages from './Messages'

// import chatbot from  './chatbot.js';

class App extends Component {

    constructor(context, props) {
        super(context, props);

        this.state = {
            lastUserMessage: "",
            botMessage: "",
            botName: "Steven Junior",
            message: "",
            values: {
                pays: null,
            },
            messages: [
                {
                    id: new Date(),
                    message: 'Bonjour jeune homme, bienvenu sur notre chatbot !'
                }
            ]
        }
    }

    chatbotReponse = () => {
        const messages = this.state.messages;
        messages.push({
            id: new Date(),
            message: this.state.message,
            type: 'msguser'
        });
        this.setState({ messages, message: '' });

        const lastUserMessage = this.state.message;
        let botMessage = "Je suis confus, peux-tu reformuler ta phrase ?";
        if (lastUserMessage === "salut" || lastUserMessage === "hello" || lastUserMessage === "hi") {
            const bonjourBot = ["Bonjour je suis enchanté !", "Olééééééééé !", "C'est parti pour la coupe du mooooooonde !!"];
            botMessage = bonjourBot[Math.floor(Math.random() * (bonjourBot.length))];
        }

        else if (lastUserMessage === 'Quel est ton nom ?' || lastUserMessage === 'Comment t\'appelle-tu ?' || lastUserMessage === 'Ton nom ?') {
            botMessage = 'Je m\'appelle ' + this.state.botName;
        }

        messages.push({
            id: new Date(),
            message: botMessage,
            type: 'msgbot'
        });
        this.setState({ messages, message: '' });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <div className="container1">
                        <img className="App-logo" alt="logo" src={logo}/>
                        <div className="titleReact">
                            <h1 className="t1">Chatbot in ReactJS</h1>
                        </div>
                    </div>

                </header>

                <div className="container clearfix">
                    <div className="chat">

                        <div className="chat-header clearfix">
                            <img src={avatar} alt="avatar" className="avatar" />
                            <div className="chat-about">
                                <div className="chat-with">Chatbot du sang de la veine, tu connais (cherche pas le Portugal va gagner)</div>
                            </div>
                        </div>
                        <div className="chat-history">
                            <div id="chatbotSpace">
                                <Messages messages={this.state.messages} />
                            </div>
                        </div>
                        <div id="sendMessage" className="chat-message clearfix">
                            <input
                                onChange={(e) => this.setState({ message: e.target.value })}
                                value={this.state.message}
                                type="text"
                                name="message-to-send"
                                id="message-to-send"
                                placeholder="Ecris ton message"
                                rows="1"
                            />
                            <input id="chatbox" type="submit" value="Envoyer" onClick={this.chatbotReponse}></input>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default App;



















































..fa-file-o, .fa-file-image-o {
    font-size: 16px;
    color: gray;
    cursor: pointer;
}
