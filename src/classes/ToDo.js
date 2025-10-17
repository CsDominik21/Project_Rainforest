export default class Role {
    #icon;
    #title;
    #desc;
    #delay;

    constructor(icon, title, desc, delay) {
        this.#icon = icon;
        this.#title = title;
        this.#desc = desc;
        this.#delay = delay;

        this.getIcon = this.getIcon.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.getDesc = this.getDesc.bind(this);
        this.getDelay = this.getDelay.bind(this);
    }

    getIcon() {
        return this.#icon;
    }

    getTitle() {
        return this.#title;
    }

    getDesc() {
        return this.#desc;
    }

    getDelay() {
        return this.#delay;
    }
}