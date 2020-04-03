class App extends React.Component {
    constructor(){
        super()
        this.state = {
            oggetti: [ ],
            howmany:0
        }
    }

    componentDidMount() {
        setInterval(() => {
            const n = this.state.howmany
            this.setState( {
                oggetti: [...this.state.oggetti, {id:n+1, name:n+1} ],
                howmany: n+1
            })
        }, 2000);
    }

    render() {
        const listaOggetti = this.state.oggetti;

        const listaOggettiJSX = listaOggetti.map((o) => <li key={o.id}>{o.name}</li>);

        console.log(listaOggettiJSX);

        return <ul>{listaOggettiJSX}</ul>;
    }
}

ReactDOM.render(<App />, document.getElementById('app'))