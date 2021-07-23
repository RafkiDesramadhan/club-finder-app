class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    connectedCallback() {
        this.render();
    }
    //harus disediakan setter karena dia button
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                :host {
                    max-width: 800px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    padding: 16px;
                    border-radius: 5px;
                    display: flex;
                    position: sticky;
                    top: 10px;
                    background-color: white;
                }
                
                :host > input {
                    width: 75%;
                    padding: 16px;
                    border: 0;
                    border-bottom: 1px solid cornflowerblue;
                    font-weight: bold;
                }
                
                :host > input:focus {
                    outline: 0;
                    border-bottom: 2px solid cornflowerblue;
                }
                
                :host > input:focus::placeholder {
                    font-weight: bold;
                }
                
                :host >  input::placeholder {
                    color: cornflowerblue;
                    font-weight: normal;
                }
                
                :host > button {
                    width: 23%;
                    cursor: pointer;
                    margin-left: auto;
                    padding: 16px;
                    background-color: cornflowerblue;
                    color: white;
                    border: 0;
                    text-transform: uppercase;
                }
                
                @media screen and (max-width: 550px){
                    :host {
                        flex-direction: column;
                        position: static;
                    }
                
                    :host > input {
                        width: 100%;
                        margin-bottom: 12px;
                    }
                
                    :host > button {
                        width: 100%;
                    }
                }
            </style>

            <input placeholder="Search football club" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        `;
        //event button
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);