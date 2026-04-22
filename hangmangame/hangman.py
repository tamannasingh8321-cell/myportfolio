import random

WORDS = ["apple", "banana", "mango", "strawberry", "kiwi", "watermelon"]

STAGES = [
"""
   =========
   |       |
   |
   |
   |
   |
   |
==========""",
"""
   =========
   |       |
   |      _|_
   |     /   \\
   |     \\___/
   |
   |
==========""",
"""
   =========
   |       |
   |      _|_
   |     /   \\
   |     \\___/
   |       |
   |
==========""",
"""
   =========
   |       |
   |      _|_
   |     /   \\
   |     \\___/
   |      /|
   |     /
==========""",
"""
   =========
   |       |
   |      _|_
   |     /   \\
   |     \\___/
   |      /|\\
   |     / \\
==========""",
"""
   =========
   |       |
   |      _|_
   |     /   \\
   |     \\___/
   |      /|\\
   |      /
==========""",
"""
   =========
   |       |
   |      _|_
   |     /   \\
   |     \\___/
   |      /|\\
   |      / \\
==========""",
]

def display_word(word, guessed):
    return "  ".join(c if c in guessed else "_" for c in word)

def play():
    word    = random.choice(WORDS)
    guessed = []
    lives   = 6

    print("\n" + "=" * 30)
    print("   W A N T E D — HANGMAN")
    print("=" * 30)

    while True:
        print(STAGES[6 - lives])
        print(f"\n  Lives : {lives}")
        print(f"  Word  : {display_word(word, guessed)}\n")

        wrong = [l for l in guessed if l not in word]
        if wrong:
            print(f"  Wrong : {', '.join(wrong).upper()}\n")

        if all(c in guessed for c in word):
            print("  *** YOU SURVIVED, PARTNER! ***\n")
            return

        if lives == 0:
            print(f"  *** HANGED! The word was: {word.upper()} ***\n")
            return

        guess = input("  Guess a letter: ").lower().strip()

        if len(guess) != 1 or not guess.isalpha():
            print("  Enter a single letter.\n")
            continue
        if guess in guessed:
            print("  Already guessed that one.\n")
            continue

        guessed.append(guess)

        if guess in word:
            print(f"  -> '{guess.upper()}' is correct!\n")
        else:
            lives -= 1
            print(f"  -> '{guess.upper()}' is wrong!\n")

if __name__ == "__main__":
    while True:
        play()
        if input("  Play again? (y/n): ").lower().strip() != "y":
            print("\n  Ride off into the sunset, partner.\n")
            break
