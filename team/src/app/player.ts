export class Player{
    constructor (
        public name: string = "",
        public prefPos: string = "",
        public games: object= {game1: "undecided", game2: 'undecided', game3:'undecided'}
    ){}
}