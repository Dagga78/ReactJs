import React, {Component} from 'react';
import logo from './logo.svg';
import avatar from './images/icon.png';
import './App.css';
import Messages from './Messages'

var genre;
var sequence = 0;
var url = "https://www.youtube.com/embed/Ng1W_qu5aJM";

class App extends Component {

    constructor(context, props) {
        super(context, props);

        this.state = {
            url: "https://www.youtube.com/watch?v=Ng1W_qu5aJM",
            dernierMessage: "",
            botMessage: "",
            botName: "Jérôme",
            userName: "",
            message: "",
            responseUserCount: 0,
            serie: {
                Fantastique: [" Game of Thrones", " The Magicians", " Once Upon a Time", " Teen Wolf"],
                Action: [" Marvel's Cloak & Dagger", " Insomnia", " Flash (2014)", " Arrow"],
                Aventure: [" La Casa de Papel", " Sense8", " The Handmaid’s Tale : la servante écarlate", " 13 Reasons Why"],
                Comedie: [" Happy!", " L'Arme fatale", " The End Of The F***ing World", " Orange Is the New Black"],
                Policière: [" Altered Carbon", " Grimm", " Lucifer", " Narcos", " Breaking Bad"],
                ScienceFiction: [" Westworld", " The Rain", " Les 100", " Black Mirror"],
                Epouvante: [" The Walking Dead", " Fear The Walking Dead", " American Horror Story", " The Terror"],
            },

            dialogue: [
                {
                    id: new Date(),
                    message: 'Bienvenue sur notre chatbot pour vous aider à la recherche de séries télévisées',
                    type: 'msgbot'
                },
                {
                    id: new Date(),
                    message: 'Quel genre de série souhaitez-vous visionner ?',
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
        let botMessage = "Je suis confus, pouvez-vous reformuler votre phrase ?";

        if (sequence === 0) {
            if (lastUserMessage.toLowerCase().includes("fantas") || lastUserMessage.toLowerCase().includes("astique")) {
                genre = "fantastique";
                sequence = 1;
            }

            else if (lastUserMessage.toLowerCase().includes("acti") || lastUserMessage.toLowerCase().includes("tion")) {
                genre = "d'action";
                sequence = 1;
            }

            else if (lastUserMessage.toLowerCase().includes("come") || lastUserMessage.toLowerCase().includes("medi")) {
                genre = "de comédie";
                sequence = 1;
            }

            else if (lastUserMessage.toLowerCase().includes("poli") || lastUserMessage.toLowerCase().includes("cier")) {
                genre = "policière";
                sequence = 1;
            }

            else if (lastUserMessage.toLowerCase().includes("science") || lastUserMessage.toLowerCase().includes("Fiction") || lastUserMessage.toLowerCase().includes("sf")) {
                genre = "de science-fiction";
            }

            else if (lastUserMessage.toLowerCase().includes("epouvante") || lastUserMessage.toLowerCase().includes("horreur")) {
                genre = "d'épouvante-horreur";
                sequence = 1;
            }

            else if (lastUserMessage.toLowerCase().includes("aven") || lastUserMessage.toLowerCase().includes("ture")) {
                genre = "d'aventure";
                sequence = 1;
            }
            else {
                this.chatbotSimpleReponse(botMessage);
                sequence = 0;
            }

        }


        if (sequence === 2) {
            if (lastUserMessage.toLowerCase() === "oui") {
                sequence = 3;
            }
            else if (lastUserMessage.toLowerCase() === "non") {
                sequence = 0
                this.chatbotSimpleReponse("Alors, Quel genre de série souhaitez-vous visionner ? ")
            }
        }

        if (genre !== undefined && sequence === 1) {
            sequence = 2;
            this.chatbotSimpleReponse("Vous souhaitez donc regarder une série " + genre + " ?")
        }


        if (sequence === 3) {
            if (genre === "fantastique") {
                this.chatbotSimpleReponse("Très bien voici les séries " + genre + " dont dispose ma base de donnée : " + this.state.serie.Fantastique);
                sequence = 4;
            }
            else if (genre === "d'action") {
                this.chatbotSimpleReponse("Très bien voici les séries " + genre + " dont dispose ma base de donnée : " + this.state.serie.Action);
                sequence = 4;
            }
            else if (genre === "d'aventure") {
                this.chatbotSimpleReponse("Très bien voici les séries " + genre + " dont dispose ma base de donnée : " + this.state.serie.Aventure);
                sequence = 4;
            }
            else if (genre === "policière") {
                this.chatbotSimpleReponse("Très bien voici les séries " + genre + " dont dispose ma base de donnée : " + this.state.serie.Policière);
                sequence = 4;
            }
            else if (genre === "de science-fiction") {
                this.chatbotSimpleReponse("Très bien voici les séries " + genre + " dont dispose ma base de donnée : " + this.state.serie.ScienceFiction);
                sequence = 4;
            }
            else if (genre === "d'épouvante-horreur") {
                this.chatbotSimpleReponse("Très bien voici les séries " + genre + " dont dispose ma base de donnée : " + this.state.serie.Epouvante);
                sequence = 4;
            }
            else if (genre === "de comédie") {
                this.chatbotSimpleReponse("Très bien voici les séries " + genre + " dont dispose ma base de donnée : " + this.state.serie.Comedie);
                sequence = 4;
            }
        }

        if (sequence === 5) {
            if (genre === 'fantastique') {
                if (lastUserMessage.toLowerCase().includes("games") || lastUserMessage.toLowerCase().includes("thrones")) {
                    url = "https://www.youtube.com/embed/Ng1W_qu5aJM";
                    document.getElementById("youtube").style.display = "inline";
                }
                else if (lastUserMessage.toLowerCase().includes("the") || lastUserMessage.toLowerCase().includes("magicians")) {
                    url = "https://www.youtube.com/embed/Io9CnHX96Xw";
                    document.getElementById("youtube").style.display = "inline";
                }
                else if (lastUserMessage.toLowerCase().includes("once upon") || lastUserMessage.toLowerCase().includes("time")) {
                    url = "https://www.youtube.com/embed/M8y6RAxRaXk";
                    document.getElementById("youtube").style.display = "inline";
                }
                else if (lastUserMessage.toLowerCase().includes("teen") || lastUserMessage.toLowerCase().includes("wolf")) {
                    url = "https://www.youtube.com/embed/0geT6-h-7eM";
                    document.getElementById("youtube").style.display = "inline";
                }
            }
            if (genre === "d'action") {
                if (lastUserMessage.toLowerCase().includes("marvel") || lastUserMessage.toLowerCase().includes("cloak") || lastUserMessage.toLowerCase().includes("dagger")) {
                    url = "https://www.youtube.com/embed/RNQeuTsF5Wo";
                    document.getElementById("youtube").style.display = "inline";
                }
                else if (lastUserMessage.toLowerCase().includes("inso") || lastUserMessage.toLowerCase().includes("mnia")) {
                    url = "https://www.youtube.com/embed/zZsvPBtOGZw";
                    document.getElementById("youtube").style.display = "inline";
                }
                else if (lastUserMessage.toLowerCase().includes("flash")) {
                    url = "https://www.youtube.com/embed/8HB40lEa_j8";
                    document.getElementById("youtube").style.display = "inline";
                }
                else if (lastUserMessage.toLowerCase().includes("arrow")) {
                    url = "https://www.youtube.com/embed/nPCxc8vXMso";
                    document.getElementById("youtube").style.display = "inline";
                }
            }
            if (genre === "d'aventure") {
                if (lastUserMessage.toLowerCase().includes("casa") || lastUserMessage.toLowerCase().includes("papel")) {
                    url = "https://www.youtube.com/embed/ZwUor3KTgUc";
                    document.getElementById("youtube").style.display = "inline";
                }
                else if (lastUserMessage.toLowerCase().includes("sense") || lastUserMessage.toLowerCase().includes("8")) {
                    url = "https://www.youtube.com/embed/x1Bz7K76Viw";
                    document.getElementById("youtube").style.display = "inline";
                }
                else if (lastUserMessage.toLowerCase().includes("the handmaid's") || lastUserMessage.toLowerCase().includes("tale")) {
                    url = "https://www.youtube.com/embed/JPVrg4kkuPw";
                    document.getElementById("youtube").style.display = "inline";
                }
                else if (lastUserMessage.toLowerCase().includes("13") || lastUserMessage.toLowerCase().includes("reasons why")) {
                    url = "https://www.youtube.com/embed/JPVrg4kkuPw";
                    document.getElementById("youtube").style.display = "inline";
                }
            }
            if (genre === 'de comédie') {
                if (lastUserMessage.toLowerCase().includes("happy") || lastUserMessage.toLowerCase().includes("!")) {
                    url = "https://www.youtube.com/embed/i3bva32-BNc";
                    document.getElementById("youtube").style.display = "inline";
                }
                else if (lastUserMessage.toLowerCase().includes("l'arme") || lastUserMessage.toLowerCase().includes("fatale")) {
                    url = "https://www.youtube.com/embed/3YiD0Du86Cg";
                    document.getElementById("youtube").style.display = "inline";
                }
                else if (lastUserMessage.toLowerCase().includes("the end of") || lastUserMessage.toLowerCase().includes("world")) {
                    url = "https://www.youtube.com/embed/iwvpyzTvycE";
                    document.getElementById("youtube").style.display = "inline";
                }
                else if (lastUserMessage.toLowerCase().includes("orange is") || lastUserMessage.toLowerCase().includes("the new black")) {
                    url = "https://www.youtube.com/embed/lNvocVbXE_Y";
                    document.getElementById("youtube").style.display = "inline";
                }
            }
            if (genre === 'policière') {
                if (lastUserMessage.toLowerCase().includes("altered") || lastUserMessage.toLowerCase().includes("carbon")) {
                    url = "https://www.youtube.com/embed/2vU-2UC60dQ";
                    document.getElementById("youtube").style.display = "inline";
                }
                else if (lastUserMessage.toLowerCase().includes("grimm")) {
                    url = "https://www.youtube.com/embed/2rVy3RBJmNo";
                    document.getElementById("youtube").style.display = "inline";
                }
                else if (lastUserMessage.toLowerCase().includes("narcos")) {
                    url = "https://www.youtube.com/embed/DxdqaHNSqDM";
                    document.getElementById("youtube").style.display = "inline";
                }
                else if (lastUserMessage.toLowerCase().includes("breaking") || lastUserMessage.toLowerCase().includes("bad")) {
                    url = "https://www.youtube.com/embed/3nXznq02ixM";
                    document.getElementById("youtube").style.display = "inline";
                }
            }
            if (genre === "de science-fiction") {
                if (lastUserMessage.toLowerCase().includes("west") || lastUserMessage.toLowerCase().includes("world")) {
                    url = "https://www.youtube.com/embed/pypIJLnXSeA";
                    document.getElementById("youtube").style.display = "inline";
                }
                else if (lastUserMessage.toLowerCase().includes("the") || lastUserMessage.toLowerCase().includes("rain")) {
                    url = "https://www.youtube.com/embed/ocynl_7uadI";
                    document.getElementById("youtube").style.display = "inline";
                }
                else if (lastUserMessage.toLowerCase().includes("les") || lastUserMessage.toLowerCase().includes("100")) {
                    url = "https://www.youtube.com/embed/lpY9u8VT-1c";
                    document.getElementById("youtube").style.display = "inline";
                }
                else if (lastUserMessage.toLowerCase().includes("black") || lastUserMessage.toLowerCase().includes("mirror")) {
                    url = "https://www.youtube.com/embed/dITKPHkQaG4";
                    document.getElementById("youtube").style.display = "inline";
                }
            }
            if (genre === "d'épouvante-horreurde science-fiction") {
                if (lastUserMessage.toLowerCase().includes("fear")) {
                    url = "https://www.youtube.com/embed/KhqNzQdlJUU";
                    document.getElementById("youtube").style.display = "inline";
                }
                else if (lastUserMessage.toLowerCase().includes("walking") || lastUserMessage.toLowerCase().includes("dead")) {
                    url = "https://www.youtube.com/embed/AbtiqJGhWyY";
                    document.getElementById("youtube").style.display = "inline";
                }
                else if (lastUserMessage.toLowerCase().includes("american") || lastUserMessage.toLowerCase().includes("horror story")) {
                    url = "https://www.youtube.com/embed/Zuef7i_09PE";
                    document.getElementById("youtube").style.display = "inline";
                }
                else if (lastUserMessage.toLowerCase().includes("terror")) {
                    url = "https://www.youtube.com/embed/rnN7Aad3c7A";
                    document.getElementById("youtube").style.display = "inline";
                }
            }
        }

        if (sequence === 4) {
            this.chatbotSimpleReponse("Je peux vous présenter la bande annonce des séries ci-dessus, pour cela inscrivez le nom de la série dont vous souhaitez regarder la bande annonce.");
            sequence = 5;
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
        if (event.key === 'Enter' && this.state.message.length > 1) {
            this.chatbotReponse();
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


                </header>


                <div className="containerChat">
                    <div id="youtube">
                        <iframe width="700" height="450" src={url} frameBorder="0"
                                allow="autoplay; encrypted-media" allowFullScreen>

                        </iframe>
                    </div>
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