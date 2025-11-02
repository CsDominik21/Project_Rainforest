export default class Member {
  #name;
  #role;
  #email;
  #phone;
  #image;

  constructor(name, role, email, phone, image) {
    this.#name = name;
    this.#role = role;
    this.#email = email;
    this.#phone = phone;
    this.#image = image;

    this.getName = this.getName.bind(this);
    this.getRole = this.getRole.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPhone = this.getPhone.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  getName() {
    return this.#name;
  }

  getRole() {
    return this.#role;
  }

  getEmail() {
    return this.#email;
  }

  getPhone() {
    return this.#phone;
  }
  getImage() {
    return this.#image;
  }
}
