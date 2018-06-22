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
            url:"https://www.youtube.com/watch?v=Ng1W_qu5aJM",
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
                genre = "de comedie";
                sequence = 1;
            }

            else if (lastUserMessage.toLowerCase().includes("poli") || lastUserMessage.toLowerCase().includes("cier")) {
                genre = "policière";
                sequence = 1;
            }

            else if (lastUserMessage.toLowerCase().includes("science") || lastUserMessage.toLowerCase().includes("Fiction") || lastUserMessage.toLowerCase().includes("sf")) {
                genre = "de science-Fiction";
            }

            else if (lastUserMessage.toLowerCase().includes("epouvante") || lastUserMessage.toLowerCase().includes("horreur")) {
                genre = "d'epouvante-horreur";
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
                this.chatbotSimpleReponse("Alors, Quel genre de série souhaites-tu visionner ? ")
            }
        }

        if (genre !== undefined && sequence === 1) {
            sequence = 2;
            this.chatbotSimpleReponse("Vous souhaiter donc regarder une serie " + genre + " ?")
        }


        if (sequence === 3) {
            if (genre === "fantastique") {
                this.chatbotSimpleReponse("Tres bien voici les serie " + genre + " dont dispose ma base de donnée : " + this.state.serie.Fantastique);
                sequence = 4;
            }
            else if (genre === "d'action") {
                this.chatbotSimpleReponse("Tres bien voici les serie " + genre + " dont dispose ma base de donnée : " + this.state.serie.Action);
                sequence = 4;
            }
            else if (genre === "d'aventure") {
                this.chatbotSimpleReponse("Tres bien voici les serie " + genre + " dont dispose ma base de donnée : " + this.state.serie.Aventure);
                sequence = 4;
            }
            else if (genre === "policière") {
                this.chatbotSimpleReponse("Tres bien voici les serie " + genre + " dont dispose ma base de donnée : " + this.state.serie.Policière);
                sequence = 4;
            }
            else if (genre === "de science-Fiction") {
                this.chatbotSimpleReponse("Tres bien voici les serie " + genre + " dont dispose ma base de donnée : " + this.state.serie.ScienceFiction);
                sequence = 4;
            }
            else if (genre === "d'epouvante-horreur") {
                this.chatbotSimpleReponse("Tres bien voici les serie " + genre + " dont dispose ma base de donnée : " + this.state.serie.Epouvante);
                sequence = 4;
            }
            else if (genre === "de comedie") {
                this.chatbotSimpleReponse("Tres bien voici les serie " + genre + " dont dispose ma base de donnée : " + this.state.serie.Comedie);
                sequence = 4;
            }
        }

        if (sequence ===5){
            if (genre === 'fantastique'){
                if (lastUserMessage.toLowerCase().includes("games") || lastUserMessage.toLowerCase().includes("thrones")){
                  url = "https://www.youtube.com/embed/Ng1W_qu5aJM";
                  document.getElementById("youtube").style.display="inline";
                }
                if (lastUserMessage.toLowerCase().includes("the") || lastUserMessage.toLowerCase().includes("magicians")){
                    url = "https://www.youtube.com/embed/Io9CnHX96Xw";
                    document.getElementById("youtube").style.display="inline";
                }
                if (lastUserMessage.toLowerCase().includes("once upon") || lastUserMessage.toLowerCase().includes("time")){
                    url = "https://www.youtube.com/embed/M8y6RAxRaXk";
                    document.getElementById("youtube").style.display="inline";
                }
                if (lastUserMessage.toLowerCase().includes("teen") || lastUserMessage.toLowerCase().includes("wolf")){
                    url = "https://www.youtube.com/embed/0geT6-h-7eM";
                    document.getElementById("youtube").style.display="inline";
                }
            }
        }

        if (sequence === 4) {
            this.chatbotSimpleReponse("Je peut vous presenter la bande annonce des serie ci-dessus, pour cela inscrivez le nom de la serie dont vous souhaitez regarder la bande annonce.");
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
                    <div id="youtube" >
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