export class mainview {
    result: HTMLDivElement
    link: HTMLButtonElement

    constructor() {
        this.result = document.getElementById('result') as HTMLDivElement;
        this.link = document.getElementById('clear') as HTMLButtonElement;

        this.link.addEventListener("click", () => this.clearResult());
    }

    private clearResult() {
        this.result.innerHTML = "";
    }
}