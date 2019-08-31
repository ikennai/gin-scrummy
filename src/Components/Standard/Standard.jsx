// Dependencies
import React, { Component } from 'react';

// ScrummyCard
import ScrummyCard from '../ScrummyCard/ScrummyCard';

import scrummy0 from '../../assets/files/scrummy-0.svg';
import scrummy1half from '../../assets/files/scrummy-1-2.svg';
import scrummy1 from '../../assets/files/scrummy-1-01.svg';
import scrummy2 from '../../assets/files/scrummy-2-01.svg';
import scrummy3 from '../../assets/files/scrummy-3-01.svg';
import scrummy5 from '../../assets/files/scrummy-5-01.svg';
import scrummy8 from '../../assets/files/scrummy-8-01.svg';
import scrummy13 from '../../assets/files/scrummy-13-01.svg';
import scrummy20 from '../../assets/files/scrummy-20-01.svg';
import scrummy40 from '../../assets/files/scrummy-40-01.svg';
import scrummy90 from '../../assets/files/scrummy-90-01.svg';
import scrummy100 from '../../assets/files/scrummy-100.svg';
import scrummyInfinite from '../../assets/files/scrummy-infinite-01.svg';
import scrummyQuestion from '../../assets/files/scrummy-question-01.svg';
import scrummyTeacup from '../../assets/files/scrummy-teacup-01.svg';

export class Standard extends Component {
    constructor() {
        super();

        this.state = {
            cards: [
                {
                    value: <img src={scrummy0} />
                },
                {
                    value: <img src={scrummy1half} />
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
                    value: <img src={scrummy20} />
                },
                {
                    value: <img src={scrummy40} />
                },
                {
                    value: <img src={scrummy90} />
                },
                {
                    value: <img src={scrummy100} />
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
        console.log(this.state);
        console.log(`You selected card: ${selectedCard.value}`);

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
                <div className="gin-scrummy-standard">
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

export default Standard;
