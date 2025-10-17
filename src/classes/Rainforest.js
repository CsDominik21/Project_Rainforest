export default class Rainforest {
    #id;
    #name;
    #left;
    #top;
    #image;
    #info;
    #region;

    constructor(id, name, left, top, image, info, region) {
        this.#id = id;
        this.#name = name;
        this.#left = left;
        this.#top = top;
        this.#image = image;
        this.#info = info;
        this.#region = region;


        this.getId = this.getId.bind(this);
        this.getName = this.getName.bind(this);
        this.getLeft = this.getLeft.bind(this);
        this.getTop = this.getTop.bind(this);
        this.getImage = this.getImage.bind(this);
        this.getInfo = this.getInfo.bind(this);
        this.getRegion = this.getRegion.bind(this);
    }

    getId() {
        return this.#id;
    }

    getName() {
        return this.#name;
    }

    getLeft() {
        return this.#left;
    }

    getTop() {
        return this.#top;
    }

    getImage() {
        return this.#image;
    }

    getInfo() {
        return this.#info;
    }

    getRegion() {
        return this.#region;
    }
}