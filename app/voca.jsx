const Phonetics = React.createClass({
    render: function() {
        return <li className="list-group-item text-xs-center">
            <p className="text-muted lead">
                {this.props.phonetics}
            </p>
        </li>;
    }
});

const Mute = React.createClass({
    render: function() {
        return <ul className="list-group list-group-flush">
            <li className="list-group-item text-xs-center text-primary">
                <h1 className="text-primary">
                    {this.props.way ? this.props.french : this.props.arabic}
                </h1>
            </li>
        </ul>;
    }
});

const Solution = React.createClass({
    render: function() {
        return <ul className="list-group list-group-flush">
            <li className="list-group-item text-xs-center">
                <h1 className="text-success">
                    {this.props.way ? this.props.arabic : this.props.french }
                </h1>
            </li>
            {this.props.is_phonetics ? <Phonetics phonetics={this.props.phonetics} /> : '' }
        </ul>;
    }
});

const Flashcards = React.createClass({

    getInitialState: function(){

        words.map(function(word){
            word.count = 0 ;
        });

        var word = words[ Math.floor(Math.random()*words.length) ];

        var returnState = {
            learn: true ,
            arabic: word.arabic ,
            phonetics: word.phonetics ,
            french: word.french ,
            way: true ,
            is_sound: true ,
            is_phonetics : true ,
            global_count: 1 ,
            sample_size: words.length
        } ;

        return returnState;
    },

    componentDidMount: function(){
        key( 'right', this.nextword );
        key( 'space', this.switchcard );
        key( 'left', this.backIt );
        key( 'enter', this.sayWord );

    },

    changeWay: function() {
        this.setState({ way: !this.state.way });
    },

    backIt: function() {
        if ( !this.state.learn ) {
            this.setState({ learn: true });
        }
    },

    sayWord: function() {
        try {
            if ( this.state.is_sound ) {
                var msg = new SpeechSynthesisUtterance();
                msg.text = this.state.arabic ;
                msg.lang = 'ar-SA' ;
                window.speechSynthesis.speak(msg);
            }
        }
        catch (e) {
           console.log(e);
        }
    },

    switchcard: function(){

        ga('send', {
              hitType: 'event',
              eventCategory: 'SwitchCard',
              eventAction: 'SwitchCard'
        });

        if ( this.state.learn ) {

            this.setState({
                learn: false
            });

            this.sayWord();

        } else {

            var randomKey = Math.floor( Math.random() * words.length ) ;

            while ( words[randomKey].count > ( this.state.global_count / this.state.sample_size ) ) {
                randomKey = Math.floor( Math.random() * words.length ) ;
            }

            words[randomKey].count++ ;

            var word = words[randomKey] ;
            var newCount = this.state.global_count + 1;

            this.setState({
                learn: true ,
                arabic: word.arabic ,
                phonetics: word.phonetics ,
                french: word.french ,
                global_count: newCount
            });

        }

    },

    changeWay: function(){
        this.setState({ way: !this.state.way });
    },

    toggleAudio: function(){
        this.setState({ is_sound: !this.state.is_sound });
    },

    togglePhonetics: function(){
        this.setState({ is_phonetics: !this.state.is_phonetics });
    },

    nextword: function(){

        var word = words[Math.floor(Math.random()*words.length)];

        this.setState({
            learn: true ,
            arabic: word.arabic ,
            phonetics: word.phonetics ,
            french: word.french
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
                    <label className="c-input c-checkbox">
                        <input type="checkbox" checked={this.state.is_phonetics} onChange={this.togglePhonetics}/>
                        <span className="c-indicator"></span>
                        <small className= "text-muted">
                            Afficher Phonétique
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
                        <Mute arabic={this.state.arabic} phonetics={this.state.phonetics} french={this.state.french} way={this.state.way} is_phonetics={this.state.is_phonetics}/>
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
                        <Solution arabic={this.state.arabic} phonetics={this.state.phonetics} french={this.state.french} way={this.state.way} is_phonetics={this.state.is_phonetics} />
                        <div className="card-block">
                            <a href="#" className="btn btn-primary btn-block" onClick={this.switchcard}>
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
                        <small>Français ↦ Arabe</small>
                    </label>
                    <label className="c-input c-radio">
                    <input id="radio2" name="radio" type="radio" checked={!this.state.way} onChange={this.changeWay} />
                    <span className="c-indicator"></span>
                        <small>Arabe ↦ Français</small>
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
