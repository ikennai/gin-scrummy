// Dependencies
import React, { Component } from 'react';

// ScrummyCard
import ScrummyCard from '../ScrummyCard/ScrummyCard';

import scrummy0 from '../../assets/files/scrummy-0.svg';
import scrummy1 from '../../assets/files/scrummy-1-01.svg';
import scrummy2 from '../../assets/files/scrummy-2-01.svg';
import scrummy3 from '../../assets/files/scrummy-3-01.svg';
import scrummy5 from '../../assets/files/scrummy-5-01.svg';
import scrummy8 from '../../assets/files/scrummy-8-01.svg';
import scrummy13 from '../../assets/files/scrummy-13-01.svg';
import scrummy21 from '../../assets/files/scrummy-21-01.svg';
import scrummy34 from '../../assets/files/scrummy-34-01.svg';
import scrummy55 from '../../assets/files/scrummy-55-01.svg';
import scrummy89 from '../../assets/files/scrummy-89-01.svg';
import scrummy144 from '../../assets/files/scrummy-144-01.svg';
import scrummyInfinite from '../../assets/files/scrummy-infinite-01.svg';
import scrummyQuestion from '../../assets/files/scrummy-question-01.svg';
import scrummyTeacup from '../../assets/files/scrummy-teacup-01.svg';

export class Fibonacci extends Component {
    constructor() {
        super();

        this.state = {
            cards: [
                {
                    value: <img src={scrummy0} />
                },
                {
                    value: <img src={scrummy1} />
                },
                {
                    value: <img src={scrummy2} />
                },
                {
                    value: <img src={scrummy3} />
                },
                {
                    value: <img src={scrummy5} />
                },
                {
                    value: <img src={scrummy8} />
                },
                {
                    value: <img src={scrummy13} />
                },
                {
                    value: <img src={scrummy21} />
                },
                {
                    value: <img src={scrummy34} />
                },
                {
                    value: <img src={scrummy55} />
                },
                {
                    value: <img src={scrummy89} />
                },
                {
                    value: <img src={scrummy144} />
                },
                {
                    value: <img src={scrummyQuestion} />
                },
                {
                    value: <img src={scrummyInfinite} />
                },
                {
                    value: <img src={scrummyTeacup} />
                },
            ],
            selectedCard: {}
        }
    }

    handleSelectCard = (selectedCard) => {

        this.setState({
            selectedCard
        });

        this.handleShowPreview();
    };

    handleCloseCard = () => {
        // Do something
        const selected = document.querySelector('.gin-scrummy-selected');

        selected.classList.add('close');
        window.setTimeout(() => {
            console.log('>>> removing show classes');
            selected.classList.remove('preview', 'show', 'showed');
            // selected.style.display = 'none';
            document.querySelector('.gin-scrummy-selected__preview').style.display = 'block';
        });
    }

    handleShowPreview = () => {
        // TODO: Show preview
        const selected = document.querySelector('.gin-scrummy-selected');
        selected.style.display = 'flex';
        selected.classList.add('preview');
    }

    handleShowCard = () => {
        // Show selected card
        const selected = document.querySelector('.gin-scrummy-selected');

        window.setTimeout(() => {
            document.querySelector('.gin-scrummy-selected__preview').style.display = 'none';
            selected.classList.add('showed');
        }, 1000);

        selected.classList.add('show');
    }

    render() {
        return (
            <div className="gin-scrummy-wrapper">
                <div className="gin-scrummy-fibonacci">
                    <div className="gin-scrummy__cards">
                        {this.state.cards.map(card => <ScrummyCard key={card.value} card={card} handleClick={this.handleSelectCard} />)}
                    </div>
                </div>

                <div className="gin-scrummy-selected">
                    <div className="gin-scrummy-selected__preview" onClick={() => this.handleShowCard()}>
                        <span className="gin-scrummy-selected__preview-text">READY</span>
                    </div>

                    <div className="gin-scrummy-selected__show" onClick={() => this.handleCloseCard()}>
                        <ScrummyCard card={this.state.selectedCard} handleClick={this.handleCloseCard} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Fibonacci;
