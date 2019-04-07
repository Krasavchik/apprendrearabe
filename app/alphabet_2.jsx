const MultiLetter = React.createClass({
    render: function() {
        return  <font className="text-primary">
            {this.props.beg}
            <font className="text-muted">
                ـ
            </font>
            <font className="text-muted">
                ـ
            </font>
                {this.props.mid}
            <font className="text-muted">
                ـ
            </font>
            <font className="text-muted">
                ـ
            </font>
            {this.props.end}
        </font>
    }
});

const Mute = React.createClass({
    render: function() {
        return <ul className="list-group list-group-flush">
            <li className="list-group-item text-xs-center text-primary">
                <h1>
                    {this.props.way ? this.props.letter : this.props.phonetics}
                </h1>
            </li>
        </ul>;
    }
});

const Solution = React.createClass({
    render: function() {
        return <ul className="list-group list-group-flush">
            <li className="list-group-item text-xs-center">
                <h1>
                    <MultiLetter beg={this.props.beg} mid={this.props.mid} end={this.props.end} />
                </h1>
            </li>
            <li className="list-group-item text-xs-center">
                <h2>
                    <span className="text-muted">
                        {this.props.way ? this.props.arabic : this.props.phonetics}
                    </span> ↦ <span className="text-danger">
                        {this.props.way ? this.props.phonetics : this.props.arabic}
                    </span>
                </h2>
            </li>
        </ul>;
    }
});

const Flashcards = React.createClass({

    getInitialState: function(){

        var letter = letters[Math.floor(Math.random()*letters.length)];

        var prob = Math.random();

        if ( prob > 0 && prob < 1/3 ) {
            var letterToGuess = letter.beg ;
        } else if ( prob >= 1/3 && prob < 2/3 ) {
            var letterToGuess = letter.mid ;
        } else {
            var letterToGuess = letter.end ;
        }

        var returnState = {
            learn: true ,
            arabic: letter.arabic ,
            phonetics: letter.phonetics ,
            phonetics_desc : letter.phonetics_desc ,
            beg: letter.beg ,
            mid: letter.mid ,
            end: letter.end ,
            sound: letter.sound ,
            letterToGuess: letterToGuess ,
            way: true ,
            is_sound: true
        } ;

        return returnState;
    },

    componentDidMount: function(){
        key( 'right', this.nextletter );
        key( 'space, enter', this.switchcard );
    },

    changeWay: function(){
        this.setState({ way: !this.state.way });
    },

    switchcard: function(){

        ga('send', {
            hitType: 'event',
            eventCategory: 'SwitchCard',
            eventAction: 'SwitchCard'
        });

        if ( this.state.learn ) {

            try {
                if ( this.state.is_sound ) {
                    var msg = new SpeechSynthesisUtterance();
                    msg.text = this.state.sound ;
                    msg.lang = 'ar-SA' ;
                    window.speechSynthesis.speak(msg);
                }
            }
            catch (e) {
               console.log(e);
            }

            this.setState({
                learn: false
            });

        } else {

            var letter = letters[Math.floor(Math.random()*letters.length)];

            var prob = Math.random();

            if ( prob > 0 && prob < 1/3 ) {
                var letterToGuess = letter.beg ;
            } else if ( prob >= 1/3 && prob < 2/3 ) {
                var letterToGuess = letter.mid ;
            } else {
                var letterToGuess = letter.end ;
            }

            this.setState({
                learn: true ,
                arabic: letter.arabic ,
                phonetics: letter.phonetics ,
                beg: letter.beg ,
                mid: letter.mid ,
                end: letter.end ,
                phonetics_desc : letter.phonetics_desc ,
                sound: letter.sound ,
                letterToGuess: letterToGuess
            });
        }

    },

    changeWay: function(){
        this.setState({ way: !this.state.way });
    },

    toggleAudio: function(){
        this.setState({ is_sound: !this.state.is_sound });
    },

    nextletter: function(){

        var letter = letters[Math.floor(Math.random()*letters.length)];

        this.setState({
            learn: true ,
            arabic: letter.arabic ,
            phonetics: letter.phonetics ,
            beg: letter.beg ,
            mid: letter.mid ,
            end: letter.end ,
            phonetics_desc : letter.phonetics_desc ,
            sound: letter.sound
        });
    },

    render: function() {
        return <div className="container">
            <div className="row">
                <div className="col-lg-4 col-lg-offset-4 text-xs-center">
                    <label className="c-input c-checkbox">
                        <input type="checkbox" checked={this.state.is_sound} onChange={this.toggleAudio}/>
                        <span className="c-indicator"></span>
                        <small className= "text-muted">
                            <i className="fa fa-volume-up" aria-hidden="true"></i> Prononciation audio
                        </small>
                    </label>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-lg-4 col-lg-offset-4">
                    <div className={ this.state.learn ? 'animated fadeIn card' : 'card hidden-xs-up' }>
                        <div className="card-header text-xs-center">
                            Prononciation ?
                        </div>
                        <Mute letter={this.state.letterToGuess} phonetics={this.state.phonetics} sound={this.state.sound} way={this.state.way} />
                        <div className="card-block">
                            <a href="#" className="btn btn-primary btn-block" onClick={this.switchcard}>
                                Solution
                            </a>
                        </div>
                    </div>
                    <div className={ this.state.learn ? 'card hidden-xs-up' : 'card' }>
                        <div className="card-header text-xs-center">
                            Solution
                        </div>
                        <Solution arabic={this.state.arabic} beg={this.state.beg} mid={this.state.mid} end={this.state.end} phonetics={this.state.phonetics} phonetics_desc={this.state.phonetics_desc} sound={this.state.sound} way={this.state.way} />
                        <div className="card-block">
                            <a href="#" className="btn btn-primary btn-block" onClick={this.nextletter}>
                                Lettre suivante ↦
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-lg-offset-4 text-xs-center text-muted">
                    <small>
                        Dans quel sens souhaitez vous apprendre l&rsquo;alphabet arabe ?
                    </small>
                    <br/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-lg-offset-4 text-xs-center">
                    <label className="c-input c-radio">
                    <input id="radio1" name="radio" type="radio" checked={this.state.way} onChange={this.changeWay} />
                    <span className="c-indicator"></span>
                        <small>Arabe ↦ Phonétique</small>
                    </label>
                    <label className="c-input c-radio">
                    <input id="radio2" name="radio" type="radio" checked={!this.state.way} onChange={this.changeWay} />
                    <span className="c-indicator"></span>
                        <small>Phonétique ↦ Arabe</small>
                    </label>
                </div>
            </div>
        </div>;
    }
});

ReactDOM.render(
    <Flashcards />,
    document.getElementById('app')
);
