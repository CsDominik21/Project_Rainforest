export default class Organism {
    #id;
    #name;
    #image;
    #location;
    #desc;

    constructor(id, name, image, location, desc) {
        this.#id = id;
        this.#name = name;
        this.#image = image;
        this.#location = location;
        this.#desc = desc;

        this.getId = this.getId.bind(this);
        this.getName = this.getName.bind(this);
        this.getImage = this.getImage.bind(this);
        this.getLocation = this.getLocation.bind(this);
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

    getLocation() {
        return this.#location;
    }

    getDesc() {
        return this.#desc;
    }
}