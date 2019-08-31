// Dependencies
import React, { Component } from 'react';

// ScrummyCard
import ScrummyCard from '../ScrummyCard/ScrummyCard';

export class Standard extends Component {
    constructor() {
        super();

        this.state = {
            cards: [
                {
                    value: 0
                },
                {
                    value: .5
                },
                {
                    value: 1
                },
                {
                    value: 2
                },
                {
                    value: 3
                },
                {
                    value: 5
                },
                {
                    value: 8
                },
                {
                    value: 13
                },
                {
                    value: 20
                },
                {
                    value: 40
                },
                {
                    value: 90
                },
                {
                    value: 100
                },
                {
                    value: '?'
                },
                {
                    value: 'Inf'
                },
                {
                    value: 'CUP'
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
            <div>
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
