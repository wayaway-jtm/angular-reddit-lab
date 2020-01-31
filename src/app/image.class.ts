export class Image {
    url: string;
    width: Number;
    height: Number;

    constructor(url: string, width: Number = 100, height: Number = 100) {
        this.url = url;
        this.width = width;
        this.height = height;
    }
}