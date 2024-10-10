const {selectCard} = require('./pokerCards');

// Test case 1: Select an existing card and verify if it's removed and the deck is shuffled
it ('Should select an existing card and remove it from the array', () => {
    const deck = ['A♠', '2♠', '3♠', '4♠', '5♠'];
    const card = selectCard(deck, '3♠')
    expect(card).toBe ('3♠');
    expect(deck).not.toContain('3♠');
    expect(deck.length).toBe(4);
})


// Test case 2: Select another existing card and check removal
test('Should select an existing card and remove it correctly', () => {
    const deck = ['A♥', 'K♦', '10♣', 'J♠'];
    const card = selectCard(deck, 'A♥');
    expect(card).toBe('A♥');
    expect(deck).not.toContain('A♥');
    expect(deck.length).toBe(3);
});

// Test case 3: Select a card that is not in the deck
test('Should return undefined if the card is not in the deck', () => {
    const deck = ['7♠', '8♦', '9♣'];
    const card = selectCard(deck, '10♣');
    expect(card).toBeUndefined();
    expect(deck.length).toBe(3);
});

// Test case 4: Verify that the deck is shuffled after selecting a card
test('The deck should be shuffled after selecting a card', () => {
    const deck = ['A♠', '2♠', '3♠', '4♠', '5♠'];
    const originalDeck = [...deck]; // Copy of the original array
    selectCard(deck, 'A♠');
    
    // Verify that the deck has been shuffled
    expect(deck).not.toEqual(originalDeck.slice(1)); // Remaining cards should be shuffled
    expect(deck.length).toBe(4);
});

// Test case 5: 