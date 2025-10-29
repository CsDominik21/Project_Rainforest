export default class Organism {
    #id;
    #name;
    #image;
    #location;
    #desc;
    #type;

    constructor(id, name, image, location, desc, type) {
        this.#id = id;
        this.#name = name;
        this.#image = image;
        this.#location = location;
        this.#desc = desc;
        this.#type = type;

        this.getId = this.getId.bind(this);
        this.getName = this.getName.bind(this);
        this.getImage = this.getImage.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.getDesc = this.getDesc.bind(this);
        this.getType = this.getType.bind(this);
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

    getType(){
        return this.#type;
    }
}