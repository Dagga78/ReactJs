import React, {Component} from 'react';
import logo from './logo.svg';
import avatar from './images/icon.png';
import './App.css';
import Messages from './Messages'

var genre;

class App extends Component {

    constructor(context, props) {
        super(context, props);

        this.state = {
            dernierMessage: "",
            botMessage: "",
            botName: "Jérôme",
            userName: "",
            message: "",
            responseUserCount: 0,
            serie: {
                Fantastique: [" Game of Thrones", " The Magicians", " Once Upon a Time", " Teen Wolf"],
                Action: [" Marvel's Cloak & Dagger", " MacGyver", " Insomnia", " Flash (2014)", " Arrow"],
                Aventure: [" La Casa de Papel", " Sense8", " The Handmaid’s Tale : la servante écarlate", " 13 Reasons Why"],
                Comedie: [" Happy!", " L'Arme fatale", " The End Of The F***ing World", " Orange Is the New Black"],
                Policière: [" Altered Carbon", " Grimm", " Lucifer", " Narcos", " Breaking Bad"],
                ScienceFiction: [" Westworld", " The Rain", " Les 100", " Black Mirror"],
                Epouvante: [" The Walking Dead", " Fear The Walking Dead", " American Horror Story", " The Terror"],
            },

            dialogue: [
                {
                    id: new Date(),
                    message: 'Bienvenue sur notre chatbot pour vous aidée a la recherche de série télévisée',
                    type: 'msgbot'
                },
                {
                    id: new Date(),
                    message: 'Quel genre de série souhaites-tu visionner ?',
                    type: 'msgbot'
                }
            ]
        }
    }


    chatbotReponse = () => {
        const dialogue = this.state.dialogue;

        dialogue.push({
            id: new Date(),
            message: this.state.message,
            type: 'msguser'
        });

        this.setState({dialogue, message: ''});

        const lastUserMessage = this.state.message;
        let botMessage = "Je suis confus, peux-tu reformuler ta phrase ?";

        if (lastUserMessage.toLowerCase().includes("fantas") || lastUserMessage.toLowerCase().includes("astique")) {
            genre = "fantastique"
        }

        else if (lastUserMessage.toLowerCase().includes("acti") || lastUserMessage.toLowerCase().includes("tion")) {
            genre = "d'action";
        }

        else if (lastUserMessage.toLowerCase().includes("come") || lastUserMessage.toLowerCase().includes("medi")) {
            genre = "de comedie";
        }

        else if (lastUserMessage.toLowerCase().includes("poli") || lastUserMessage.toLowerCase().includes("cier")) {
            genre = "policière";
        }

        else if (lastUserMessage.toLowerCase().includes("science") || lastUserMessage.toLowerCase().includes("Fiction") || lastUserMessage.toLowerCase().includes("sf")) {
            genre = "de science-Fiction";
        }

        else if (lastUserMessage.toLowerCase().includes("epouvante") || lastUserMessage.toLowerCase().includes("horreur")) {
            genre = "d'epouvante-horreur";
        }

        else if (lastUserMessage.toLowerCase().includes("aven") || lastUserMessage.toLowerCase().includes("ture")) {
            genre = "d'aventure";
        }

        this.setState({dialogue, message: ''});

        if (lastUserMessage.toLowerCase() === "oui" && genre !== undefined) {
            if (genre === "fantastique") {
                this.chatbotSimpleReponse("Tres bien voici les serie " + genre + " dont dispose ma base de donnée : " + this.state.serie.Fantastique);
                this.setState({responseUserCount: 1});
            }
            else if (genre === "d'action") {
                this.chatbotSimpleReponse("Tres bien voici les serie " + genre + " dont dispose ma base de donnée : " + this.state.serie.Action);
                this.setState({responseUserCount: 1});
            }
            else if (genre === "d'aventure") {
                this.chatbotSimpleReponse("Tres bien voici les serie " + genre + " dont dispose ma base de donnée : " + this.state.serie.Aventure);
                this.setState({responseUserCount: 1});
            }
            else if (genre === "policière") {
                this.chatbotSimpleReponse("Tres bien voici les serie " + genre + " dont dispose ma base de donnée : " + this.state.serie.Policière);
                this.setState({responseUserCount: 1});
            }
            else if (genre === "de science-Fiction") {
                this.chatbotSimpleReponse("Tres bien voici les serie " + genre + " dont dispose ma base de donnée : " + this.state.serie.ScienceFiction);
                this.setState({responseUserCount: 1});
            }
            else if (genre === "d'epouvante-horreur") {
                this.chatbotSimpleReponse("Tres bien voici les serie " + genre + " dont dispose ma base de donnée : " + this.state.serie.Epouvante);
                this.setState({responseUserCount: 1});
            }
            else if (genre === "de comedie") {
                this.chatbotSimpleReponse("Tres bien voici les serie " + genre + " dont dispose ma base de donnée : " + this.state.serie.Comedie);
                this.setState({responseUserCount: 1});
            }
        }

        else if (lastUserMessage.toLowerCase() === "non") {
            this.chatbotSimpleReponse("Alors, Quel genre de série souhaites-tu visionner ? ")
        }

        else if (this.state.responseUserCount === 0 && genre !== undefined) {
            this.chatbotSimpleReponse("Vous souhaiter donc regarder une serie " + genre + " ?")
        }

        else {
            this.chatbotSimpleReponse(botMessage);

        }


    }

    chatbotSimpleReponse = (SimpleMessage) => {
        const dialogue = this.state.dialogue;
        dialogue.push({
            id: new Date(),
            message: SimpleMessage,
            type: 'msgbot'
        });

        this.setState({dialogue, message: ''});
    }


    onKeyDown = (event) => {
        if (event.key === 'Enter' && this.state.responseUserCount === 0) {
            this.chatbotReponse();
        }
        if (event.key === 'Enter' && this.state.responseUserCount !== 0) {
            this.chatbotSimpleReponse();
        }
    }


    render() {
        return (
            <div className="App">

                <header className="App-header">
                    <div className="headerContainer1">
                        <img className="App-logo" alt="logo" src={logo}/>
                        <div className="titleReact">
                            <h1 className="t1">Chatbot in ReactJS</h1>
                        </div>
                    </div>

                    <div className="drapeau">
                        <img id="imgDrapeau" src={this.state.srcDrapeau}
                             style={{display: this.state.srcDrapeau ? "block" : "none"}} alt="drapeau" height="75"/>
                    </div>
                </header>


                <div className="containerChat">
                    <div className="chat">

                        <div className="chat-header">
                            <img src={avatar} alt="avatar" className="avatar"/>
                            <div className="chat-about">
                                <div className="chat-with">Chatbot</div>
                            </div>
                        </div>

                        <div className="chat-history">
                            <div id="chatbotSpace">
                                <Messages dialogue={this.state.dialogue}/>
                            </div>
                        </div>

                        <div id="sendMessage" className="chat-message">
                            <input
                                onChange={(e) => this.setState({message: e.target.value})}
                                value={this.state.message}
                                type="text"
                                name="message-to-send"
                                id="message-to-send"
                                placeholder="Ecris ton message"
                                onKeyDown={this.onKeyDown}
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