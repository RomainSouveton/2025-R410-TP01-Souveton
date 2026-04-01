export class MainView {
    result: HTMLDivElement
    link: HTMLButtonElement
    select: HTMLSelectElement
    input: HTMLTextAreaElement
    addBtn: HTMLButtonElement

    constructor() {
        this.result = document.getElementById('result') as HTMLDivElement;
        this.link = document.getElementById('clear') as HTMLButtonElement;
        this.input = document.getElementById('html') as HTMLTextAreaElement;
        this.select = document.getElementById('type') as HTMLSelectElement;
        this.link.addEventListener("click", () => this.clearResult());
        
        this.addBtn = document.getElementById('ok') as HTMLButtonElement;
        this.addBtn.addEventListener("click", () => this.ClickAddTexte());
    }

    private clearResult() {
        this.result.innerHTML = "";
    }

    private addElement(type: string, text: string) {
        const el = document.createElement(type);
        el.textContent = text;
        this.result.appendChild(el);
        this.input.value = "";
    }

    private ClickAddTexte(){
        let select = this.select.value;
        let input = this.input.value;
        this.addElement(select, input);
    }

}