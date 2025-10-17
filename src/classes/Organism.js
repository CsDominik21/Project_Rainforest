export default class Organism {
    #id;
    #name;
    #image;
    #count;
    #desc;

    constructor(id, name, image, count, desc) {
        this.#id = id;
        this.#name = name;
        this.#image = image;
        this.#count = count;
        this.#desc = desc;

        this.getId = this.getId.bind(this);
        this.getName = this.getName.bind(this);
        this.getImage = this.getImage.bind(this);
        this.getCount = this.getCount.bind(this);
        this.getDesc = this.getDesc.bind(this);
    }

    getId() {
        return this.#id;
    }

    getName() {
        return this.#name;
    }

    getImage() {
        return this.#image;
    }

    getCount() {
        return this.#count;
    }

    getDesc() {
        return this.#desc;
    }
}